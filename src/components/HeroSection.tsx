import React, { useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { AutoKrisLogo } from './AutoKrisLogo';
import { HERO_MEDIA } from '../data/catalog';
import { useTranslation } from '../i18n/LanguageContext';

interface HeroSectionProps {
  onSearchCatalogue: (query: string) => void;
  onBrowseParts: () => void;
  onRequestPart: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearchCatalogue,
  onBrowseParts,
  onRequestPart,
}) => {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [imgError, setImgError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchCatalogue(query);
  };

  return (
    <section id="top" className="relative bg-[#0B0B0D] text-white overflow-hidden">
      {/* Subtle architectural warm studio glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,162,74,0.14),transparent_55%)]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Editorial Column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <AutoKrisLogo variant="full" theme="dark" className="mb-8" />

              <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#DFBE6A] mb-3">
                {t('hero_activity')}
              </p>

              <h1
                className="font-display font-bold tracking-tight text-white leading-[1.08] mb-5 max-w-xl"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.6rem)' }}
              >
                {t('hero_headline')}
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl mb-8">
                {t('hero_subheadline')}
              </p>

              {/* Functional Hero Product Search */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2.5 max-w-xl mb-6"
                role="search"
              >
                <div className="relative flex-1">
                  <Search
                    className="w-4 h-4 text-neutral-400 absolute start-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t('hero_search_placeholder')}
                    aria-label={t('hero_search_placeholder')}
                    className="w-full min-h-[46px] ps-10 pe-4 py-2.5 text-sm bg-[#16161A] text-white placeholder:text-neutral-500 border border-white/15 rounded-lg focus:outline-none focus:border-[#C8A24A] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="min-h-[46px] px-5 py-2.5 text-sm font-semibold text-white bg-[#232329] hover:bg-[#2E2E36] border border-white/15 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {t('hero_search_btn')}
                </button>
              </form>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={onBrowseParts}
                  className="inline-flex items-center gap-2 min-h-[46px] px-6 py-3 text-sm font-semibold text-[#0B0B0D] bg-[#C8A24A] hover:bg-[#DFBE6A] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>{t('hero_cta_browse')}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={onRequestPart}
                  className="inline-flex items-center justify-center min-h-[46px] px-6 py-3 text-sm font-semibold text-white bg-transparent hover:bg-white/10 border border-white/25 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {t('hero_cta_request')}
                </button>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-neutral-400">
              <span>{t('hero_location_line')}</span>
              <span aria-hidden="true">·</span>
              <a
                href="tel:+243985536137"
                className="font-mono tabular-nums text-neutral-300 hover:text-[#DFBE6A] transition-colors"
              >
                +243985536137
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="tel:+243812229374"
                className="font-mono tabular-nums text-neutral-300 hover:text-[#DFBE6A] transition-colors"
              >
                +243812229374
              </a>
            </div>
          </div>

          {/* Right Media Carrier */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full min-h-[300px] lg:h-full rounded-2xl overflow-hidden border border-white/12 bg-[#141417]">
              {!imgError ? (
                <img
                  src={HERO_MEDIA}
                  alt="AUTO KRIS — Pièces de rechange d'origine : disque de frein ventilé, piston forgé, courroie de distribution"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full min-h-[320px] flex flex-col items-center justify-center bg-gradient-to-br from-[#18181C] to-[#0B0B0D] p-8 text-center">
                  <AutoKrisLogo variant="full" theme="dark" />
                </div>
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/80 via-transparent to-transparent"
              />
              <div className="absolute bottom-5 start-5 end-5 flex items-center justify-between gap-4 text-xs text-neutral-200">
                <span className="font-medium tracking-wide">OEM · Genuine Aftermarket</span>
                <span className="font-mono text-[#DFBE6A]">Kinshasa, DRC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
