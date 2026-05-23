import Button from './Button.jsx';

const Hero = ({ title, subtitle, description, primaryCta, secondaryCta, icon }) => (
  <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-slate-900 text-white">
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        {subtitle && (
          <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium uppercase tracking-wider text-white/80">
            {subtitle}
          </p>
        )}
        <h1 className="flex items-center justify-center gap-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {icon && (
            <img
              src={icon}
              alt="GruzUvezu"
              className="h-12 w-12 flex-shrink-0 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
            />
          )}
          <span>{title}</span>
        </h1>
        {description && <p className="text-lg text-white/80">{description}</p>}
        <div className="flex flex-wrap justify-center gap-3">
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
    </div>
  </section>
);

export default Hero;


