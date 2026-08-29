import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

const NAV = [
  { href: '#services', label: 'Услуги' },
  { href: '#how', label: 'Как работаем' },
  { href: '#order', label: 'Порядок' },
  { href: '#faq', label: 'Вопросы' },
];

export const Brand = ({ className = '' }: { className?: string }) => (
  <a
    href="#top"
    className={`flex items-center gap-2.5 font-head text-[1.45em] font-bold tracking-[-0.02em] ${className}`}
  >
    Гроссбух
    <span className="flex items-end gap-[3px]" aria-hidden="true">
      {[9, 13, 17, 21, 25].map((h) => (
        <i key={h} className="block w-[2px] bg-current" style={{ height: h }} />
      ))}
    </span>
  </a>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 animate-fade transition-colors duration-500 ${
          solid ? 'bg-background/92 border-b border-border backdrop-blur-md' : 'bg-transparent'
        }`}
        style={{ animationDelay: '.15s' }}
      >
        <div className="flex items-center justify-between px-6 py-5 md:px-10 md:py-[26px]">
          <Brand className="text-foreground" />

          <nav className="hidden items-center gap-[38px] lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="story-link text-[0.92em] font-medium text-foreground/90 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contacts"
              className="hidden items-center gap-2.5 rounded-full bg-primary px-[26px] py-3.5 text-[0.93em] font-bold tracking-[-0.01em] text-primary-foreground transition-transform duration-300 hover:scale-[1.03] sm:inline-flex"
            >
              Обсудить бухгалтерию
              <Icon name="ArrowRight" size={15} />
            </a>
            <button
              type="button"
              aria-label="Меню"
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border/70 text-foreground lg:hidden"
            >
              <Icon name={open ? 'X' : 'Menu'} size={20} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 animate-fade-in bg-background/98 px-6 pb-10 pt-24 lg:hidden">
          <nav className="flex flex-col gap-1">
            {[...NAV, { href: '#contacts', label: 'Контакты' }].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-head text-2xl font-bold tracking-[-0.03em]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacts"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground"
          >
            Обсудить бухгалтерию
            <Icon name="ArrowRight" size={16} />
          </a>
        </div>
      )}
    </>
  );
};

export default Header;
