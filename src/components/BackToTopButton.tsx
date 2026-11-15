import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

export const BackToTopButton: React.FC = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById('top');
    if (!heroEl) {
      const handleFallbackScroll = () => {
        setVisible(window.scrollY > 520);
      };
      window.addEventListener('scroll', handleFallbackScroll, { passive: true });
      handleFallbackScroll();
      return () => window.removeEventListener('scroll', handleFallbackScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show button only after the user has scrolled past the hero section
        setVisible(!entry.isIntersecting && entry.boundingClientRect.bottom <= 64);
      },
      {
        root: null,
        rootMargin: '-64px 0px 0px 0px',
        threshold: 0,
      }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  const handleScrollTop = () => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={handleScrollTop}
      aria-label={t('back_to_top')}
      title={t('back_to_top')}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#0B0B0D]/95 text-[#DFBE6A] border border-[#C8A24A]/60 shadow-xl hover:bg-[#18181C] hover:border-[#DFBE6A] transition-all duration-200 cursor-pointer ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-4 h-4 shrink-0" aria-hidden="true" />
    </button>
  );
};
