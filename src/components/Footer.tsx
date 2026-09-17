export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-maroon/10">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-foreground/60">
        <p className="font-serif text-lg text-maroon">Tomlin Construction Group</p>
        <p className="mt-2">
          Phone: (000) 000-0000 &middot; Email: info@tomlinconstructiongroup.com
        </p>
        <p className="font-heading mt-6 text-xs uppercase tracking-[0.2em] text-foreground/40">
          &copy; {year} Tomlin Construction Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
