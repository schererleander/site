import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Gear', href: '/gear' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' }
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur flex items-center">
      <div className="max-w-2xl mx-auto flex px-4 py-4 text-sm">
        <div className="flex gap-6 items-center">
          {navItems.map(({ label, href }) => (
            <a className="hover:underline" key={label} href={href}>{label}</a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
