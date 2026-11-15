import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  const pillars = [
    { title: t('why_01_title'), desc: t('why_01_desc') },
    { title: t('why_02_title'), desc: t('why_02_desc') },
    { title: t('why_03_title'), desc: t('why_03_desc') },
    { title: t('why_04_title'), desc: t('why_04_desc') },
  ];

  return (
    <section id="about" className="bg-white border-b border-[#E6E5E0] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* About AUTO KRIS Narrative */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7829] mb-2">
              {t('about_title')}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B0B0D] mb-6">
              {t('about_lead')}
            </h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              {t('about_p1')}
            </p>
            <p className="text-base text-neutral-600 leading-relaxed">
              {t('about_p2')}
            </p>
          </div>

          {/* Why Choose AUTO KRIS (Clean numbered architectural grid) */}
          <div className="lg:col-span-7">
            <h3 className="font-display text-lg font-semibold text-[#0B0B0D] mb-6">
              {t('why_title')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-[#F7F7F5] border border-[#E6E5E0] rounded-xl p-6 transition-colors duration-150 hover:border-[#C8A24A]/60"
                >
                  <h4 className="font-display text-base font-semibold text-[#0B0B0D] mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
