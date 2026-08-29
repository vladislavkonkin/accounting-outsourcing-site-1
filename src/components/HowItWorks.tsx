import { useState } from 'react';
import Reveal from '@/components/Reveal';
import Icon from '@/components/ui/icon';

const STEPS = [
  {
    num: '01',
    title: 'Разбираем, что есть',
    lead: 'Бесплатная диагностика учёта — 3 рабочих дня',
    text: 'Смотрим систему налогообложения, остатки, сданные отчёты и долги перед бюджетом. На выходе — короткая записка простым языком: что в порядке, что горит, чем рискуете.',
    bullets: ['Сверка с налоговой', 'Проверка сданных отчётов', 'Расчёт реальной нагрузки'],
  },
  {
    num: '02',
    title: 'Принимаем учёт',
    lead: 'Договор с фиксированной ценой и ответственностью',
    text: 'Подписываем договор, подключаем ЭДО и вашу учётную базу, назначаем ведущего бухгалтера и его дублёра. С этого дня сроки — наша забота, а не ваша.',
    bullets: ['Доверенность и ЭДО', 'Личный бухгалтер + дублёр', 'Фиксированный тариф'],
  },
  {
    num: '03',
    title: 'Ведём и отвечаем',
    lead: 'Каждый месяц — отчёт без бухгалтерского языка',
    text: 'Считаем налоги и зарплату, сдаём отчётность, отвечаем на требования ИФНС. Раз в месяц присылаем сводку: сколько заплатили, что впереди, где можно сэкономить законно.',
    bullets: ['Отчётность в срок', 'Ответы на требования', 'Штраф за нашу ошибку — наш'],
  },
];

const HowItWorks = () => {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <section id="how" className="relative border-t border-border bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <Reveal>
          <p className="rubric">Как это устроено</p>
          <h2 className="mt-6 max-w-2xl font-head text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08] tracking-[-0.035em]">
            Три шага от коробки с документами до{' '}
            <span className="font-serif font-normal italic text-accent">порядка</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="flex flex-col">
            {STEPS.map((s, i) => (
              <button
                key={s.num}
                type="button"
                onClick={() => setActive(i)}
                className={`group flex items-baseline gap-5 border-t border-border py-6 text-left transition-colors duration-300 last:border-b ${
                  i === active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span
                  className={`font-serif text-2xl italic transition-colors ${
                    i === active ? 'text-accent' : 'text-muted-foreground'
                  }`}
                >
                  {s.num}
                </span>
                <span className="flex-1">
                  <span className="block font-head text-xl font-bold tracking-[-0.02em]">
                    {s.title}
                  </span>
                  <span className="mt-1 block text-sm">{s.lead}</span>
                </span>
                <Icon
                  name="ArrowUpRight"
                  size={18}
                  className={`transition-all duration-300 ${
                    i === active ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                  }`}
                />
              </button>
            ))}
          </div>

          <div
            key={active}
            className="animate-fade-in rounded-sm border border-border bg-card p-8 md:p-11"
          >
            <span className="rubric">Шаг {step.num}</span>
            <h3 className="mt-5 font-head text-[28px] font-extrabold leading-tight tracking-[-0.03em]">
              {step.title}
            </h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">{step.text}</p>
            <ul className="mt-8 space-y-3">
              {step.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[15px]">
                  <Icon name="Check" size={16} className="shrink-0 text-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
