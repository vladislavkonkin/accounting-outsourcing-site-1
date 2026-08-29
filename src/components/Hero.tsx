import Icon from '@/components/ui/icon';

const HERO_IMAGE =
  'https://cdn.poehali.dev/projects/0a87c5c7-8377-4f22-8f81-c5b75eb2c345/files/d4517f02-e8a8-4ddb-9f22-db1db5f4bbfe.jpg';

const Hero = () => (
  <section id="top" className="relative h-screen min-h-[620px] w-full overflow-hidden bg-background">
    <img
      src={HERO_IMAGE}
      alt="Бухгалтер разбирает документы на большом дубовом столе в тёплом свете"
      className="absolute inset-0 h-full w-full animate-rise object-cover"
      style={{ objectPosition: '50% 42%', animationDuration: '1.4s' }}
    />
    <div className="hero-scrim absolute inset-0" />

    <div className="absolute inset-x-6 bottom-10 flex flex-col items-start justify-between gap-10 md:inset-x-10 md:bottom-[54px] md:flex-row md:items-end md:gap-[60px]">
      <h1
        className="hero-h1 max-w-[12.5em] animate-rise font-head font-extrabold text-foreground"
        style={{ animationDelay: '.35s' }}
      >
        Вашу бухгалтерию{' '}
        <em className="font-serif text-[1.04em] font-normal italic tracking-[-0.01em]">берём</em> на
        себя.
      </h1>

      <div
        className="flex w-full animate-fade flex-col items-start gap-[22px] md:w-[330px] md:flex-none"
        style={{ animationDelay: '.6s', animationDuration: '1s' }}
      >
        <a
          href="#how"
          className="inline-flex items-center gap-2.5 rounded-full py-3 pl-3 pr-[22px] text-[0.93em] font-semibold text-foreground transition-transform duration-300 hover:scale-[1.03]"
          style={{ background: 'color-mix(in srgb, var(--hero-x-pill) 62%, transparent)' }}
        >
          <span className="grid h-[22px] w-[22px] place-items-center rounded-full border border-foreground/70">
            <Icon name="Play" size={9} className="fill-current" />
          </span>
          Как мы принимаем учёт
        </a>
        <p className="text-[1.02em] font-medium leading-[1.42] tracking-[-0.005em] text-foreground">
          Налоги, зарплата и отчётность ведём под ответственностью по договору. Штраф за нашу ошибку
          — наши расходы.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
