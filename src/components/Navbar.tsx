import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown, Globe, Menu, Search, X } from 'lucide-react';
import { AutoKrisLogo } from './AutoKrisLogo';
import { useTranslation } from '../i18n/LanguageContext';

interface NavbarProps {
  onNavigateRequestPart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateRequestPart }) => {
  const { language, setLanguage, languages, currentOption, t } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const [langQuery, setLangQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLangOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const filteredLanguages = useMemo(() => {
    const q = langQuery.trim().toLowerCase();
    if (!q) return languages;
    return languages.filter(
      (l) =>
        l.nativeName.toLowerCase().includes(q) ||
        l.englishName.toLowerCase().includes(q) ||
        l.code.toLowerCase().includes(q)
    );
  }, [languages, langQuery]);

  const navLinks = [
    { href: '#catalogue', label: t('nav_catalogue') },
    { href: '#manufacturers', label: t('nav_manufacturers') },
    { href: '#about', label: t('nav_about') },
    { href: '#founder', label: t('nav_founder') },
    { href: '#contact', label: t('nav_contact') },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B0B0D]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          aria-label="AUTO KRIS"
          className="inline-flex items-center whitespace-nowrap shrink-0 focus-visible:outline-none"
        >
          <AutoKrisLogo variant="compact" theme="dark" />
        </a>

        {/* Zone 2: Concise single-line nav links */}
        <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-300 hover:text-[#DFBE6A] transition-colors duration-150 whitespace-nowrap shrink-0 py-2 border-b-2 border-transparent hover:border-[#C8A24A]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Selector + Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setLangOpen((prev) => !prev)}
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              className="inline-flex items-center gap-2 min-h-[40px] px-3 py-2 text-xs sm:text-sm font-medium text-neutral-200 bg-[#18181C] hover:bg-[#222227] border border-white/15 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Globe className="w-4 h-4 text-[#C8A24A] shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">{t('lang_button_label')}</span>
              <span className="text-[#DFBE6A] font-semibold uppercase">{currentOption.code}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-150 ${
                  langOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {langOpen && (
              <div
                role="listbox"
                aria-label={t('lang_button_label')}
                className="absolute end-0 mt-2 w-64 bg-[#151518] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-50"
              >
                <div className="p-2.5 border-b border-white/10">
                  <div className="relative">
                    <Search
                      className="w-3.5 h-3.5 text-neutral-400 absolute start-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
                      aria-hidden="true"
                    />
                    <input
                      type="text"
                      value={langQuery}
                      onChange={(e) => setLangQuery(e.target.value)}
                      placeholder={t('lang_search_placeholder')}
                      className="w-full ps-8 pe-3 py-1.5 text-xs bg-[#0B0B0D] text-white placeholder:text-neutral-500 border border-white/10 rounded-lg focus:outline-none focus:border-[#C8A24A]"
                    />
                  </div>
                </div>
                <div className="max-h-72 overflow-y-auto py-1">
                  {filteredLanguages.length === 0 ? (
                    <div className="px-3 py-4 text-xs text-neutral-400 text-center">
                      {t('lang_empty')}
                    </div>
                  ) : (
                    filteredLanguages.map((lang) => {
                      const active = lang.code === language;
                      return (
                        <button
                          key={lang.code}
                          type="button"
                          role="option"
                          aria-selected={active}
                          onClick={() => {
                            setLanguage(lang.code);
                            setLangOpen(false);
                            setLangQuery('');
                          }}
                          className={`w-full text-start px-3.5 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                            active
                              ? 'bg-[#C8A24A]/15 text-[#DFBE6A] font-semibold'
                              : 'text-neutral-200 hover:bg-white/5'
                          }`}
                        >
                          <span className="truncate">{lang.nativeName}</span>
                          <span className="text-[11px] text-neutral-400 uppercase font-mono ms-2">
                            {lang.code}
                          </span>
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Primary CTA */}
          <button
            type="button"
            onClick={onNavigateRequestPart}
            className="hidden sm:inline-flex items-center justify-center min-h-[40px] px-4 py-2 text-xs sm:text-sm font-semibold text-[#0B0B0D] bg-[#C8A24A] hover:bg-[#DFBE6A] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t('nav_request_part')}
          </button>

          {/* Mobile Drawer Trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-neutral-200 hover:text-white bg-[#18181C] border border-white/15 rounded-lg cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#121215] border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-neutral-200 hover:text-[#DFBE6A] hover:bg-white/5 rounded-lg"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onNavigateRequestPart();
              }}
              className="w-full min-h-[44px] px-4 py-2.5 text-sm font-semibold text-[#0B0B0D] bg-[#C8A24A] hover:bg-[#DFBE6A] rounded-lg transition-colors cursor-pointer"
            >
              {t('nav_request_part')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
