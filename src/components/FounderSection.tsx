import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { useTranslation } from '../i18n/LanguageContext';

export const FounderSection: React.FC = () => {
  const { t } = useTranslation();
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="founder" className="bg-[#0B0B0D] text-white border-b border-white/10 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Exact Uploaded CEO Photograph */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-[#C8A24A]/35 bg-[#151518] shadow-2xl">
              {!photoError ? (
                <img
                  src={COMPANY_INFO.founderPhotoPath}
                  alt="AUTO KRIS — Founder and CEO in Kinshasa office"
                  referrerPolicy="no-referrer"
                  onError={() => setPhotoError(true)}
                  className="w-full h-full object-cover object-center scale-[1.34]"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#151518]">
                  <span className="font-display text-2xl font-bold text-[#DFBE6A]">AUTO KRIS</span>
                  <span className="text-xs text-neutral-400 mt-2">{t('founder_role')}</span>
                </div>
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/70 via-transparent to-transparent"
              />
              <div className="absolute bottom-4 start-4 end-4 flex items-center justify-between text-xs text-neutral-200">
                <span className="font-semibold tracking-wide">AUTO KRIS</span>
                <span className="text-[#DFBE6A] font-medium">Kinshasa, DRC</span>
              </div>
            </div>
          </div>

          {/* Founder Introduction & Vision */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#DFBE6A] mb-2">
                {t('founder_kicker')}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                {t('founder_title')}
              </h2>
              <p className="text-base font-medium text-[#DFBE6A]">
                {t('founder_role')}
              </p>
              <p className="text-sm text-neutral-400 mt-1">
                {t('founder_name_label')}
              </p>
            </div>

            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed max-w-2xl">
              {t('founder_intro')}
            </p>

            <div className="bg-[#151518] border border-white/12 rounded-xl p-6 sm:p-7 max-w-2xl">
              <h3 className="font-display text-sm font-semibold tracking-wide uppercase text-[#DFBE6A] mb-3">
                {t('founder_vision_heading')}
              </h3>
              <blockquote className="text-base text-neutral-200 leading-relaxed">
                {t('founder_vision')}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
