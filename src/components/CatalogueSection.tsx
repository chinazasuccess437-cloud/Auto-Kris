import React, { useState } from 'react';
import { MessageCircle, Search, X } from 'lucide-react';
import { CATALOG_PRODUCTS, CATEGORY_LIST } from '../data/catalog';
import { CategoryId, ProductItem } from '../types';
import { useTranslation } from '../i18n/LanguageContext';
import { buildWhatsAppUrl, formatProductEnquiryMessage } from '../utils/whatsapp';
import { TechnicalPartVisual } from './TechnicalPartVisual';
import { TranslationDict } from '../i18n/schema';

interface CatalogueSectionProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: CategoryId;
  onSelectCategory: (c: CategoryId) => void;
  selectedBrand: string;
  onClearBrand: () => void;
  onPrefillPartRequest: (partName: string, brandHint?: string) => void;
}

export const CatalogueSection: React.FC<CatalogueSectionProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  selectedBrand,
  onClearBrand,
  onPrefillPartRequest,
}) => {
  const { t } = useTranslation();
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const getCategoryLabel = (cat: CategoryId): string => {
    const map: Record<CategoryId, keyof TranslationDict> = {
      all: 'cat_all',
      engine: 'cat_engine',
      brakes: 'cat_brakes',
      suspension: 'cat_suspension',
      clutch: 'cat_clutch',
      transmission: 'cat_transmission',
      fuel: 'cat_fuel',
      filters: 'cat_filters',
      electrical: 'cat_electrical',
      cooling: 'cat_cooling',
      body: 'cat_body',
      interior: 'cat_interior',
      wheels: 'cat_wheels',
    };
    return t(map[cat]);
  };

  const filteredProducts = CATALOG_PRODUCTS.filter((item) => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) {
      return false;
    }
    if (selectedBrand !== 'ALL' && !item.compatibleBrands.includes(selectedBrand)) {
      return false;
    }
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;

    const name = t(item.nameKey as keyof TranslationDict).toLowerCase();
    const desc = t(item.descriptionKey as keyof TranslationDict).toLowerCase();
    const catLabel = getCategoryLabel(item.category).toLowerCase();
    const brands = item.compatibleBrands.join(' ').toLowerCase();
    const ref = item.partRefPrefix.toLowerCase();

    return (
      name.includes(q) ||
      desc.includes(q) ||
      catLabel.includes(q) ||
      brands.includes(q) ||
      ref.includes(q)
    );
  });

  const handleReset = () => {
    onSearchChange('');
    onSelectCategory('all');
    onClearBrand();
  };

  const renderCardMedia = (product: ProductItem, title: string) => {
    if (!product.image || failedImages[product.id]) {
      return <TechnicalPartVisual type={product.illustrationType} title={title} />;
    }
    return (
      <img
        src={product.image}
        alt={title}
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => setFailedImages((prev) => ({ ...prev, [product.id]: true }))}
        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
      />
    );
  };

  return (
    <section id="catalogue" className="bg-white border-b border-[#E6E5E0] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Search */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B0B0D] mb-2">
              {t('cat_section_title')}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              {t('cat_section_subtitle')}
            </p>
          </div>

          <div className="w-full lg:w-96 relative">
            <Search
              className="w-4 h-4 text-neutral-400 absolute start-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t('cat_search_placeholder')}
              aria-label={t('cat_search_placeholder')}
              className="w-full min-h-[44px] ps-10 pe-9 py-2.5 text-sm bg-[#F7F7F5] text-[#0B0B0D] placeholder:text-neutral-500 border border-[#DFDDD6] rounded-lg focus:outline-none focus:border-[#C8A24A] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                aria-label="Clear search"
                className="absolute end-2.5 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-[#0B0B0D] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* 12 Category Filter Buttons */}
        <div
          role="tablist"
          aria-label={t('cat_section_title')}
          className="flex flex-wrap gap-2 pb-6 border-b border-[#ECEBE6] mb-6"
        >
          {CATEGORY_LIST.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => onSelectCategory(cat)}
                className={`min-h-[38px] px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg border transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-[#0B0B0D] text-[#DFBE6A] border-[#0B0B0D]'
                    : 'bg-[#F7F7F5] text-neutral-700 border-[#E4E3DD] hover:border-[#C8A24A] hover:text-[#0B0B0D]'
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            );
          })}
        </div>

        {/* Results Meta & Active Brand Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs sm:text-sm text-neutral-600">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-medium text-[#0B0B0D] tabular-nums">
              {t('cat_results_count', { count: filteredProducts.length })}
            </span>

            {selectedBrand !== 'ALL' && (
              <>
                <span aria-hidden="true" className="text-neutral-300">·</span>
                <span>
                  {t('brands_active_filter')}{' '}
                  <strong className="text-[#0B0B0D] font-semibold">{selectedBrand}</strong>
                </span>
                <button
                  type="button"
                  onClick={onClearBrand}
                  className="text-xs font-semibold text-[#9B7829] hover:text-[#0B0B0D] underline underline-offset-4 cursor-pointer"
                >
                  {t('brands_clear')}
                </button>
              </>
            )}
          </div>

          {(selectedCategory !== 'all' || selectedBrand !== 'ALL' || searchQuery.trim() !== '') && (
            <button
              type="button"
              onClick={handleReset}
              className="text-xs font-medium text-neutral-600 hover:text-[#0B0B0D] underline underline-offset-4 cursor-pointer"
            >
              {t('cat_reset_filters')}
            </button>
          )}
        </div>

        {/* Product Grid or Empty State */}
        {filteredProducts.length === 0 ? (
          <div className="bg-[#F7F7F5] border border-[#E6E5E0] rounded-2xl p-10 text-center max-w-xl mx-auto">
            <h3 className="font-display text-lg font-semibold text-[#0B0B0D] mb-2">
              {t('cat_empty_title')}
            </h3>
            <p className="text-sm text-neutral-600 mb-6">{t('cat_empty_desc')}</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="min-h-[42px] px-4 py-2 text-sm font-medium text-[#0B0B0D] bg-white border border-[#D8D6D0] hover:border-[#0B0B0D] rounded-lg cursor-pointer"
              >
                {t('cat_reset_filters')}
              </button>
              <button
                type="button"
                onClick={() => onPrefillPartRequest(searchQuery || '', selectedBrand !== 'ALL' ? selectedBrand : undefined)}
                className="min-h-[42px] px-5 py-2 text-sm font-semibold text-[#0B0B0D] bg-[#C8A24A] hover:bg-[#DFBE6A] rounded-lg cursor-pointer"
              >
                {t('nav_request_part')}
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => {
              const title = t(product.nameKey as keyof TranslationDict);
              const description = t(product.descriptionKey as keyof TranslationDict);
              const catLabel = getCategoryLabel(product.category);
              const waMessage = formatProductEnquiryMessage(
                t('wa_greeting_product'),
                title,
                product.partRefPrefix,
                catLabel,
                selectedBrand !== 'ALL' ? [selectedBrand] : product.compatibleBrands
              );
              const waHref = buildWhatsAppUrl(waMessage);

              return (
                <article
                  key={product.id}
                  className="group bg-white border border-[#E4E3DD] rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C8A24A]"
                >
                  {/* 4:3 Uniform Studio Media */}
                  <div className="aspect-[4/3] w-full bg-[#ECECE8] overflow-hidden border-b border-[#ECEBE6]">
                    {renderCardMedia(product, title)}
                  </div>

                  {/* Product Info */}
                  <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                    <div>
                      {/* Clean unboxed metadata (Zero-Pill Discipline) */}
                      <div className="flex items-center gap-2 text-xs text-neutral-500 mb-1.5">
                        <span className="font-medium text-[#9B7829] truncate">{catLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono tabular-nums text-neutral-500 shrink-0">
                          {product.partRefPrefix}
                        </span>
                      </div>

                      <h3 className="font-display text-lg font-semibold text-[#0B0B0D] leading-snug mb-2">
                        {title}
                      </h3>

                      <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                        {description}
                      </p>

                      <p className="text-xs text-neutral-500 leading-relaxed">
                        {product.compatibleBrands.join(' · ')}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#ECEBE6] space-y-3">
                      <p className="text-xs font-medium text-neutral-500">
                        {t('cat_availability_note')}
                      </p>

                      <div className="flex items-center gap-2.5">
                        <a
                          href={waHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 min-h-[42px] px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#0B0B0D] bg-[#C8A24A] hover:bg-[#DFBE6A] rounded-lg transition-colors whitespace-nowrap"
                        >
                          <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                          <span className="truncate">{t('cat_btn_whatsapp')}</span>
                        </a>

                        <button
                          type="button"
                          onClick={() =>
                            onPrefillPartRequest(
                              title,
                              selectedBrand !== 'ALL' ? selectedBrand : undefined
                            )
                          }
                          className="min-h-[42px] px-3.5 py-2 text-xs sm:text-sm font-medium text-[#0B0B0D] bg-[#F7F7F5] hover:bg-[#EAE9E4] border border-[#DFDDD6] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          {t('cat_btn_prefill')}
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
