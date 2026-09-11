import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Missões', to: '/missoes' },
  { label: 'Solução do projeto', to: '/solucao' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contato', to: '/contato' },
  { label: 'Integrantes', to: '/integrantes' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[linear-gradient(90deg,#80D7DE_0%,#4CAEDD_13%,#1885DB_25%,#1B89DB_50%,#1372CE_100%)] px-6 pt-8 pb-6 text-white">
      <div className="mx-auto flex max-w-300 flex-col items-center gap-6 text-center">
        <p className="mr-auto m-0 text-xl font-extrabold">EcoMovement</p>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {footerLinks.map((item) => (
            <Link key={item.to} to={item.to} className="text-xs text-white no-underline">
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="m-0 text-xs">© {year} EcoMovement | Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
