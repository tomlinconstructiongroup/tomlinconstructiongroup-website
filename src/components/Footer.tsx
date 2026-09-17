export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-maroon/15 bg-cream-dark/50">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-foreground/70">
        <p className="font-serif text-maroon">Tomlin Construction Group</p>
        <p className="mt-1">
          Phone: (000) 000-0000 &middot; Email: info@tomlinconstructiongroup.com
        </p>
        <p className="mt-4 text-xs">
          &copy; {year} Tomlin Construction Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
