import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { useTranslation } from '../i18n/LanguageContext';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const { t } = useTranslation();
  const href = buildWhatsAppUrl(`Bonjour ${COMPANY_INFO.name},`);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('floating_whatsapp_label')}
      className="inline-flex items-center gap-2.5 min-h-[46px] px-4 py-2.5 rounded-xl bg-[#0B0B0D] text-[#DFBE6A] border border-[#C8A24A]/60 shadow-xl hover:bg-[#18181C] hover:border-[#DFBE6A] transition-all duration-150"
    >
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline text-xs font-semibold tracking-wide whitespace-nowrap">
        WhatsApp
      </span>
    </a>
  );
};
