export default function Navigation({ links = [] }) {
  return (
    <nav className="flex space-x-24">
      {links.map((link, i) => (
        <a key={i} href="#" className="hover:text-blue-500">
          {link.text}
        </a>
      ))}
    </nav>
  );
}
