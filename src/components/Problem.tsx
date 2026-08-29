import Reveal from '@/components/Reveal';
import Icon from '@/components/ui/icon';

const PAINS = [
  {
    icon: 'AlarmClock',
    title: 'Отчётность подкрадывается',
    text: 'Сроки вспоминаются за два дня до дедлайна, а документы лежат в трёх мессенджерах и коробке из-под обуви.',
  },
  {
    icon: 'FileWarning',
    title: 'Требования из налоговой',
    text: 'Письмо приходит без предупреждения, и надо не просто ответить, а понять, что именно у вас спрашивают.',
  },
  {
    icon: 'Banknote',
    title: 'Налог посчитан «на глаз»',
    text: 'Вычеты не применены, взносы не учтены, переплата обнаруживается через год — если обнаруживается.',
  },
  {
    icon: 'UserRoundX',
    title: 'Бухгалтер ушёл в отпуск',
    text: 'Один человек в штате — одна точка отказа. Заболел, уволился, и учёт останавливается вместе с ним.',
  },
];

const Problem = () => (
  <section id="problem" className="relative border-t border-border bg-background py-24 md:py-32">
    <div className="mx-auto max-w-[1240px] px-6 md:px-10">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <Reveal>
          <p className="rubric">Что обычно происходит</p>
          <h2 className="mt-6 font-head text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08] tracking-[-0.035em]">
            Учёт — это не про{' '}
            <span className="font-serif font-normal italic text-accent">цифры</span>. Это про
            спокойные ночи.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Малый бизнес редко разоряется на налогах. Он выгорает на том, что бухгалтерию некому
            держать в руках: предприниматель тянет её сам, между поставщиками и клиентами.
          </p>
          <div className="hairline mt-10" />
          <p className="mt-6 font-serif text-[22px] italic leading-snug text-foreground">
            «Мы забираем эту часть целиком — вместе с ответственностью за неё».
          </p>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
          {PAINS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="group h-full bg-card p-7 transition-colors duration-500 hover:bg-secondary md:p-8">
                <Icon
                  name={p.icon}
                  size={22}
                  className="text-accent transition-transform duration-500 group-hover:-translate-y-0.5"
                />
                <h3 className="mt-5 font-head text-lg font-bold tracking-[-0.02em]">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Problem;
