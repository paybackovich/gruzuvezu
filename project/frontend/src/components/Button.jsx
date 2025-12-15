import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-blue-600 text-white shadow-soft hover:bg-blue-500 focus-visible:outline-blue-600 focus-visible:ring-blue-200',
  secondary:
    'bg-white text-blue-600 border border-blue-100 hover:bg-blue-50 focus-visible:outline-blue-600 focus-visible:ring-blue-200',
  ghost:
    'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-blue-600 focus-visible:ring-blue-200',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
};

const Button = ({
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  children,
  type = 'button',
  ...rest
}) => {
  const Component = to ? Link : 'button';
  const resolvedClassName = [
    'inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:ring-2',
    variants[variant],
    sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const componentProps = to ? { to } : { type };

  return (
    <Component className={resolvedClassName} {...componentProps} {...rest}>
      {children}
    </Component>
  );
};

export default Button;

