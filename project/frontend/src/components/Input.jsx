const Input = ({ className = '', ...props }) => (
  <input
    className={[
      'w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm transition',
      'focus:border-blue-500 focus:ring-4 focus:ring-blue-100',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);

export default Input;


