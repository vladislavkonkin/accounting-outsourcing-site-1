import Reveal from '@/components/Reveal';
import Icon from '@/components/ui/icon';

const SERVICES = [
  {
    icon: 'Calculator',
    title: 'Налоги и взносы',
    text: 'Считаем налог по вашей системе, применяем вычеты и льготы, готовим платёжки к сроку.',
    tags: ['УСН', 'ПСН', 'ОСНО', 'НДС'],
  },
  {
    icon: 'Users',
    title: 'Зарплата и кадры',
    text: 'Расчёт зарплаты, отпускных, больничных, НДФЛ и взносов. Приказы, договоры, трудовые.',
    tags: ['Расчётные листки', 'Кадровый учёт'],
  },
  {
    icon: 'Send',
    title: 'Отчётность',
    text: 'Сдаём в налоговую, СФР и Росстат по своей ЭЦП. Следим за календарём вместо вас.',
    tags: ['ИФНС', 'СФР', 'Статистика'],
  },
  {
    icon: 'FolderOpen',
    title: 'Первичные документы',
    text: 'Акты, накладные, счета-фактуры, УПД. Заводим в учёт, дособираем недостающее у контрагентов.',
    tags: ['ЭДО', 'Архив'],
  },
  {
    icon: 'MessagesSquare',
    title: 'Консультации',
    text: 'Отвечаем простым языком: можно ли так провести, что будет с налогом, как оформить сделку.',
    tags: ['Без бухгалтерского сленга'],
  },
  {
    icon: 'ShieldCheck',
    title: 'Ответственность',
    text: 'Штрафы и пени, возникшие по нашей вине, закрываем сами — это записано в договоре.',
    tags: ['Закреплено договором'],
  },
];

const Services = () => (
  <section id="services" className="relative border-t border-border bg-background py-24 md:py-32">
    <div className="mx-auto max-w-[1240px] px-6 md:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <p className="rubric">Что входит</p>
          <h2 className="mt-6 max-w-xl font-head text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08] tracking-[-0.035em]">
            Полный участок бухгалтерии, а не{' '}
            <span className="font-serif font-normal italic text-accent">кусочки</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted-foreground">
            Одна фиксированная цена в месяц. Отчётный период не повод для доплаты — сезонность наша
            проблема, не ваша.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 90}>
            <article className="group flex h-full flex-col bg-card p-8 transition-colors duration-500 hover:bg-secondary">
              <div className="flex items-center justify-between">
                <Icon name={s.icon} size={24} className="text-accent" />
                <span className="font-serif text-lg italic text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-6 font-head text-xl font-bold tracking-[-0.025em]">{s.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                {s.text}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
