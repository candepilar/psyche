import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-medium tracking-tight">
          psyche
        </Link>
        <span className="text-sm text-foreground/60">bitácora de proyectos</span>
      </div>
    </header>
  );
}
