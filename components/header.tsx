import Link from "next/link"
import { PawPrint, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-[var(--site-width)] items-center justify-between gap-5 py-4">
      <div className="flex items-center gap-6">
        <Link href="/" className="font-bold text-xl">
          <PawPrint className="hover:rotate-12 transition-transform h-5 w-5" />
        </Link>
        <nav className="flex gap-6">
          <Link 
            href="/blog" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <Button asChild variant="ghost" size="icon">
          <Link href="https://github.com/schererleander" target="_blank" aria-label="Github">
            <Github className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="ghost" size="icon">
          <Link href="mailto:leander@schererleander.de" aria-label="Contact">
            <Mail className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </header>
  )
}
