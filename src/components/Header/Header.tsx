import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/inicio' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Missões', to: '/missoes' },
  { label: 'Solução do projeto', to: '/solucao' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contato', to: '/contato' },
  { label: 'Integrantes', to: '/integrantes' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = pathname === '/missoes' ? 'Missões | EcoMovement' : 'EcoMovement';
  }, [pathname]);

  return (
    <header className="relative z-30 w-full bg-white">
      <div className="mx-auto flex max-w-300 items-center justify-between px-5 py-4">
        <Link to="/inicio" className="whitespace-nowrap text-xl font-extrabold no-underline" onClick={() => setIsMenuOpen(false)}>
          <span className="text-brand">Eco</span>
          <span className="text-copy">Movement</span>
        </Link>

        <button
          className="flex cursor-pointer flex-col gap-1 border-0 bg-transparent p-1 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
        >
          <span className="h-0.5 w-5.5 bg-brand" />
          <span className="h-0.5 w-5.5 bg-brand" />
          <span className="h-0.5 w-5.5 bg-brand" />
        </button>

        <nav className={`absolute top-full right-0 left-0 flex max-h-0 flex-col overflow-hidden bg-white transition-[max-height] duration-250 md:static md:max-h-none md:flex-row md:gap-6 md:overflow-visible ${isMenuOpen ? 'max-h-100' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative inline-block border-t border-line px-5 py-3.5 text-sm font-medium text-copy no-underline transition-colors hover:text-brand md:border-0 md:p-0 md:text-xs ${isActive ? 'font-semibold text-brand after:absolute after:right-5 after:bottom-0 after:left-5 after:block after:h-0.75 after:bg-brand md:after:right-0 md:after:left-0 md:after:-bottom-1.5' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
