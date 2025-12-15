const Card = ({ title, eyebrow, description, icon, children, className = '' }) => (
  <div
    className={[
      'rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {eyebrow && <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{eyebrow}</p>}
    {icon && <div className="mb-4 text-3xl">{icon}</div>}
    {title && <h3 className="text-lg font-semibold text-slate-900">{title}</h3>}
    {description && <p className="mt-2 text-sm text-slate-500">{description}</p>}
    {children && <div className="mt-4 text-sm text-slate-600">{children}</div>}
  </div>
);

export default Card;


