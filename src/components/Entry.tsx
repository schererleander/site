interface Meta {
  title: string;
  excerpt: string;
  date: string;
  cover?: string;
  href?: string;
}

export default function Entry({
  title,
  excerpt,
  date,
  cover,
  href,
}: Meta) {
  const formatted = new Intl.DateTimeFormat("de-DE", { dateStyle: "medium" }).format(new Date(date));

  const content = (
    <div className="flex flex-col h-full gap-2 p-2 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
      {cover && (
        <img
          src={cover}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />
      )}
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
        {title}
      </h3>
      <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
        {excerpt}
      </p>
      <time className="mt-auto block text-xs text-neutral-500 dark:text-neutral-400">
        {formatted}
      </time>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
