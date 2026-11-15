import React from 'react';
import { VEHICLE_MANUFACTURERS } from '../data/manufacturers';
import { useTranslation } from '../i18n/LanguageContext';

interface ManufacturersSectionProps {
  selectedBrand: string;
  onSelectBrand: (brand: string) => void;
  onRequestOtherBrand: () => void;
}

export const ManufacturersSection: React.FC<ManufacturersSectionProps> = ({
  selectedBrand,
  onSelectBrand,
  onRequestOtherBrand,
}) => {
  const { t } = useTranslation();

  return (
    <section id="manufacturers" className="bg-[#F7F7F5] border-b border-[#E6E5E0] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0B0B0D] mb-2">
              {t('brands_title')}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              {t('brands_subtitle')}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onSelectBrand('ALL')}
            className={`min-h-[40px] px-4 py-2 text-xs sm:text-sm font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              selectedBrand === 'ALL'
                ? 'bg-[#0B0B0D] text-[#DFBE6A] border-[#0B0B0D]'
                : 'bg-white text-neutral-700 border-[#D8D6D0] hover:border-[#0B0B0D]'
            }`}
          >
            {t('brands_all')}
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {VEHICLE_MANUFACTURERS.map((brand) => {
            const active = selectedBrand === brand.name;
            return (
              <button
                key={brand.id}
                type="button"
                onClick={() => onSelectBrand(brand.name)}
                aria-pressed={active}
                className={`group text-start px-4 py-3.5 rounded-xl border transition-all duration-150 cursor-pointer flex items-center justify-between gap-2 ${
                  active
                    ? 'bg-[#0B0B0D] text-white border-[#C8A24A] shadow-sm'
                    : 'bg-white text-[#0B0B0D] border-[#E3E2DD] hover:border-[#C8A24A] hover:-translate-y-0.5'
                }`}
              >
                <span className="font-display text-sm font-semibold tracking-tight truncate">
                  {brand.name}
                </span>
                <span
                  className={`text-[11px] font-medium shrink-0 ${
                    active ? 'text-[#DFBE6A]' : 'text-neutral-400 group-hover:text-[#9B7829]'
                  }`}
                >
                  {brand.origin}
                </span>
              </button>
            );
          })}

          <button
            type="button"
            onClick={onRequestOtherBrand}
            className="text-start px-4 py-3.5 rounded-xl border border-dashed border-[#C8A24A]/70 bg-[#FAF7EE] text-[#0B0B0D] hover:bg-[#F3ECD6] transition-colors duration-150 cursor-pointer flex items-center justify-between gap-2"
          >
            <span className="font-display text-sm font-semibold tracking-tight truncate">
              {t('brands_other')}
            </span>
            <span className="text-xs font-semibold text-[#9B7829]">+</span>
          </button>
        </div>
      </div>
    </section>
  );
};
