import { useState } from 'react';
import FormField from '../components/FormField.jsx';
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';

const vehicleOptions = [
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
  vehicle: vehicleOptions[0],
  weight: '',
  volume: '',
  loaders: false,
  phone: '',
  comment: '',
};

const Home = () => {
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <div className="mb-8 space-y-2 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Грузоперевозки по Пскову и области</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <FormField id="from" label="Откуда" required>
            <Input
              id="from"
              name="from"
              placeholder="Город, адрес"
              value={formData.from}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField id="to" label="Куда" required>
            <Input
              id="to"
              name="to"
              placeholder="Город, адрес"
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
              {vehicleOptions.map((option) => (
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

        <FormField id="phone" label="Ваш телефон" required>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+7 (999) 123-45-67"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </FormField>

        <FormField id="comment" label="Комментарий">
          <textarea
            id="comment"
            name="comment"
            rows={3}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            placeholder="Особенности груза, время подачи и т.д."
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

        <Button type="submit" size="lg">
          Заказать перевозку
        </Button>

        {submitted && (
          <div className="rounded-2xl border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-700">
            Заявка принята. Менеджер свяжется с вами в течение 15 минут.
          </div>
        )}
      </form>
    </div>
  );
};

export default Home;
