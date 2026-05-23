import { useState } from 'react';
import FormField from '../components/FormField.jsx';
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';

const Contacts = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-10 sm:px-6">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Контакты</p>
        <h1 className="text-4xl font-bold text-slate-900">Всегда на связи с клиентами и партнёрами</h1>
        <p className="text-base text-slate-600">
          Помогаем запустить логистику, подключить безопасную сделку и выстроить работу с
          перевозчиками. Пишите удобным способом — ответим в течение рабочего часа.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div>
            <p className="text-sm uppercase tracking-widest text-blue-600">Офис и поддержка</p>
            <p className="mt-3 text-2xl font-bold text-slate-900">8 (8112) 60-40-60</p>
            <p className="text-sm text-slate-500">Будни 09:00–20:00, без выходных для срочных грузов</p>
          </div>
          <div className="space-y-2 text-sm text-slate-600">
            <p>Москва, ул. Автотранспортная, 14 · БЦ «Терминал»</p>
            <p>sales@gruzuvezu.ru · telegram: @gruzuvezu_support</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="space-y-2">
            <p className="text-base font-semibold text-slate-900">Напишите нам</p>
            <p className="text-sm text-slate-500">Оставьте контакты — вернёмся с ответом и расчётом.</p>
          </div>
          <FormField id="name" label="Ваше имя" required>
            <Input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Алексей" required />
          </FormField>
          <div className="grid gap-5 md:grid-cols-2">
            <FormField id="phone" label="Телефон" required>
              <Input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+7 (999) 123-45-67"
                required
              />
            </FormField>
            <FormField id="email" label="E-mail">
              <Input id="email" name="email" value={form.email} onChange={handleChange} placeholder="company@domain.ru" />
            </FormField>
          </div>
          <FormField id="message" label="Сообщение" required>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="Опишите задачу, города и сроки."
              value={form.message}
              onChange={handleChange}
              required
            />
          </FormField>
          <div className="flex flex-wrap items-center gap-4">
            <Button type="submit">Отправить</Button>
            <p className="text-sm text-slate-500">Среднее время ответа — 12 минут.</p>
          </div>
          {sent && (
            <div className="rounded-2xl border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-700">
              Сообщение сохранено локально. На рабочем сервере запрос поступит менеджеру автоматически.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contacts;