import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Gear', href: '/gear' },
    { label: 'Projects', href: '/projects' },
    { label: 'Homelab', href: '/homelab' },
    { label: '3D Printing', href: '/printing' }
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur flex items-center">
      <div className="max-w-2xl mx-auto flex px-4 py-4 text-sm">
        <div className="flex gap-6 items-center">
          {navItems.map(({ label, href }) => (
            <Link className="hover:underline" key={label} to={href}>{label}</Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
