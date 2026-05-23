import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';

const conditions = [
  {
    title: 'Получайте заявки напрямую',
    description: 'Мы присылаем заказы в удобный для вас канал. Вы сами решаете, какие брать — никаких обязательств.',
  },
  {
    title: 'Прозрачная оплата',
    description: 'Стоимость заранее согласована с заказчиком. Никаких скрытых комиссий и задержек выплат.',
  },
  {
    title: 'Работа в своём регионе',
    description: 'Заявки подбираются по вашему городу и маршрутам. Не нужно гонять машину порожняком.',
  },
];

const Carriers = () => (
  <div className="mx-auto w-full max-w-6xl space-y-16 px-4 py-10 sm:px-6">
    <div className="space-y-4">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Исполнителям</p>
      <h1 className="text-4xl font-bold text-slate-900">
        Работайте с нами — получайте стабильные заказы
      </h1>
      <p className="max-w-2xl text-base text-slate-600">
        Если у вас есть грузовой автомобиль и желание работать — мы обеспечим вас заказами по
        Пскову и области. Подключаем перевозчиков с подтверждёнными документами.
      </p>
      <div className="flex flex-wrap gap-3 pt-2">
        <Button to="/contacts" size="lg">
          Подключиться
        </Button>
      </div>
    </div>

    <section>
      <h2 className="mb-8 text-2xl font-bold text-slate-900">Условия сотрудничества</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {conditions.map((c) => (
          <Card key={c.title} title={c.title} description={c.description} />
        ))}
      </div>
    </section>

    <section>
      <h2 className="mb-6 text-2xl font-bold text-slate-900">Что нужно для подключения</h2>
      <ul className="space-y-3 text-slate-600">
        {[
          'Собственный грузовой автомобиль или автопарк',
          'Действующие водительские права и документы на ТС',
          'Готовность работать по Пскову и Псковской области',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-blue-100 text-center text-xs font-bold leading-5 text-blue-600">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>

    <section className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft">
      <h2 className="text-2xl font-bold text-slate-900">Готовы начать?</h2>
      <p className="mt-3 text-slate-600">
        Свяжитесь с нами — расскажем подробнее и оформим сотрудничество.
      </p>
      <p className="mt-4 text-xl font-semibold text-slate-900">8 (8112) 60-40-60</p>
      <p className="text-sm text-slate-500">Будни 09:00–20:00</p>
      <div className="mt-6">
        <Button to="/contacts" size="lg">
          Оставить заявку
        </Button>
      </div>
    </section>
  </div>
);

export default Carriers;
