import Reveal from '@/components/Reveal';
import Icon from '@/components/ui/icon';

const FOUNDER_PHOTO =
  'https://cdn.poehali.dev/projects/0a87c5c7-8377-4f22-8f81-c5b75eb2c345/files/4de94053-90fb-443d-8844-b505f53a1d5a.jpg';

const FACTS = [
  { value: '17 лет', label: 'в бухгалтерии малого бизнеса' },
  { value: '140+', label: 'компаний и ИП на сопровождении' },
  { value: '0 ₽', label: 'штрафов по нашей вине у клиентов' },
];

const Founder = () => (
  <section id="founder" className="relative border-t border-border bg-secondary py-24 md:py-32">
    <div className="mx-auto max-w-[1240px] px-6 md:px-10">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <figure className="relative overflow-hidden rounded-sm border border-border">
            <img
              src={FOUNDER_PHOTO}
              alt="Елена Гросс, основатель бухгалтерской практики «Гроссбух»"
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
            />
            <figcaption className="border-t border-border bg-card px-6 py-4 font-serif text-sm italic text-muted-foreground">
              Елена Гросс — основатель практики, аттестованный главный бухгалтер
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <Reveal>
            <p className="rubric">Кто отвечает</p>
            <h2 className="mt-6 font-head text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08] tracking-[-0.035em]">
              За вашим учётом стоит{' '}
              <span className="font-serif font-normal italic text-accent">имя</span>, а не колл-центр
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Семнадцать лет я веду учёт предпринимателей: сначала главным бухгалтером в
                производственной компании, потом — своей практикой. За это время я насмотрелась на
                то, как аккуратный бизнес получает штраф из-за чужой невнимательности.
              </p>
              <p>
                Поэтому «Гроссбух» устроен просто: у каждого клиента есть ведущий бухгалтер и его
                дублёр, все расчёты проходят второй проверкой, а ответственность за ошибку не
                размывается формулировками — она записана в договоре суммой.
              </p>
              <p className="font-serif text-xl italic leading-snug text-foreground">
                «Если из-за нашей ошибки вам начислили штраф или пени — платим мы. Без переписки и
                выяснений, кто именно виноват».
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
            {FACTS.map((f, i) => (
              <Reveal key={f.value} delay={i * 90}>
                <div className="h-full bg-card px-6 py-7">
                  <p className="font-head text-3xl font-extrabold tracking-[-0.04em] text-accent">
                    {f.value}
                  </p>
                  <p className="mt-2 text-[14px] leading-snug text-muted-foreground">{f.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[15px] text-muted-foreground">
              {[
                'Договор с прописанной ответственностью',
                'Полис профессиональной ответственности',
                'NDA по умолчанию',
              ].map((t) => (
                <span key={t} className="inline-flex items-center gap-2.5">
                  <Icon name="BadgeCheck" size={17} className="text-accent" />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default Founder;
