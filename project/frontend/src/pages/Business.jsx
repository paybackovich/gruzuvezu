import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';

const benefits = [
  {
    title: 'Быстрое оформление',
    description: 'Заявка оформляется за 2 минуты. Менеджер перезванивает в течение 15 минут и берёт все детали на себя.',
  },
  {
    title: 'Любой тип груза',
    description: 'Работаем с промышленными товарами, продуктами питания, оборудованием, мебелью и негабаритом.',
  },
  {
    title: 'Проверенные перевозчики',
    description: 'Все исполнители проходят проверку документов и автопарка. Вы работаете только с надёжными партнёрами.',
  },
  {
    title: 'Регулярные поставки',
    description: 'Подходим для разовых и регулярных отправлений. Для постоянных клиентов — персональный менеджер.',
  },
];

const Business = () => (
  <div className="mx-auto w-full max-w-6xl space-y-16 px-4 py-10 sm:px-6">
    <div className="space-y-4">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Для бизнеса</p>
      <h1 className="text-4xl font-bold text-slate-900">
        Грузоперевозки для компаний и предпринимателей
      </h1>
      <p className="max-w-2xl text-base text-slate-600">
        Организуем доставку груза от двери до двери по Пскову, Псковской области и соседним
        регионам. Работаем с юридическими лицами и ИП.
      </p>
      <div className="flex flex-wrap gap-3 pt-2">
        <Button to="/" size="lg">
          Заказать перевозку
        </Button>
        <Button to="/contacts" variant="secondary" size="lg">
          Связаться с менеджером
        </Button>
      </div>
    </div>

    <section>
      <h2 className="mb-8 text-2xl font-bold text-slate-900">Почему выбирают нас</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => (
          <Card key={b.title} title={b.title} description={b.description} />
        ))}
      </div>
    </section>

    <section className="rounded-3xl border border-blue-100 bg-blue-50/60 px-6 py-10">
      <div className="max-w-xl space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Готовы сотрудничать?</h2>
        <p className="text-slate-600">
          Оставьте заявку или позвоните нам — подберём оптимальный вариант и рассчитаем стоимость.
        </p>
        <p className="text-xl font-semibold text-slate-900">8 (8112) 60-40-60</p>
        <p className="text-sm text-slate-500">Будни 09:00–20:00, в выходные для срочных грузов</p>
        <Button to="/" size="lg">
          Оформить заявку
        </Button>
      </div>
    </section>
  </div>
);

export default Business;
