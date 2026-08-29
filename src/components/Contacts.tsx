import { FormEvent, useState } from 'react';
import Reveal from '@/components/Reveal';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

type Errors = { name?: string; contact?: string; message?: string };

const Contacts = () => {
  const [values, setValues] = useState({ name: '', contact: '', company: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof values, v: string) => {
    setValues((prev) => ({ ...prev, [key]: v }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = 'Напишите, как к вам обращаться';
    const c = values.contact.trim();
    const isPhone = /^\+?[\d\s()-]{10,18}$/.test(c);
    const isMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c);
    if (!isPhone && !isMail) e.contact = 'Телефон или почта — чтобы прислать ответ';
    if (values.message.trim().length > 0 && values.message.trim().length < 5)
      e.message = 'Слишком короткий вопрос';
    return e;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setSent(true);
    toast({
      title: 'Заявка принята',
      description: 'Ответим в рабочее время в течение двух часов.',
    });
  };

  const field = (invalid?: string) =>
    `h-12 rounded-sm border-border bg-background text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-accent ${
      invalid ? 'border-destructive' : ''
    }`;

  return (
    <section id="contacts" className="relative border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <Reveal>
            <p className="rubric">Контакты</p>
            <h2 className="mt-6 font-head text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08] tracking-[-0.035em]">
              Начнём с{' '}
              <span className="font-serif font-normal italic text-accent">диагностики</span>. Она
              бесплатная
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Посмотрим ваш учёт, сверимся с налоговой и пришлём короткую записку: что в порядке, что
              горит и сколько будет стоить сопровождение. Без обязательств продолжать.
            </p>

            <div className="mt-10 space-y-px overflow-hidden rounded-sm border border-border bg-border">
              {[
                { icon: 'Phone', label: 'Телефон', value: '+7 495 120-46-08' },
                { icon: 'Mail', label: 'Почта', value: 'office@grossbuh.ru' },
                { icon: 'MapPin', label: 'Офис', value: 'Москва, ул. Малая Ордынка, 21' },
                { icon: 'Clock', label: 'Часы работы', value: 'Пн–Пт, 09:00 — 19:00' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 bg-card px-6 py-5">
                  <Icon name={c.icon} size={18} className="text-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="mt-0.5 font-medium">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-sm border border-border bg-card p-8 md:p-11">
              {sent ? (
                <div className="flex animate-scale-in flex-col items-start py-10">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Icon name="Check" size={26} />
                  </span>
                  <h3 className="mt-7 font-head text-[28px] font-extrabold tracking-[-0.03em]">
                    Заявка принята
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                    {values.name.trim()}, спасибо. Ведущий бухгалтер свяжется с вами в рабочее время
                    в течение двух часов и предложит удобное время для диагностики.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setValues({ name: '', contact: '', company: '', message: '' });
                    }}
                    className="story-link mt-8 text-[15px] font-semibold text-accent"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="rubric">
                        Как вас зовут
                      </label>
                      <Input
                        id="name"
                        value={values.name}
                        onChange={(e) => set('name', e.target.value)}
                        placeholder="Анна Петрова"
                        className={`mt-3 ${field(errors.name)}`}
                      />
                      {errors.name && (
                        <p className="mt-2 text-[13px] text-destructive">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact" className="rubric">
                        Телефон или почта
                      </label>
                      <Input
                        id="contact"
                        value={values.contact}
                        onChange={(e) => set('contact', e.target.value)}
                        placeholder="+7 900 000-00-00"
                        className={`mt-3 ${field(errors.contact)}`}
                      />
                      {errors.contact && (
                        <p className="mt-2 text-[13px] text-destructive">{errors.contact}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="rubric">
                      Компания или ИП <span className="normal-case tracking-normal">— по желанию</span>
                    </label>
                    <Input
                      id="company"
                      value={values.company}
                      onChange={(e) => set('company', e.target.value)}
                      placeholder="ООО «Мастерская», УСН 6%"
                      className={`mt-3 ${field()}`}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="rubric">
                      Что беспокоит
                    </label>
                    <Textarea
                      id="message"
                      value={values.message}
                      onChange={(e) => set('message', e.target.value)}
                      placeholder="Например: нужно сдать отчётность за квартал и разобраться с требованием из налоговой"
                      rows={4}
                      className={`mt-3 rounded-sm border-border bg-background placeholder:text-muted-foreground/70 focus-visible:ring-accent ${
                        errors.message ? 'border-destructive' : ''
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-2 text-[13px] text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground transition-transform duration-300 hover:scale-[1.02] sm:w-auto"
                  >
                    Отправить заявку
                    <Icon name="ArrowRight" size={16} />
                  </button>

                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Мы не звоним с
                    рекламой и не передаём контакты третьим лицам.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
