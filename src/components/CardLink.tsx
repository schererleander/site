import ExternalLinkIcon from "./ExternalLink";

interface Props {
  title: string;
  body: string;
  href?: string;
  imgSrc?: string;
}

export default function CardLink({ title, body, href, imgSrc }: Props) {
  const Wrapper = href ? 'a' : 'div';
  return (
    <Wrapper
      {...(href && {
        href,
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
      className="group flex items-center gap-4 py-2 px-2 rounded-lg"
    >
      <img src={imgSrc || ''} className="w-20 h-20 object-cover rounded-lg transition-transform duration-200 group-hover:scale-105"/>
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-600 black:text-gray-300">{body}</p>
      </div>
      {href && <ExternalLinkIcon />}
    </Wrapper>
  );
}