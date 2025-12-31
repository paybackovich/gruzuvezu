import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Card from '../components/Card.jsx';
import FAQ from '../components/FAQ.jsx';
import Button from '../components/Button.jsx';

const steps = [
  {
    title: 'Разместите заявку',
    description: 'Опишите маршрут, тип машины, бюджет и особые требования за 2 минуты.',
  },
  {
    title: 'Получите отклики',
    description: 'Проверенные перевозчики откликаются с тарифами и сроками выполнения.',
  },
  {
    title: 'Выберите исполнителя',
    description: 'Сравните рейтинг, флот и условия, заключите безопасную сделку на платформе.',
  },
];

const transportTypes = [
  {
    title: 'Городские малотоннажники',
    description: 'До 1,5 т · для адресных доставок, маркетплейсов и ритейла.',
  },
  {
    title: 'Газели-тент',
    description: 'Гибко подстраиваются под габариты, защищают груз от осадков.',
  },
  {
    title: 'Изотермы и термобудки',
    description: 'Температурные перевозки: фарма, продукты, косметика.',
  },
  {
    title: 'Бортовые платформы',
    description: 'Для строительных материалов, оборудования и нестандартных грузов.',
  },
];

const advantages = [
  {
    title: 'Прозрачные тарифы',
    description: 'Видите ставку перевозчика сразу, без телефонных тендеров и скрытых доплат.',
  },
  {
    title: 'Рейтинги и верификация',
    description: 'Каждый партнёр проходит проверку документов и имеет публичную историю заказов.',
  },
  {
    title: 'Быстрые сделки',
    description: 'В среднем отклики появляются за 7 минут, а загрузка — в тот же день.',
  },
  {
    title: 'Безопасные расчёты',
    description: 'Эскроу-счёт и уведомления о статусах защищают обе стороны.',
  },
];

const routes = [
  { from: 'Москва', to: 'Санкт‑Петербург', eta: '8 часов', price: 'от 18 500 ₽' },
  { from: 'Казань', to: 'Нижний Новгород', eta: '6 часов', price: 'от 14 000 ₽' },
  { from: 'Екатеринбург', to: 'Челябинск', eta: '4 часа', price: 'от 11 500 ₽' },
  { from: 'Новосибирск', to: 'Омск', eta: '10 часов', price: 'от 23 000 ₽' },
];

const faqItems = [
  {
    question: 'Как проходит модерация перевозчиков?',
    answer:
      'Мы проверяем документы компании, страховки, данные об автопарке и фактические отзывы. Только подтверждённые перевозчики получают доступ к заявкам.',
  },
  {
    question: 'Можно ли работать по безналичному расчёту?',
    answer:
      'Да, доступны безналичные платежи с НДС, а также безопасная сделка с удержанием средств до завершения перевозки.',
  },
  {
    question: 'Сколько стоит размещение заявки?',
    answer:
      'Для заказчиков размещение и выбор победителя бесплатны. Комиссия включена в тариф перевозчика.',
  },
  {
    question: 'Нужна ли интеграция с нашими системами?',
    answer:
      'Нет, заявки можно создавать вручную. Для крупных клиентов доступен API и интеграция с TMS.',
  },
];

const Home = () => (
  <div className="space-y-16 pb-16">
    <Hero
      subtitle="цифры грузопотока"
      title="GruzUvezu — разместите заявку, получите отклики за 7 минут"
      description="Сводим грузовладельцев и перевозчиков, чтобы заполнять рейсы без простоя и запускать логистику в срок. Контроль статусов, рейтинги, безопасные расчёты."
      icon="/icon.png"
      primaryCta={{ label: 'Разместить заявку', to: '/request' }}
      secondaryCta={{ label: 'Каталог перевозчиков', to: '/carriers' }}
      stats={[
        { label: 'Активные перевозчики', value: '2 400+' },
        { label: 'Заявок в сутки', value: '650' },
        { label: 'Средний рейтинг', value: '4.8/5' },
        { label: 'Городов покрытия', value: '120+' },
      ]}
    />

    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="mb-8 flex flex-col gap-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Как работает биржа
        </p>
        <h2 className="text-4xl font-bold text-slate-900">От заявки до рейса — три шага</h2>
        <p className="text-base text-slate-600">
          Простая логика процесса позволяет запустить перевозку в день обращения.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <Card key={step.title} eyebrow={`Шаг ${index + 1}`} title={step.title} description={step.description} />
        ))}
      </div>
    </section>

    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="mb-8 flex flex-col gap-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Типы перевозок
        </p>
        <h2 className="text-4xl font-bold text-slate-900">Подберём подходящий транспорт</h2>
        <p className="text-base text-slate-600">
          От курьерских доставок до температурных грузов — в базе только профильные исполнители.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {transportTypes.map((item) => (
          <Card key={item.title} title={item.title} description={item.description} />
        ))}
      </div>
    </section>

    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="mb-8 flex flex-col gap-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Преимущества</p>
        <h2 className="text-4xl font-bold text-slate-900">Почему бизнес выбирает GruzUvezu</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {advantages.map((adv) => (
          <Card key={adv.title} title={adv.title} description={adv.description} />
        ))}
      </div>
    </section>

    <section className="mx-auto w-full max-w-6xl space-y-8 px-4 sm:px-6">
      <div className="flex flex-col gap-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Популярные направления
        </p>
        <h2 className="text-4xl font-bold text-slate-900">Заполняем рейсы без холостого пробега</h2>
      </div>
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-100 text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-6 py-3 font-semibold">Откуда</th>
              <th className="px-6 py-3 font-semibold">Куда</th>
              <th className="px-6 py-3 font-semibold">Время в пути</th>
              <th className="px-6 py-3 font-semibold">Ставка</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {routes.map((route) => (
              <tr key={`${route.from}-${route.to}`}>
                <td className="px-6 py-4 font-semibold text-slate-800">{route.from}</td>
                <td className="px-6 py-4 text-slate-800">{route.to}</td>
                <td className="px-6 py-4 text-slate-600">{route.eta}</td>
                <td className="px-6 py-4 font-semibold text-blue-600">{route.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="grid gap-10 rounded-3xl border border-blue-100 bg-blue-50/60 px-6 py-10 shadow-inner md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Готовы начать
          </p>
          <h3 className="text-3xl font-bold text-slate-900">
            Зафиксируйте ставку и получите первые отклики уже сегодня
          </h3>
          <p className="text-base text-slate-600">
            Менеджер настроит аккаунт, загрузит шаблоны маршрутов и подключит безопасную сделку.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button to="/request">Создать заявку</Button>
            <Button to="/contacts" variant="secondary">
              Связаться с менеджером
            </Button>
          </div>
        </div>
        <div className="space-y-4 rounded-2xl bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Служба поддержки
          </p>
          <div className="space-y-2 text-sm text-slate-600">
            <p>Телефон: +7 (800) 800-20-25</p>
            <p>Telegram: @gruzuvezu_support</p>
            <p>Чат: доступен 24/7 в личном кабинете</p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-600">
            Уже есть лист заявок?{' '}
            <Link to="/request" className="font-semibold text-blue-600">
              Импортируйте в пару кликов →
            </Link>
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
