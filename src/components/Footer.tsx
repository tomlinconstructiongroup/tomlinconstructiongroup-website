export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-maroon/10">
      <p className="font-heading mx-auto max-w-6xl px-6 py-8 text-center text-xs uppercase tracking-[0.2em] text-foreground/40">
        &copy; {year} Tomlin Construction Group. All rights reserved.
      </p>
    </footer>
  );
}
