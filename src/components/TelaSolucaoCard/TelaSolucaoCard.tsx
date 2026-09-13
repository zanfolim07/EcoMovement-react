import { Link } from 'react-router-dom';
import type { TelaSolucao } from '../../data/telasSolucao';

interface TelaSolucaoCardProps {
  tela: TelaSolucao;
}

export default function TelaSolucaoCard({ tela }: TelaSolucaoCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
      <div className="flex justify-center bg-slate-50 px-6 py-8">
        <img
          src={tela.imagem}
          alt={tela.alt}
          loading="lazy"
          decoding="async"
          className="h-72 w-full max-w-44 object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-xs font-bold text-brand">{tela.categoria}</p>
        <h3 className="mb-3 text-xl font-bold text-ink">{tela.titulo}</h3>
        <p className="mb-6 text-sm leading-relaxed text-muted">{tela.descricao}</p>
        <Link
          to={`/solucao/${tela.id}`}
          aria-label={`Ver detalhes: ${tela.titulo}`}
          className="mt-auto inline-flex min-h-11 items-center justify-center rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-brand-dark"
        >
          Ver detalhes <span aria-hidden="true" className="ml-2">→</span>
        </Link>
      </div>
    </article>
  );
}
