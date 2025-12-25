export function Panda() {
  return (
    <label className="text-sm text-muted-foreground/60 transition-colors hover:text-foreground cursor-pointer select-none">
      <input type="checkbox" className="peer sr-only" />
      <span className="peer-checked:hidden">ʕっ•ᴥ•ʔっ</span>
      <span className="hidden peer-checked:inline">ʕ•ᴥ•ʔ</span>
    </label>
  )
}
