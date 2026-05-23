import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-slate-900 text-slate-100">
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-3">
      <div className="space-y-3">
        <p className="text-xl font-semibold">GruzUvezu</p>
        <p className="text-sm text-slate-400">
          Грузоперевозки по Пскову и Псковской области.
        </p>
      </div>
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
          Навигация
        </p>
        <ul className="space-y-2 text-sm">
          <li>
            <Link className="text-slate-200 transition hover:text-white" to="/">
              Заказать перевозку
            </Link>
          </li>
          <li>
            <Link className="text-slate-200 transition hover:text-white" to="/business">
              Для бизнеса
            </Link>
          </li>
          <li>
            <Link className="text-slate-200 transition hover:text-white" to="/carriers">
              Исполнителям
            </Link>
          </li>
          <li>
            <Link className="text-slate-200 transition hover:text-white" to="/contacts">
              Контакты
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
          Контакты
        </p>
        <div className="space-y-3 text-sm text-slate-300">
          <p>8 (8112) 60-40-60</p>
          <p className="text-slate-500">Будни 09:00–20:00</p>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>© {new Date().getFullYear()} GruzUvezu. Все права защищены.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
