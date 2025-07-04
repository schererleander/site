import { useRef, useState } from "react";

function Icon() {
  return <svg className="no-global w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h6M15 6h4m0 0v4m0-4L10 15" /></svg>;
}

interface Props {
  title: string;
  body: string;
  href?: string;
  imgSrc?: string;
}

export default function CardLink({ title, body, href, imgSrc }: Props) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(0.6);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      className={`relative flex items-center gap-4 py-2 px-2 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 overflow-hidden ${
        href ? "cursor-pointer" : ""
      } 
      [--spotlight-light:rgba(255,255,255,0.1)] 
      [--spotlight-dark:rgba(0,0,0,0.1)]`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...(href && {
        onClick: () => window.open(href, "_blank", "noopener,noreferrer"),
        role: "link",
        tabIndex: 0,
      })}
    >
      {/* Spotlight overlay - light */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, 
            var(--spotlight-light), 
            transparent 80%)`,
        }}
      />
      
      {/* Spotlight overlay - dark mode */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out dark:block"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, 
            var(--spotlight-dark), 
            transparent 80%)`,
        }}
      />

      {/* Content */}
      {imgSrc && (
        <img 
          src={imgSrc} 
          className="w-20 h-20 object-cover rounded-lg" 
          alt={title}
        />
      )}
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-neutral-800 dark:text-neutral-400">{body}</p>
      </div>
      {href && <Icon />}
    </div>
  );
}
