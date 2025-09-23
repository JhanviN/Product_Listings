export default function Navigation({ links = [] }) {
  return (
    <nav className="flex space-x-6 md:space-x-24 overflow-x-auto">
      {links.map((link, i) => (
        <a key={i} href="#" className="hover:text-blue-500 whitespace-nowrap">
          {link.text}
        </a>
      ))}
    </nav>
  );
}
