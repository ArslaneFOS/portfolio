'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { getLocale } from '@/lib/i18n';

const HtmlLangSync = () => {
  const searchParams = useSearchParams();
  const locale = getLocale(searchParams.get('lang') ?? undefined);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
};

export default HtmlLangSync;