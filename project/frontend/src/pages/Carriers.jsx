import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';

const carriers = [
  {
    name: 'СеверГруз Лайт',
    rating: '4.9',
    fleet: 'Газели-тент, будка, изотерма · 42 авто',
    routes: 'Москва — Петербург, Псков, Вологда',
    tariff: 'от 19 000 ₽ / рейс',
    description: 'Собственный диспетчерский центр, страхование груза до 3 млн ₽, круглосуточная поддержка.',
    tags: ['Температурные', 'Маркетплейсы', 'Страховка'],
  },
  {
    name: 'Логистик Восток',
    rating: '4.7',
    fleet: 'Малотоннажные фургоны · 65 авто',
    routes: 'Казань — Самара — Уфа',
    tariff: 'от 14 500 ₽ / рейс',
    description: 'Специализация на e-com и дистрибуции FMCG. Подписание накладных в ЭДО.',
    tags: ['E-com', 'ЭДО', 'FMCG'],
  },
  {
    name: 'УралКарго Сервис',
    rating: '4.8',
    fleet: 'Бортовые, манипуляторы · 28 авто',
    routes: 'Екатеринбург — Челябинск — Тюмень',
    tariff: 'от 22 000 ₽ / рейс',
    description: 'Опыт с промышленными грузами, допуски на въезд на заводские площадки.',
    tags: ['Промышленность', 'Манипулятор', 'Пропуска'],
  },
  {
    name: 'Сибирь Экспресс',
    rating: '4.6',
    fleet: 'Изотермы и термобудки · 37 авто',
    routes: 'Новосибирск — Омск — Томск',
    tariff: 'от 25 500 ₽ / рейс',
    description: 'Температурный контроль, GPS-мониторинг, пломбировка кузова для фармы.',
    tags: ['Температурные', 'GPS', 'Фарма'],
  },
];

const Carriers = () => (
  <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-10 sm:px-6">
    <div className="space-y-4">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Перевозчики</p>
      <h1 className="text-4xl font-bold text-slate-900">Каталог проверенных партнёров биржи</h1>
      <p className="text-base text-slate-600">
        Каждый перевозчик проходит верификацию документов, проверку автопарка и пилотные рейсы. Вы
        видите рейтинг, тарифы и специализацию до публикации заявки.
      </p>
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      {carriers.map((carrier) => (
        <Card key={carrier.name} title={carrier.name} description={carrier.description}>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p>
              <span className="font-semibold text-slate-800">Рейтинг:</span> {carrier.rating}
            </p>
            <p>
              <span className="font-semibold text-slate-800">Флот:</span> {carrier.fleet}
            </p>
            <p>
              <span className="font-semibold text-slate-800">Маршруты:</span> {carrier.routes}
            </p>
            <p>
              <span className="font-semibold text-slate-800">Тарифы:</span>{' '}
              <span className="text-blue-600">{carrier.tariff}</span>
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {carrier.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="sm" to="/request">
              Выбрать перевозчика
            </Button>
            <Button size="sm" variant="secondary" to="/contacts">
              Запросить встречу
            </Button>
          </div>
        </Card>
      ))}
    </div>

    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Стать партнёром</p>
      <h2 className="mt-2 text-3xl font-bold text-slate-900">Присоединяйтесь к бирже перевозчиков</h2>
      <p className="mt-3 text-base text-slate-600">
        Мы подключаем автопарки с подтверждённой историей и гибким графиком. Ежедневные заявки,
        прозрачные расчёты и поддержка 24/7.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Button to="/contacts">Оставить заявку</Button>
        <Button variant="secondary" to="/request">
          Смотреть требования
        </Button>
      </div>
    </div>
  </div>
);

export default Carriers;
