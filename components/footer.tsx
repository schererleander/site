import Link from 'next/link'
import { Panda } from './panda'

export function Footer() {
  return (
    <footer className="mx-auto max-w-[var(--site-width)] py-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <Link
            href="/legal"
            className="text-muted-foreground/60 transition-colors hover:text-foreground"
          >
            Legal
          </Link>
        </div>
        <Panda />
      </div>
    </footer>
  )
}
