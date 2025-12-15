import { useState } from 'react';
import FormField from '../components/FormField.jsx';
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';

const machineOptions = [
  'Малотоннажный фургон до 1,5 т',
  'Газель тентованная',
  'Изотермический кузов',
  'Термобудка',
  'Бортовая платформа',
];

const initialState = {
  from: '',
  to: '',
  date: '',
  vehicle: machineOptions[0],
  weight: '',
  volume: '',
  loaders: false,
  comment: '',
};

const PostRequest = () => {
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-10 sm:px-6">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Заявка</p>
        <h1 className="text-4xl font-bold text-slate-900">Опишите рейс — получайте ставки</h1>
        <p className="text-base text-slate-600">
          Форма повторяет интерфейс личного кабинета. После отправки менеджер свяжется, подтвердит
          детали и запустит безопасную сделку.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <FormField id="from" label="Откуда" required>
              <Input
                id="from"
                name="from"
                placeholder="Москва, склад на Рязанке"
                value={formData.from}
                onChange={handleChange}
                required
              />
            </FormField>
            <FormField id="to" label="Куда" required>
              <Input
                id="to"
                name="to"
                placeholder="Санкт‑Петербург, дистрибуция"
                value={formData.to}
                onChange={handleChange}
                required
              />
            </FormField>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <FormField id="date" label="Дата погрузки" required>
              <Input
                id="date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </FormField>
            <FormField id="vehicle" label="Тип машины" required>
              <select
                id="vehicle"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >
                {machineOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </FormField>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <FormField id="weight" label="Вес груза">
              <Input
                id="weight"
                name="weight"
                placeholder="Например, 1 200 кг"
                value={formData.weight}
                onChange={handleChange}
              />
            </FormField>
            <FormField id="volume" label="Объём / паллеты">
              <Input
                id="volume"
                name="volume"
                placeholder="8 паллет или 12 м³"
                value={formData.volume}
                onChange={handleChange}
              />
            </FormField>
          </div>

          <FormField id="comment" label="Комментарий к рейсу" description="Особенности погрузки">
            <textarea
              id="comment"
              name="comment"
              rows={4}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="Например: въезд по пропускам, требуется уведомить за 2 часа до прибытия."
              value={formData.comment}
              onChange={handleChange}
            />
          </FormField>

          <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <input
              type="checkbox"
              name="loaders"
              checked={formData.loaders}
              onChange={handleChange}
              className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-400"
            />
            <span className="text-sm font-semibold text-slate-700">Нужны услуги грузчиков</span>
          </label>

          <div className="flex flex-wrap items-center gap-4">
            <Button type="submit" size="lg">
              Получить предложения
            </Button>
            <p className="text-sm text-slate-500">
              Менеджер свяжется в течение 15 минут после публикации.
            </p>
          </div>
          {submitted && (
            <div className="rounded-2xl border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-700">
              Заявка сохранена локально. Менеджер свяжется после запуска на боевом стенде.
            </div>
          )}
        </form>

        <div className="space-y-6 rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white">
          <div>
            <p className="text-sm uppercase tracking-widest text-white/60">Предварительная ставка</p>
            <p className="mt-2 text-3xl font-semibold">
              от 18 000 ₽ <span className="text-base text-white/60">/ рейс</span>
            </p>
            <p className="mt-3 text-sm text-white/70">
              Финальная стоимость зависит от типа кузова, дополнительных услуг и статуса перевозчика.
            </p>
          </div>
          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold text-white">Сводка заявки</p>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                Маршрут: {formData.from || '—'} → {formData.to || '—'}
              </li>
              <li>Тип авто: {formData.vehicle}</li>
              <li>Дата: {formData.date || 'не выбрана'}</li>
              <li>
                Параметры: {formData.weight || '—'} / {formData.volume || '—'}
              </li>
              <li>Грузчики: {formData.loaders ? 'нужны' : 'не требуются'}</li>
            </ul>
          </div>
          <div className="space-y-2 text-sm text-white/70">
            <p className="font-semibold text-white">Что будет дальше?</p>
            <ul className="list-outside list-disc space-y-1 pl-5">
              <li>Менеджер уточнит адреса и временные окна.</li>
              <li>Заявка появится в ленте перевозчиков с вашим бюджетом.</li>
              <li>Вы получите доступ к откликам и рейтингу исполнителей.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostRequest;

