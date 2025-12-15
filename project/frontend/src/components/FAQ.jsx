const FAQ = ({ items = [] }) => (
  <div className="space-y-4">
    {items.map((item, index) => (
      <details
        key={item.question}
        className="group rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-200"
        defaultOpen={index === 0}
      >
        <summary className="flex cursor-pointer items-start justify-between gap-4 text-left text-base font-semibold text-slate-900">
          {item.question}
          <span className="text-blue-600 group-open:rotate-180">⌃</span>
        </summary>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.answer}</p>
      </details>
    ))}
  </div>
);

export default FAQ;

