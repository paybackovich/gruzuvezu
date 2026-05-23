import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button.jsx';

const navItems = [
  { label: 'Главная', to: '/' },
  { label: 'Для бизнеса', to: '/business' },
  { label: 'Исполнителям', to: '/carriers' },
  { label: 'Контакты', to: '/contacts' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const NavLinks = ({ itemClass = '' }) => (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) =>
            [
              'text-sm font-semibold transition-colors',
              isActive ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900',
              itemClass,
            ].join(' ')
          }
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </NavLink>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-soft">
              GU
            </span>
            <div>
              <p className="text-lg font-bold text-slate-900">GruzUvezu</p>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Грузоперевозки по Пскову и области
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <NavLinks />
          </nav>

          <div className="hidden md:flex">
            <Button to="/request" size="sm">
              Заказать перевозку
            </Button>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 transition hover:border-blue-200 hover:text-blue-600 md:hidden"
            aria-label="Открыть меню"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="flex flex-col gap-4 py-4 md:hidden">
            <nav className="flex flex-col gap-3 text-slate-600">
              <NavLinks itemClass="text-base" />
            </nav>
            <Button to="/request" size="md">
              Заказать перевозку
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


