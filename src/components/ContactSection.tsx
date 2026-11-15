import React from 'react';
import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { useTranslation } from '../i18n/LanguageContext';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const { language, t } = useTranslation();

  const countryLabel = language === 'fr' ? COMPANY_INFO.countryFr : COMPANY_INFO.countryEn;
  const whatsappUrl = buildWhatsAppUrl(`Bonjour ${COMPANY_INFO.name}`);

  return (
    <section id="contact" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B0B0D] mb-3">
            {t('contact_title')}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            {t('contact_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Address */}
            <div className="bg-[#F7F7F5] border border-[#E4E3DD] rounded-xl p-6 flex flex-col justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9B7829] mb-2">
                  <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{t('contact_address_label')}</span>
                </div>
                <p className="font-display text-base font-semibold text-[#0B0B0D]">
                  {COMPANY_INFO.address}
                </p>
                <p className="text-sm text-neutral-600 mt-1">{countryLabel}</p>
              </div>
              <a
                href={COMPANY_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B0B0D] hover:text-[#9B7829] transition-colors"
              >
                <span>{t('contact_open_maps')}</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            {/* Primary Phone & WhatsApp */}
            <div className="bg-[#F7F7F5] border border-[#E4E3DD] rounded-xl p-6 flex flex-col justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9B7829] mb-2">
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{t('contact_whatsapp_label')}</span>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.whatsappTel}`}
                  className="font-mono text-lg font-semibold text-[#0B0B0D] hover:text-[#9B7829] tabular-nums block"
                >
                  {COMPANY_INFO.whatsappTel}
                </a>
                <p className="text-xs text-neutral-500 mt-1 font-mono tabular-nums">
                  {COMPANY_INFO.whatsappDisplay}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9B7829] hover:text-[#0B0B0D] transition-colors"
                >
                  {t('contact_write_whatsapp')}
                </a>
                <a
                  href={`tel:${COMPANY_INFO.whatsappTel}`}
                  className="text-[#0B0B0D] hover:text-[#9B7829] transition-colors"
                >
                  {t('contact_call_now')}
                </a>
              </div>
            </div>

            {/* Alternative Telephone */}
            <div className="bg-[#F7F7F5] border border-[#E4E3DD] rounded-xl p-6 flex flex-col justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9B7829] mb-2">
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{t('contact_phone_alt_label')}</span>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.altPhoneTel}`}
                  className="font-mono text-lg font-semibold text-[#0B0B0D] hover:text-[#9B7829] tabular-nums block"
                >
                  {COMPANY_INFO.altPhoneTel}
                </a>
                <p className="text-xs text-neutral-500 mt-1 font-mono tabular-nums">
                  {COMPANY_INFO.altPhoneDisplay}
                </p>
              </div>
              <a
                href={`tel:${COMPANY_INFO.altPhoneTel}`}
                className="text-sm font-semibold text-[#0B0B0D] hover:text-[#9B7829] transition-colors"
              >
                {t('contact_call_now')}
              </a>
            </div>

            {/* Email */}
            <div className="bg-[#F7F7F5] border border-[#E4E3DD] rounded-xl p-6 flex flex-col justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9B7829] mb-2">
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{t('contact_email_label')}</span>
                </div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="font-sans text-sm sm:text-base font-semibold text-[#0B0B0D] hover:text-[#9B7829] break-all block"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-sm font-semibold text-[#0B0B0D] hover:text-[#9B7829] transition-colors"
              >
                {t('contact_send_email')}
              </a>
            </div>
          </div>

          {/* Location Search Card (No invented GPS coordinates) */}
          <div className="lg:col-span-5 bg-[#0B0B0D] text-white rounded-2xl p-8 flex flex-col justify-between border border-white/10">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#DFBE6A] mb-3">
                Kinshasa · Kasa-Vubu
              </p>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                {COMPANY_INFO.businessActivityFr}
              </p>

              <div className="bg-[#151518] border border-white/12 rounded-xl p-5 space-y-2 text-sm">
                <p className="font-semibold text-white">{COMPANY_INFO.address}</p>
                <p className="text-neutral-400">{countryLabel}</p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={COMPANY_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 min-h-[46px] px-5 py-3 text-sm font-semibold text-[#0B0B0D] bg-[#C8A24A] hover:bg-[#DFBE6A] rounded-lg transition-colors"
              >
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>{t('contact_open_maps')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
