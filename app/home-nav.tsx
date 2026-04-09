import PillNav from "@/components/PillNav";
import { getTranslations, type Locale } from "@/lib/i18n";

type HomeNavProps = {
  lang: Locale;
};

export default function HomeNav({ lang }: HomeNavProps) {
  const translations = getTranslations(lang);

  return (
    <div className="w-screen flex justify-center fixed top-0 left-0 z-100">
      <PillNav
        logo="/globe.svg"
        logoAlt={translations.navigation.logoAlt}
        navAriaLabel={translations.navigation.ariaLabel}
        homeAriaLabel={translations.navigation.homeAriaLabel}
        toggleMenuAriaLabel={translations.navigation.menuAriaLabel}
        languageMenuAriaLabel={translations.navigation.languageMenuAriaLabel}
        items={translations.navigation.items}
        localeItems={[
          { code: 'fr', label: 'FR', ariaLabel: 'Français' },
          { code: 'en', label: 'EN', ariaLabel: 'English' }
        ]}
        currentLocale={lang}
        activeHref="#main"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        initialLoadAnimation={true}
      />
    </div>
  );
}
