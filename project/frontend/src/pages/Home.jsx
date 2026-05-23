import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Card from '../components/Card.jsx';
import FAQ from '../components/FAQ.jsx';
import Button from '../components/Button.jsx';

const steps = [
  {
    title: 'Вы оставляете заявку',
    description: 'Укажите маршрут, тип груза и удобное время. Мы автоматически отправим заявку перевозчикам в вашем городе.',
  },
  {
    title: 'Мы обрабатываем заказ',
    description: 'Обычно ответ приходит в течение 10 минут. Как только исполнитель подтвердит заказ, вы получите уведомление.',
  },
  {
    title: 'Перевозчик связывается с вами',
    description: 'Исполнитель выполняет доставку и связывается с вами для уточнения деталей.',
  },
  {
    title: 'Вы можете оставить отзыв',
    description: 'После завершения перевозки вы можете написать отзыв о работе перевозчика.',
  },
];

const faqItems = [
  {
    question: 'Как быстро обработается заявка?',
    answer:
      'Обычно ответ приходит в течение 10 минут после оформления заявки. Как только исполнитель подтвердит заказ, вы получите уведомление и контакт для связи.',
  },
  {
    question: 'Сколько стоит перевозка?',
    answer:
      'Стоимость зависит от маршрута и типа груза. Цена согласовывается с перевозчиком после подтверждения заказа.',
  },
  {
    question: 'Как связаться с перевозчиком?',
    answer:
      'После подтверждения заказа вы получите контакт исполнителя. Перевозчик свяжется с вами для уточнения деталей доставки.',
  },
];

const Home = () => (
  <div className="space-y-16 pb-16">
    <Hero
      subtitle="быстрые и надежные перевозки"
      title="ГрузУвезу — быстрые и надежные перевозки в Пскове и Псковской области"
      description="Оформите заявку на доставку, укажите маршрут и тип груза. Мы автоматически отправим заявку перевозчикам в вашем городе. Обычно ответ приходит в течение 10 минут."
      primaryCta={{ label: 'Оформить доставку', to: '/request' }}
      secondaryCta={{ label: 'Стать перевозчиком', to: '/carriers' }}
    />

    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="mb-8 flex flex-col gap-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Как работает биржа
        </p>
        <h2 className="text-4xl font-bold text-slate-900">Как это работает</h2>
        <p className="text-base text-slate-600">
          Простой процесс от заявки до доставки. После отправки заявки мы автоматически отправим её перевозчикам в вашем городе.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <Card key={step.title} eyebrow={`Шаг ${index + 1}`} title={step.title} description={step.description} />
        ))}
      </div>
    </section>

    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="mb-8 flex flex-col gap-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Перевозчикам</p>
        <h2 className="text-4xl font-bold text-slate-900">Вы перевозчик? Работайте с ГрузУвезу</h2>
        <p className="text-base text-slate-600">
          Получайте заказы рядом с вами и сами решайте, какие из них брать. Нет обязательств брать все заявки.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card
          title="Заявки приходят напрямую в Telegram-бот"
          description="Вы можете принять заказ или отказаться. Удобный интерфейс для управления заявками."
        />
        <Card
          title="Прозрачные условия и понятная статистика"
          description="Видите все детали заказа, маршрут и тип груза. Отслеживайте свою статистику и рейтинг."
        />
      </div>
      <div className="mt-8 text-center">
        <Button to="/carriers" size="lg">Стать перевозчиком</Button>
      </div>
    </section>

    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="grid gap-10 rounded-3xl border border-blue-100 bg-blue-50/60 px-6 py-10 shadow-inner md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Готовы начать
          </p>
          <h3 className="text-3xl font-bold text-slate-900">
            Оформите заявку и получите ответ в течение 10 минут
          </h3>
          <p className="text-base text-slate-600">
            После отправки заявки мы автоматически отправим её перевозчикам в вашем городе. Как только исполнитель подтвердит заказ, вы получите уведомление и контакт для связи.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button to="/request">Оформить доставку</Button>
            <Button to="/contacts" variant="secondary">
              Связаться с нами
            </Button>
          </div>
        </div>
        <div className="space-y-4 rounded-2xl bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Служба поддержки
          </p>
          <div className="space-y-2 text-sm text-slate-600">
            <p>Телефон: 8 (8112) 60-40-60</p>
            <p>Telegram: @gruzuvezu_support</p>
            <p>E-mail: sales@gruzuvezu.ru</p>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto w-full max-w-6xl space-y-8 px-4 sm:px-6">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">FAQ</p>
        <h2 className="mt-2 text-4xl font-bold text-slate-900">Отвечаем на частые вопросы</h2>
      </div>
      <FAQ items={faqItems} />
    </section>
  </div>
);

export default Home;
