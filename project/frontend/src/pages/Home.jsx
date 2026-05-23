import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';
import FAQ from '../components/FAQ.jsx';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxlNeeVgGsrvfeLPn3Kr8k0Q_IMK4ciiXwyXTXFP--c5OE3_Ply7YngA6QyDhcKMBTC/exec';

const initialForm = { from: '', to: '', phone: '' };

const services = [
  {
    icon: '🚚',
    title: 'Транспортные перевозки',
    description: 'Доставка грузов по Пскову, области и соседним регионам. Газели, фургоны, бортовые платформы.',
  },
  {
    icon: '📋',
    title: 'Экспедиторские услуги',
    description: 'Берём на себя организацию перевозки от и до: документы, маршрут, контроль доставки.',
  },
  {
    icon: '📦',
    title: 'Любой тип груза',
    description: 'Промышленные товары, продукты питания, оборудование, мебель, негабаритные грузы.',
  },
  {
    icon: '🤝',
    title: 'Для бизнеса и частных лиц',
    description: 'Работаем с юридическими лицами, ИП и частными клиентами. Договор и все закрывающие документы.',
  },
];

const steps = [
  { step: '1', title: 'Оставьте заявку', description: 'Укажите маршрут и контакт. Форма занимает меньше минуты.' },
  { step: '2', title: 'Менеджер перезванивает', description: 'В течение 15 минут уточняем детали и подбираем машину.' },
  { step: '3', title: 'Перевозчик забирает груз', description: 'В согласованное время исполнитель приезжает на точку погрузки.' },
  { step: '4', title: 'Доставка и документы', description: 'Груз доставлен, вы получаете все необходимые закрывающие документы.' },
];

const partners = [
  {
    title: 'Газелька 60',
    description: 'Псков и область. Газели-тент, 3 автомобиля. Работаем с маркетплейсами и небольшими компаниями.',
  },
  {
    title: 'ТК Северо-Запад',
    description: 'Перевозки по СЗФО. Бортовые платформы и рефрижераторы. Опыт работы с крупными поставщиками.',
  },
  {
    title: 'АвтоЛогист',
    description: 'Псков — СПб — Москва. Фургоны и изотермы. Страхование груза включено в тариф.',
  },
];

const faqItems = [
  {
    question: 'Как быстро обработается заявка?',
    answer: 'Менеджер перезванивает в течение 15 минут в рабочее время. Срочные заявки — в приоритете.',
  },
  {
    question: 'Сколько стоит перевозка?',
    answer: 'Стоимость зависит от маршрута, типа и объёма груза. Точная цена рассчитывается после звонка менеджера.',
  },
  {
    question: 'Работаете ли вы с юридическими лицами?',
    answer: 'Да, работаем с ИП и ООО. Предоставляем полный пакет документов: договор, акт, счёт-фактура.',
  },
  {
    question: 'Какие регионы охватываете?',
    answer: 'Псков и Псковская область — основной регион. Также выполняем рейсы в Санкт-Петербург, Великий Новгород, Москву.',
  },
];

const Home = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } catch {}
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm(initialForm); }, 4000);
  };

  return (
    <div className="space-y-20 pb-20">

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-slate-900 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">

          {/* Left: selling text */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium uppercase tracking-wider text-white/80">
              Псков и область
            </p>
            <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
              Грузоперевозки по Пскову и области
            </h1>
            <p className="text-lg text-white/80">
              Транспортные и экспедиторские услуги для бизнеса и частных лиц. Проверенные
              перевозчики, полный пакет документов, ответ в течение 15 минут.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button to="/business" size="lg" variant="secondary">
                Для бизнеса
              </Button>
              <Button to="/carriers" size="lg" variant="ghost" className="text-white hover:bg-white/10">
                Исполнителям
              </Button>
            </div>
          </div>

          {/* Right: short form */}
          <div className="flex items-center">
            <form
              onSubmit={handleSubmit}
              className="w-full space-y-4 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md"
            >
              <p className="text-lg font-semibold">Оставить заявку</p>
              <input
                name="from"
                value={form.from}
                onChange={handleChange}
                placeholder="Откуда"
                required
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/50 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <input
                name="to"
                value={form.to}
                onChange={handleChange}
                placeholder="Куда"
                required
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/50 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Ваш телефон"
                type="tel"
                required
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/50 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              {submitted ? (
                <div className="rounded-2xl border border-green-300/30 bg-green-400/20 px-4 py-3 text-sm text-white">
                  Заявка принята — перезвоним в течение 15 минут.
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                >
                  Заказать перевозку
                </button>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-10 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Что мы делаем</p>
          <h2 className="text-3xl font-bold text-slate-900">Транспортные и экспедиторские услуги</h2>
          <p className="max-w-2xl text-base text-slate-600">
            Организуем перевозку грузов любого типа. Работаем официально — договор, страховка,
            закрывающие документы.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Card key={s.title} icon={s.icon} title={s.title} description={s.description} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Как это работает</p>
          <h2 className="text-3xl font-bold text-slate-900">Четыре шага от заявки до доставки</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {s.step}
              </div>
              <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-10 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Наши партнёры</p>
          <h2 className="text-3xl font-bold text-slate-900">Проверенные перевозчики</h2>
          <p className="max-w-2xl text-base text-slate-600">
            Каждый перевозчик проходит проверку документов и автопарка. Работаем только с
            надёжными исполнителями.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {partners.map((p) => (
            <Card key={p.title} title={p.title} description={p.description} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/carriers"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Стать партнёром-перевозчиком →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-6xl space-y-8 px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Вопросы и ответы</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Часто спрашивают</h2>
        </div>
        <FAQ items={faqItems} />
      </section>

    </div>
  );
};

export default Home;
