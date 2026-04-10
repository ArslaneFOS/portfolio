import { re } from 'mathjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  subject: 150,
  message: 5000
} as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const normalize = (value: string) => value.trim();

const isValidPayload = (payload: unknown): payload is ContactPayload => {
  if (!payload || typeof payload !== 'object') {
    return false;
  }

  const candidate = payload as Partial<ContactPayload>;
  const name = typeof candidate.name === 'string' ? normalize(candidate.name) : '';
  const email = typeof candidate.email === 'string' ? normalize(candidate.email) : '';
  const subject = typeof candidate.subject === 'string' ? normalize(candidate.subject) : '';
  const message = typeof candidate.message === 'string' ? normalize(candidate.message) : '';

  return (
    name.length > 0 &&
    name.length <= MAX_LENGTHS.name &&
    email.length > 0 &&
    email.length <= MAX_LENGTHS.email &&
    EMAIL_REGEX.test(email) &&
    subject.length > 0 &&
    subject.length <= MAX_LENGTHS.subject &&
    message.length > 0 &&
    message.length <= MAX_LENGTHS.message
  );
};

const parseAllowedOrigins = (request: NextRequest): Set<string> => {
  const fromEnv = (process.env.ALLOWED_ORIGINS ?? '')
    .split(',')
    .map(origin => origin.trim().toLowerCase())
    .filter(Boolean);

  const requestHost = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
  const requestProto = request.headers.get('x-forwarded-proto') ?? 'https';
  const fallbackOrigin = requestHost ? `${requestProto}://${requestHost}`.toLowerCase() : null;

  if (fallbackOrigin) {
    fromEnv.push(fallbackOrigin);
  }

  return new Set(fromEnv);
};

const getRequestOrigin = (request: NextRequest): string | null => {
  const originHeader = request.headers.get('origin');
  if (originHeader) {
    return originHeader.toLowerCase();
  }

  const referer = request.headers.get('referer');
  if (!referer) {
    return null;
  }

  try {
    return new URL(referer).origin.toLowerCase();
  } catch {
    return null;
  }
};

const isSameSiteRequest = (request: NextRequest): boolean => {
  const secFetchSite = request.headers.get('sec-fetch-site');

  if (!secFetchSite) {
    return true;
  }

  return secFetchSite === 'same-origin' || secFetchSite === 'same-site';
};

export async function POST(request: NextRequest) {
  const allowedOrigins = parseAllowedOrigins(request);
  const requestOrigin = getRequestOrigin(request);

  if (!isSameSiteRequest(request) || !requestOrigin || !allowedOrigins.has(requestOrigin)) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Forbidden origin'
      },
      { status: 403 }
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: 'Invalid JSON payload'
      },
      { status: 400 }
    );
  }

  if (!isValidPayload(payload)) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Invalid form fields'
      },
      { status: 400 }
    );
  }

  // TODO: send email, enqueue in queue, or persist in your DB.
  // Send data to webhook
  // http://workflows.arslane-fos.work/webhook-test/freelance/contact-form
  if (process.env.CONTACT_FORM_WEBHOOK_URL) {
    try {
      const response = await fetch(process.env.CONTACT_FORM_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'contact_form_submission',
          data: payload
        })
      });
      if (!response.ok) {
        console.error('Webhook responded with non-OK status:', response.status);
        console.error('Response body:', await response.text());
        return NextResponse.json(
          {
            ok: false,
            error: 'Failed to send webhook'
          },
          { status: 500 }
        );
      }
    } catch (error) {
      console.error('Failed to send webhook:', error);
      return NextResponse.json(
        {
          ok: false,
          error: 'Failed to send webhook'
        },
        { status: 500 }
      );
    }
  }
  
  return NextResponse.json(
    {
      ok: true,
      message: 'Message received'
    },
    { status: 202 }
  );
}