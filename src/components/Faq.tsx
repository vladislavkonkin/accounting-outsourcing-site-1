import Reveal from '@/components/Reveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ITEMS = [
  {
    q: 'Что будет, если из-за вас придёт штраф?',
    a: 'Мы его оплатим. Ответственность за ошибки в расчётах и сроках закреплена в договоре отдельным пунктом: пени и штрафы, возникшие по нашей вине, закрываем сами и не перекладываем на клиента.',
  },
  {
    q: 'Цена правда фиксированная?',
    a: 'Да. Тариф считается один раз — по режиму налогообложения, числу сотрудников и объёму документов. Квартальная и годовая отчётность, ответы на требования ИФНС и консультации уже входят. Пересматриваем цену, только если вырос сам бизнес, и всегда заранее.',
  },
  {
    q: 'У нас запущенный учёт за прошлые годы. Возьмётесь?',
    a: 'Возьмёмся. Сначала делаем диагностику и сверку с налоговой, показываем полную картину долгов и рисков, затем восстанавливаем учёт по этапам. Восстановление считается отдельно, но смету вы видите до начала работ.',
  },
  {
    q: 'Как передавать документы?',
    a: 'Как вам удобно: ЭДО, общая папка в облаке, чат или фотографии с телефона. Мы сами дособираем недостающую первичку у контрагентов и напоминаем, чего не хватает, — не наоборот.',
  },
  {
    q: 'Кто будет вести мою компанию?',
    a: 'Конкретный человек: ведущий бухгалтер с именем, телефоном и зоной ответственности. У него есть дублёр, знакомый с вашей базой, поэтому отпуск или больничный не останавливают учёт.',
  },
  {
    q: 'Мы не хотим менять программу учёта.',
    a: 'И не нужно. Работаем в вашей базе 1С или в облачном сервисе, к которому вы привыкли. Если базы нет — заведём свою и передадим доступ вам, она останется вашей и после расторжения договора.',
  },
  {
    q: 'Как быстро можно начать?',
    a: 'Диагностика занимает до трёх рабочих дней, договор подписываем электронно за день. Обычно новый клиент выходит на сопровождение в течение недели, а в отчётный период — за два-три дня.',
  },
];

const Faq = () => (
  <section id="faq" className="relative border-t border-border bg-secondary py-24 md:py-32">
    <div className="mx-auto max-w-[1240px] px-6 md:px-10">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="rubric">Вопросы и ответы</p>
          <h2 className="mt-6 font-head text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08] tracking-[-0.035em]">
            Спрашивают{' '}
            <span className="font-serif font-normal italic text-accent">до подписания</span>
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
            Не нашли свой вопрос — напишите его в форме ниже, ответим текстом, без звонка с
            уговорами.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {ITEMS.map((item, i) => (
              <AccordionItem key={item.q} value={`i-${i}`} className="border-border">
                <AccordionTrigger className="gap-6 py-6 text-left font-head text-lg font-bold tracking-[-0.02em] hover:no-underline">
                  <span className="flex items-baseline gap-5">
                    <span className="font-serif text-base italic text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-7 pl-0 text-[15px] leading-relaxed text-muted-foreground sm:pl-[52px]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Faq;
