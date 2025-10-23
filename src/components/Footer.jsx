export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#12161a]">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-[var(--muted)]">
        © {new Date().getFullYear()} Muhammad Qutab • AI & Automation Engineer • <a href="mailto:muhammadqutab6@gmail.com">muhammadqutab6@gmail.com</a>
      </div>
    </footer>
  );
}
