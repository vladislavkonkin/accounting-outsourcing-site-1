import { useMemo, useState } from 'react';
import Reveal from '@/components/Reveal';
import Icon from '@/components/ui/icon';

const FORMS = [
  { id: 'ip-usn', label: 'ИП на УСН', base: 6900, weight: 0 },
  { id: 'ip-patent', label: 'ИП на патенте', base: 5900, weight: 0 },
  { id: 'ooo-usn', label: 'ООО на УСН', base: 11900, weight: 4 },
  { id: 'ooo-osno', label: 'ООО на ОСНО', base: 19900, weight: 10 },
];

const STAFF = [
  { id: 'none', label: 'Нет сотрудников', add: 0, weight: 0 },
  { id: 'few', label: '1–5 человек', add: 3500, weight: 6 },
  { id: 'mid', label: '6–15 человек', add: 8500, weight: 12 },
  { id: 'many', label: 'Больше 15', add: 15000, weight: 18 },
];

const DOCS = [
  { id: 's', label: 'До 30 документов в месяц', add: 0, weight: 0 },
  { id: 'm', label: '30–100 документов', add: 4000, weight: 8 },
  { id: 'l', label: 'Больше 100', add: 9000, weight: 14 },
];

const ISSUES = [
  { id: 'late', label: 'Были просрочки по отчётности', weight: 16 },
  { id: 'demand', label: 'Приходили требования из налоговой', weight: 14 },
  { id: 'primary', label: 'Первичка собрана не полностью', weight: 12 },
  { id: 'nobody', label: 'Учётом сейчас никто не занимается', weight: 18 },
];

const OrderCheck = () => {
  const [form, setForm] = useState(FORMS[0].id);
  const [staff, setStaff] = useState(STAFF[0].id);
  const [docs, setDocs] = useState(DOCS[0].id);
  const [issues, setIssues] = useState<string[]>([]);

  const toggleIssue = (id: string) =>
    setIssues((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const { price, score, verdict } = useMemo(() => {
    const f = FORMS.find((x) => x.id === form)!;
    const s = STAFF.find((x) => x.id === staff)!;
    const d = DOCS.find((x) => x.id === docs)!;
    const issueWeight = ISSUES.filter((x) => issues.includes(x.id)).reduce(
      (a, b) => a + b.weight,
      0,
    );
    const risk = f.weight + s.weight + d.weight + issueWeight;
    const value = Math.max(6, 100 - risk);
    const total = f.base + s.add + d.add + (issueWeight > 24 ? 4000 : 0);

    let text = 'Учёт в порядке — нам останется просто держать этот уровень.';
    if (value < 80) text = 'Есть шероховатости: пара мест, где чаще всего возникают штрафы.';
    if (value < 55) text = 'Учёт требует наведения порядка — начнём с восстановления и сверок.';
    if (value < 35)
      text = 'Ситуация запущенная, но решаемая. Разберём по шагам и закроем долги перед бюджетом.';

    return { price: total, score: value, verdict: text };
  }, [form, staff, docs, issues]);

  const Group = ({
    title,
    options,
    value,
    onChange,
  }: {
    title: string;
    options: { id: string; label: string }[];
    value: string;
    onChange: (id: string) => void;
  }) => (
    <div>
      <p className="rubric">{title}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            onClick={() => onChange(o.id)}
            className={`rounded-full border px-5 py-2.5 text-[14px] font-medium transition-all duration-300 ${
              value === o.id
                ? 'border-accent bg-accent text-accent-foreground'
                : 'border-border text-muted-foreground hover:border-accent/50 hover:text-foreground'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <section id="order" className="relative border-t border-border bg-background py-24 md:py-32">
      <div className="paper-grain pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1240px] px-6 md:px-10">
        <Reveal>
          <p className="rubric">Наведите порядок</p>
          <h2 className="mt-6 max-w-2xl font-head text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08] tracking-[-0.035em]">
            Соберите свою ситуацию — покажем{' '}
            <span className="font-serif font-normal italic text-accent">цену и риски</span>
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
            Ответьте на четыре вопроса. Расчёт ориентировочный: точную сумму фиксируем в договоре
            после бесплатной диагностики.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="space-y-9 bg-card p-8 md:p-11">
            <Group title="Форма и режим" options={FORMS} value={form} onChange={setForm} />
            <Group title="Сотрудники" options={STAFF} value={staff} onChange={setStaff} />
            <Group title="Объём документов" options={DOCS} value={docs} onChange={setDocs} />

            <div>
              <p className="rubric">Что уже случалось</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {ISSUES.map((iss) => {
                  const on = issues.includes(iss.id);
                  return (
                    <button
                      key={iss.id}
                      type="button"
                      onClick={() => toggleIssue(iss.id)}
                      className={`flex items-center gap-3 rounded-sm border px-4 py-3 text-left text-[14px] transition-all duration-300 ${
                        on
                          ? 'border-accent/60 bg-secondary text-foreground'
                          : 'border-border text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <span
                        className={`grid h-5 w-5 shrink-0 place-items-center rounded-[3px] border transition-colors ${
                          on ? 'border-accent bg-accent' : 'border-border'
                        }`}
                      >
                        {on && <Icon name="Check" size={13} className="text-accent-foreground" />}
                      </span>
                      {iss.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <aside className="flex flex-col justify-between bg-secondary p-8 md:p-11">
            <div>
              <p className="rubric">Показатель порядка</p>
              <div className="mt-6 flex items-end gap-3">
                <span className="font-head text-6xl font-extrabold tracking-[-0.05em] text-accent">
                  {score}
                </span>
                <span className="pb-2 text-muted-foreground">из 100</span>
              </div>
              <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-accent transition-[width] duration-700 ease-out"
                  style={{ width: `${score}%` }}
                />
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">{verdict}</p>
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <p className="rubric">Ориентир по цене</p>
              <p className="mt-4 font-head text-4xl font-extrabold tracking-[-0.04em]">
                {price.toLocaleString('ru-RU')} ₽
                <span className="ml-2 text-base font-medium text-muted-foreground">в месяц</span>
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                Фиксировано. За отчётные периоды и годовую отчётность доплат нет.
              </p>
              <a
                href="#contacts"
                className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
              >
                Проверить бесплатно
                <Icon name="ArrowRight" size={16} />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default OrderCheck;
