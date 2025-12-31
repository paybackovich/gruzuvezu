import Button from './Button.jsx';

const Hero = ({ title, subtitle, description, primaryCta, secondaryCta, stats = [], icon }) => (
  <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-slate-900 text-white">
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
      <div className="space-y-6">
        {subtitle && (
          <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium uppercase tracking-wider text-white/80">
            {subtitle}
          </p>
        )}
        <h1 className="flex items-center gap-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {icon && (
            <img 
              src={icon} 
              alt="GruzUvezu" 
              className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 flex-shrink-0"
            />
          )}
          <span>{title}</span>
        </h1>
        {description && <p className="text-lg text-white/80">{description}</p>}
        <div className="flex flex-wrap gap-3">
          {primaryCta && (
            <Button to={primaryCta.to} size="lg" variant="secondary">
              {primaryCta.label}
            </Button>
          )}
          {secondaryCta && (
            <Button to={secondaryCta.to} size="lg" variant="ghost" className="text-white hover:bg-white/10">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
        <h2 className="text-xl font-semibold">Цифры биржи</h2>
        <dl className="mt-6 grid grid-cols-2 gap-6 text-white">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-sm text-white/70">{stat.label}</dt>
              <dd className="text-2xl font-bold">{stat.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm text-white/70">
          Практические показатели обновляются ежедневно и отражают активность перевозчиков и
          заказчиков.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;


