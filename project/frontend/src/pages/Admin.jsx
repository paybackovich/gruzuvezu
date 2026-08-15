import { useMemo, useState } from 'react';

const initialOrders = [
  {
    id: 'GZ-1048',
    created: 'Сегодня, 10:42',
    customer: 'ООО «ПсковМаркет»',
    route: 'Псков → Великие Луки',
    cargo: 'Паллеты, 1 200 кг',
    vehicle: 'Газель-тент',
    date: 'Сегодня, 14:00',
    price: '8 500 ₽',
    status: 'Новая',
    statusTone: 'blue',
    executor: 'Не назначен',
  },
  {
    id: 'GZ-1047',
    created: 'Сегодня, 09:18',
    customer: 'Алексей Воронов',
    route: 'Псков → д. Черёха',
    cargo: 'Мебель и техника',
    vehicle: 'Газель 3 м',
    date: 'Сегодня, 12:30',
    price: '4 200 ₽',
    status: 'В работе',
    statusTone: 'amber',
    executor: 'Иван Петров',
  },
  {
    id: 'GZ-1046',
    created: 'Вчера, 18:06',
    customer: 'ИП «Северный дом»',
    route: 'Псков → Санкт-Петербург',
    cargo: 'Стройматериалы, 4 т',
    vehicle: 'Бортовая 5 т',
    date: 'Завтра, 07:00',
    price: '24 000 ₽',
    status: 'Назначен',
    statusTone: 'violet',
    executor: 'ООО «АвтоЛогист»',
  },
  {
    id: 'GZ-1045',
    created: 'Вчера, 15:21',
    customer: 'Мария Соколова',
    route: 'Псков → Псков',
    cargo: 'Квартирный переезд',
    vehicle: 'Газель + 2 грузчика',
    date: 'Вчера, 16:00',
    price: '6 800 ₽',
    status: 'Завершён',
    statusTone: 'green',
    executor: 'Сергей Кузнецов',
  },
];

const executors = [
  { name: 'Иван Петров', initials: 'ИП', type: 'Газель-тент · 1,5 т', area: 'Псков и область', orders: 48, rating: '4,9', status: 'На линии', tone: 'green', phone: '+7 911 000-14-28' },
  { name: 'Сергей Кузнецов', initials: 'СК', type: 'Газель · 1,5 т', area: 'Псков', orders: 31, rating: '4,8', status: 'На линии', tone: 'green', phone: '+7 911 000-37-19' },
  { name: 'ООО «АвтоЛогист»', initials: 'АЛ', type: 'Фургоны · 1,5–5 т', area: 'Псков — СПб — Москва', orders: 126, rating: '4,7', status: 'Проверка документов', tone: 'amber', phone: '+7 911 000-62-04' },
  { name: 'Александр Смирнов', initials: 'АС', type: 'Бортовая · 5 т', area: 'Псковская область', orders: 19, rating: '4,6', status: 'Не в сети', tone: 'slate', phone: '+7 911 000-88-31' },
];

const statusStyles = {
  blue: 'bg-blue-50 text-blue-700 ring-blue-600/10',
  amber: 'bg-amber-50 text-amber-700 ring-amber-600/10',
  violet: 'bg-violet-50 text-violet-700 ring-violet-600/10',
  green: 'bg-emerald-50 text-emerald-700 ring-emerald-600/10',
  slate: 'bg-slate-100 text-slate-600 ring-slate-500/10',
};

const orderStatuses = ['Новая', 'В работе', 'Назначен', 'Завершён', 'Отменён'];

const StatusBadge = ({ label, tone = 'slate' }) => (
  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[tone] || statusStyles.slate}`}>
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {label}
  </span>
);

const Admin = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState(initialOrders);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('Все статусы');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filteredOrders = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return orders.filter((order) => {
      const matchesQuery = !normalizedQuery || [order.id, order.customer, order.route, order.executor]
        .join(' ').toLowerCase().includes(normalizedQuery);
      const matchesStatus = statusFilter === 'Все статусы' || order.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [orders, query, statusFilter]);

  const updateStatus = (id, status) => {
    setOrders((current) => current.map((order) => (
      order.id === id ? { ...order, status, statusTone: status === 'Завершён' ? 'green' : status === 'Новая' ? 'blue' : status === 'Назначен' ? 'violet' : 'amber' } : order
    )));
    setSelectedOrder((current) => current && current.id === id ? { ...current, status } : current);
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] pb-16">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">GruzUvezu / workspace</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">Кабинет администратора</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 sm:inline-flex">Демо-режим</span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">АК</div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Новые заказы', '12', 'Требуют обработки', 'blue'],
            ['В работе', '8', 'Активные перевозки', 'amber'],
            ['Исполнители', '24', '18 сейчас на линии', 'violet'],
            ['Оборот сегодня', '86 400 ₽', '+12% к вчера', 'green'],
          ].map(([label, value, note, tone]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-medium text-slate-500">{label}</p>
                <span className={`h-2.5 w-2.5 rounded-full ${tone === 'blue' ? 'bg-blue-500' : tone === 'amber' ? 'bg-amber-500' : tone === 'violet' ? 'bg-violet-500' : 'bg-emerald-500'}`} />
              </div>
              <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{value}</p>
              <p className="mt-1 text-xs text-slate-400">{note}</p>
            </div>
          ))}
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-5 border-b border-slate-200 px-5 pt-5 sm:px-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Операционная панель</h2>
                <p className="mt-1 text-sm text-slate-500">Управление заявками и подключёнными исполнителями</p>
              </div>
              <button type="button" className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500">
                + Новая заявка
              </button>
            </div>
            <div className="flex gap-6">
              {[['orders', 'Заказы', orders.length], ['executors', 'Исполнители', executors.length]].map(([key, label, count]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`border-b-2 px-1 pb-3 text-sm font-semibold transition ${activeTab === key ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-700'}`}
                >
                  {label} <span className="ml-1 rounded-full bg-slate-100 px-1.5 py-0.5 text-xs text-slate-500">{count}</span>
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'orders' ? (
            <>
              <div className="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:px-6">
                <div className="relative flex-1">
                  <span className="pointer-events-none absolute left-3 top-2.5 text-slate-400">⌕</span>
                  <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Поиск по заказу, клиенту или маршруту" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50" />
                </div>
                <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-600 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50">
                  <option>Все статусы</option>
                  {orderStatuses.map((status) => <option key={status}>{status}</option>)}
                </select>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] text-left text-sm">
                  <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-400">
                    <tr><th className="px-6 py-3 font-semibold">Заказ</th><th className="px-4 py-3 font-semibold">Маршрут и груз</th><th className="px-4 py-3 font-semibold">Дата</th><th className="px-4 py-3 font-semibold">Исполнитель</th><th className="px-4 py-3 font-semibold">Статус</th><th className="px-4 py-3 font-semibold">Сумма</th><th className="px-6 py-3" /></tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="transition hover:bg-slate-50/80">
                        <td className="px-6 py-4"><button type="button" onClick={() => setSelectedOrder(order)} className="font-bold text-blue-600 hover:text-blue-800">{order.id}</button><p className="mt-1 text-xs text-slate-400">{order.customer}</p></td>
                        <td className="px-4 py-4"><p className="font-semibold text-slate-800">{order.route}</p><p className="mt-1 text-xs text-slate-400">{order.cargo} · {order.vehicle}</p></td>
                        <td className="px-4 py-4 text-slate-600">{order.date}</td>
                        <td className="px-4 py-4 text-slate-600">{order.executor}</td>
                        <td className="px-4 py-4"><StatusBadge label={order.status} tone={order.statusTone} /></td>
                        <td className="px-4 py-4 font-semibold text-slate-800">{order.price}</td>
                        <td className="px-6 py-4 text-right"><button type="button" onClick={() => setSelectedOrder(order)} className="text-slate-400 hover:text-blue-600" aria-label={`Открыть ${order.id}`}>•••</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {!filteredOrders.length && <p className="px-6 py-12 text-center text-sm text-slate-500">Заказы не найдены. Измените фильтр или поисковый запрос.</p>}
              </div>
            </>
          ) : (
            <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3 sm:p-6">
              {executors.map((executor) => (
                <article key={executor.name} className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:shadow-sm">
                  <div className="flex items-start justify-between gap-3"><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">{executor.initials}</div><div><h3 className="font-semibold text-slate-900">{executor.name}</h3><p className="mt-0.5 text-xs text-slate-400">{executor.type}</p></div></div><span className="text-slate-300">•••</span></div>
                  <div className="mt-5 space-y-3 text-sm"><div className="flex justify-between gap-3"><span className="text-slate-400">Зона работы</span><span className="text-right text-slate-700">{executor.area}</span></div><div className="flex justify-between"><span className="text-slate-400">Выполнено заказов</span><span className="font-semibold text-slate-700">{executor.orders}</span></div><div className="flex justify-between"><span className="text-slate-400">Рейтинг</span><span className="font-semibold text-slate-700">★ {executor.rating}</span></div></div>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4"><StatusBadge label={executor.status} tone={executor.tone} /><span className="text-xs text-slate-400">{executor.phone}</span></div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/30" onClick={() => setSelectedOrder(null)}>
          <aside className="h-full w-full max-w-md overflow-y-auto bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-wider text-blue-600">Карточка заказа</p><h2 className="mt-2 text-2xl font-bold text-slate-900">{selectedOrder.id}</h2></div><button type="button" onClick={() => setSelectedOrder(null)} className="text-2xl text-slate-400 hover:text-slate-900" aria-label="Закрыть">×</button></div>
            <div className="mt-6 space-y-5"><div><p className="text-xs uppercase tracking-wider text-slate-400">Клиент</p><p className="mt-1 font-semibold text-slate-800">{selectedOrder.customer}</p></div><div><p className="text-xs uppercase tracking-wider text-slate-400">Маршрут</p><p className="mt-1 font-semibold text-slate-800">{selectedOrder.route}</p><p className="mt-1 text-sm text-slate-500">{selectedOrder.cargo} · {selectedOrder.vehicle}</p></div><div className="grid grid-cols-2 gap-4"><div><p className="text-xs uppercase tracking-wider text-slate-400">Дата подачи</p><p className="mt-1 text-sm font-semibold text-slate-800">{selectedOrder.date}</p></div><div><p className="text-xs uppercase tracking-wider text-slate-400">Стоимость</p><p className="mt-1 text-sm font-semibold text-slate-800">{selectedOrder.price}</p></div></div><div><p className="text-xs uppercase tracking-wider text-slate-400">Исполнитель</p><p className="mt-1 font-semibold text-slate-800">{selectedOrder.executor}</p></div><div><p className="mb-2 text-xs uppercase tracking-wider text-slate-400">Изменить статус</p><div className="grid grid-cols-2 gap-2">{orderStatuses.map((status) => <button key={status} type="button" onClick={() => updateStatus(selectedOrder.id, status)} className={`rounded-xl border px-3 py-2 text-sm font-semibold transition ${selectedOrder.status === status ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600 hover:border-blue-300'}`}>{status}</button>)}</div></div></div>
            <p className="mt-8 rounded-2xl bg-amber-50 p-4 text-xs leading-relaxed text-amber-800">Пока используются демонстрационные данные. Следующим этапом подключим реальные заявки, авторизацию администратора и назначение исполнителя.</p>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Admin;
