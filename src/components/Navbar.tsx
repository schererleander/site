import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur">
      <div className="max-w-2xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex gap-4 justify-center flex-1">
          {navItems.map(({ label, href }) => (
            <Button key={label} variant="ghost" asChild>
              <a href={href}>{label}</a>
            </Button>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
