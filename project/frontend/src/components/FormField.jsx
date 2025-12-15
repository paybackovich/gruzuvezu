const FormField = ({ id, label, required, description, children }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-slate-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {description && <span className="text-xs text-slate-400">{description}</span>}
    </div>
    {children}
  </div>
);

export default FormField;


