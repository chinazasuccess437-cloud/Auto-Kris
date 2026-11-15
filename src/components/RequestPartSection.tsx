import React, { useEffect, useState } from 'react';
import { Check, Copy, MessageCircle } from 'lucide-react';
import { ALL_MANUFACTURER_NAMES } from '../data/manufacturers';
import { useTranslation } from '../i18n/LanguageContext';
import { buildWhatsAppUrl, formatPartRequestMessage } from '../utils/whatsapp';

interface RequestPartSectionProps {
  prefillPart: string;
  prefillBrand: string;
}

export const RequestPartSection: React.FC<RequestPartSectionProps> = ({
  prefillPart,
  prefillBrand,
}) => {
  const { t } = useTranslation();

  const [customerName, setCustomerName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [requiredPart, setRequiredPart] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const [error, setError] = useState('');
  const [preparedMessage, setPreparedMessage] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefillPart) {
      setRequiredPart(prefillPart);
      setPreparedMessage('');
    }
  }, [prefillPart]);

  useEffect(() => {
    if (prefillBrand) {
      setManufacturer(prefillBrand);
      setPreparedMessage('');
    }
  }, [prefillBrand]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !customerName.trim() ||
      !manufacturer.trim() ||
      !vehicleModel.trim() ||
      !vehicleYear.trim() ||
      !requiredPart.trim()
    ) {
      setError(t('req_validation_error'));
      return;
    }

    setError('');
    const msg = formatPartRequestMessage(
      t('wa_greeting_request'),
      {
        customerName,
        manufacturer: manufacturer === 'Other' ? t('brands_other') : manufacturer,
        vehicleModel,
        vehicleYear,
        requiredPart,
        additionalInfo,
      },
      {
        name: t('req_name_label'),
        make: t('req_make_label'),
        model: t('req_model_label'),
        year: t('req_year_label'),
        part: t('req_part_label'),
        info: t('req_info_label'),
      }
    );
    setPreparedMessage(msg);
  };

  const handleCopy = async () => {
    if (!preparedMessage) return;
    try {
      await navigator.clipboard.writeText(preparedMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard not available in restricted iframe
    }
  };

  const whatsappUrl = preparedMessage ? buildWhatsAppUrl(preparedMessage) : '#';

  return (
    <section id="request-part" className="bg-[#F7F7F5] border-b border-[#E6E5E0] py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B0B0D] mb-3">
            {t('req_title')}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            {t('req_subtitle')}
          </p>
        </div>

        <div className="bg-white border border-[#E3E2DD] rounded-2xl p-6 sm:p-8 lg:p-10">
          {!preparedMessage ? (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {error && (
                <div
                  role="alert"
                  className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-sm text-red-800"
                >
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="req-name"
                    className="block text-xs font-semibold text-[#0B0B0D] mb-1.5"
                  >
                    {t('req_name_label')} *
                  </label>
                  <input
                    id="req-name"
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder={t('req_name_placeholder')}
                    className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-[#F7F7F5] text-[#0B0B0D] placeholder:text-neutral-400 border border-[#DFDDD6] rounded-lg focus:outline-none focus:border-[#C8A24A]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="req-make"
                    className="block text-xs font-semibold text-[#0B0B0D] mb-1.5"
                  >
                    {t('req_make_label')} *
                  </label>
                  <select
                    id="req-make"
                    required
                    value={manufacturer}
                    onChange={(e) => setManufacturer(e.target.value)}
                    className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-[#F7F7F5] text-[#0B0B0D] border border-[#DFDDD6] rounded-lg focus:outline-none focus:border-[#C8A24A]"
                  >
                    <option value="">{t('req_make_placeholder')}</option>
                    {ALL_MANUFACTURER_NAMES.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand === 'Other' ? t('brands_other') : brand}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="req-model"
                    className="block text-xs font-semibold text-[#0B0B0D] mb-1.5"
                  >
                    {t('req_model_label')} *
                  </label>
                  <input
                    id="req-model"
                    type="text"
                    required
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                    placeholder={t('req_model_placeholder')}
                    className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-[#F7F7F5] text-[#0B0B0D] placeholder:text-neutral-400 border border-[#DFDDD6] rounded-lg focus:outline-none focus:border-[#C8A24A]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="req-year"
                    className="block text-xs font-semibold text-[#0B0B0D] mb-1.5"
                  >
                    {t('req_year_label')} *
                  </label>
                  <input
                    id="req-year"
                    type="text"
                    inputMode="numeric"
                    required
                    value={vehicleYear}
                    onChange={(e) => setVehicleYear(e.target.value)}
                    placeholder={t('req_year_placeholder')}
                    className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-[#F7F7F5] text-[#0B0B0D] placeholder:text-neutral-400 border border-[#DFDDD6] rounded-lg focus:outline-none focus:border-[#C8A24A] tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="req-part"
                  className="block text-xs font-semibold text-[#0B0B0D] mb-1.5"
                >
                  {t('req_part_label')} *
                </label>
                <input
                  id="req-part"
                  type="text"
                  required
                  value={requiredPart}
                  onChange={(e) => setRequiredPart(e.target.value)}
                  placeholder={t('req_part_placeholder')}
                  className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-[#F7F7F5] text-[#0B0B0D] placeholder:text-neutral-400 border border-[#DFDDD6] rounded-lg focus:outline-none focus:border-[#C8A24A]"
                />
              </div>

              <div>
                <label
                  htmlFor="req-info"
                  className="block text-xs font-semibold text-[#0B0B0D] mb-1.5"
                >
                  {t('req_info_label')}
                </label>
                <textarea
                  id="req-info"
                  rows={3}
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  placeholder={t('req_info_placeholder')}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F7F7F5] text-[#0B0B0D] placeholder:text-neutral-400 border border-[#DFDDD6] rounded-lg focus:outline-none focus:border-[#C8A24A]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3 text-sm font-semibold text-[#0B0B0D] bg-[#C8A24A] hover:bg-[#DFBE6A] rounded-lg transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>{t('req_submit_btn')}</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold text-[#0B0B0D] mb-1">
                  {t('req_ready_title')}
                </h3>
                <p className="text-sm text-neutral-600">{t('req_ready_desc')}</p>
              </div>

              <pre className="whitespace-pre-wrap font-sans text-sm text-[#0B0B0D] bg-[#F7F7F5] border border-[#E3E2DD] rounded-xl p-5 leading-relaxed">
                {preparedMessage}
              </pre>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 text-sm font-semibold text-[#0B0B0D] bg-[#C8A24A] hover:bg-[#DFBE6A] rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>{t('req_open_whatsapp')}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center gap-2 min-h-[46px] px-4 py-2.5 text-sm font-medium text-[#0B0B0D] bg-[#F7F7F5] hover:bg-[#EAE9E4] border border-[#DFDDD6] rounded-lg transition-colors cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                  ) : (
                    <Copy className="w-4 h-4" aria-hidden="true" />
                  )}
                  <span>{copied ? t('req_copied') : t('req_copy_msg')}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPreparedMessage('')}
                  className="min-h-[46px] px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-[#0B0B0D] underline underline-offset-4 cursor-pointer"
                >
                  {t('req_edit_form')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
