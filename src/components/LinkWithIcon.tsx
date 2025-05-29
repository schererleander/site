import ExternalLinkIcon from "./ExternalLink";

export default function LinkWithIcon({
  href,
  children,
  className = 'inline-flex items-center gap-1 underline text-blue-400',
  target = '_blank',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={className}
    >
      {children}
      <ExternalLinkIcon />
    </a>
  );
}
