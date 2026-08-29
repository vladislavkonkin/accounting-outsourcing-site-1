import { Brand } from '@/components/Header';
import Icon from '@/components/ui/icon';

const Footer = () => (
  <footer className="border-t border-border bg-secondary">
    <div className="mx-auto max-w-[1240px] px-6 py-14 md:px-10">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Brand className="text-foreground" />
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Бухгалтерский аутсорсинг для ИП и малого бизнеса. Налоги, зарплата и отчётность — под
            ответственность по договору.
          </p>
        </div>

        <nav className="grid gap-x-14 gap-y-3 sm:grid-cols-2">
          {[
            { href: '#problem', label: 'Зачем это нужно' },
            { href: '#how', label: 'Как работаем' },
            { href: '#services', label: 'Услуги' },
            { href: '#founder', label: 'О практике' },
            { href: '#order', label: 'Проверить порядок' },
            { href: '#faq', label: 'Вопросы' },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="story-link text-[15px] text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="space-y-3 text-[15px] text-muted-foreground">
          <a href="tel:+74951204608" className="flex items-center gap-2.5 hover:text-foreground">
            <Icon name="Phone" size={16} className="text-accent" />
            +7 495 120-46-08
          </a>
          <a href="mailto:office@grossbuh.ru" className="flex items-center gap-2.5 hover:text-foreground">
            <Icon name="Mail" size={16} className="text-accent" />
            office@grossbuh.ru
          </a>
        </div>
      </div>

      <div className="hairline mt-12" />
      <div className="mt-6 flex flex-col gap-2 text-[13px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Гроссбух. ИНН 7706123456</p>
        <p>Политика обработки персональных данных</p>
      </div>
    </div>
  </footer>
);

export default Footer;
