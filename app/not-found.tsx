import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">404</p>
      <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        This route doesn&apos;t exist.
      </h1>
      <p className="max-w-md text-neutral-400">
        The page you&apos;re looking for has moved or never existed.
      </p>
      <Link
        href="/"
        className="btn-primary"
      >
        Back to home
      </Link>
    </main>
  );
}
