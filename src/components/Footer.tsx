import React from 'react';
import { AutoKrisLogo } from './AutoKrisLogo';
import { COMPANY_INFO } from '../data/company';
import { useTranslation } from '../i18n/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0B0D] text-neutral-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          <div className="md:col-span-5 space-y-4">
            <AutoKrisLogo variant="full" theme="dark" />
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              {t('footer_tagline_note')}
            </p>
          </div>

          <div className="md:col-span-3 space-y-2.5 text-sm">
            <a href="#catalogue" className="block hover:text-[#DFBE6A] transition-colors">
              {t('nav_catalogue')}
            </a>
            <a href="#manufacturers" className="block hover:text-[#DFBE6A] transition-colors">
              {t('nav_manufacturers')}
            </a>
            <a href="#about" className="block hover:text-[#DFBE6A] transition-colors">
              {t('nav_about')}
            </a>
            <a href="#founder" className="block hover:text-[#DFBE6A] transition-colors">
              {t('nav_founder')}
            </a>
            <a href="#request-part" className="block hover:text-[#DFBE6A] transition-colors">
              {t('nav_request_part')}
            </a>
            <a href="#contact" className="block hover:text-[#DFBE6A] transition-colors">
              {t('nav_contact')}
            </a>
          </div>

          <div className="md:col-span-4 space-y-2.5 text-sm">
            <p className="text-white font-medium">{COMPANY_INFO.address}</p>
            <p>
              <a
                href={`tel:${COMPANY_INFO.whatsappTel}`}
                className="font-mono tabular-nums hover:text-[#DFBE6A] transition-colors"
              >
                {COMPANY_INFO.whatsappTel}
              </a>
            </p>
            <p>
              <a
                href={`tel:${COMPANY_INFO.altPhoneTel}`}
                className="font-mono tabular-nums hover:text-[#DFBE6A] transition-colors"
              >
                {COMPANY_INFO.altPhoneTel}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="hover:text-[#DFBE6A] transition-colors break-all"
              >
                {COMPANY_INFO.email}
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {year} {COMPANY_INFO.name}. {t('footer_rights')}
          </p>
          <p className="font-mono text-neutral-500">{COMPANY_INFO.tagline}</p>
        </div>
      </div>
    </footer>
  );
};
