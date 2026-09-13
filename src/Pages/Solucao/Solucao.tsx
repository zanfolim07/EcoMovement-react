import { useState } from 'react';
import { Link } from 'react-router-dom';
import TituloSecao from '../../components/TituloSecao/TituloSecao';
import TelaSolucaoCard from '../../components/TelaSolucaoCard/TelaSolucaoCard';
import { categoriasSolucao, telasSolucao } from '../../data/telasSolucao';
import type { CategoriaSolucao } from '../../data/telasSolucao';

type FiltroSolucao = 'Todas' | CategoriaSolucao;
const filtros: readonly FiltroSolucao[] = ['Todas', ...categoriasSolucao];

export default function Solucao() {
  const [categoria, setCategoria] = useState<FiltroSolucao>('Todas');
  const telasVisiveis = telasSolucao.filter(
    (tela) => categoria === 'Todas' || tela.categoria === categoria,
  );

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-14 md:py-20">
      <TituloSecao
        id="solucao-titulo"
        nivel="h1"
        etiqueta="Solução do projeto"
        titulo="Conheça o EcoMovement por dentro."
        descricao="Explore as telas do protótipo e veja como missões, conquistas e comunidade fazem parte da experiência. As imagens ilustram a proposta do aplicativo."
      />

      <aside className="mt-8 rounded-2xl border border-line bg-slate-50 p-6" aria-label="Sobre a demonstração">
        <p className="mb-0 text-sm leading-relaxed text-muted">
          Esta galeria apresenta o protótipo. Os botões dentro das imagens fazem parte das telas ilustradas.
          Use os filtros e os links de detalhes para navegar pela apresentação.
        </p>
      </aside>

      <section className="mt-12" aria-labelledby="galeria-titulo">
        <h2 id="galeria-titulo" className="mb-5 text-2xl font-bold text-ink">Explore as telas</h2>
        <div className="flex flex-wrap gap-3" role="group" aria-label="Filtrar telas por categoria">
          {filtros.map((filtro) => (
            <button
              key={filtro}
              type="button"
              aria-pressed={categoria === filtro}
              aria-controls="galeria-telas"
              onClick={() => setCategoria(filtro)}
              className={`min-h-11 cursor-pointer rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                categoria === filtro
                  ? 'border-brand bg-brand text-white'
                  : 'border-line bg-white text-ink hover:bg-slate-50'
              }`}
            >
              {filtro}
            </button>
          ))}
        </div>
        <p className="mt-5 mb-6 text-sm text-muted" role="status" aria-live="polite" aria-atomic="true">
          {telasVisiveis.length} telas em {categoria.toLocaleLowerCase('pt-BR')}.
        </p>
        <div id="galeria-telas" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {telasVisiveis.map((tela) => <TelaSolucaoCard key={tela.id} tela={tela} />)}
        </div>
      </section>

      <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="mb-0 text-sm leading-relaxed text-muted">Quer entender as etapas de participação em uma missão?</p>
        <Link to="/missoes" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl border border-line bg-white px-5 py-3 text-sm font-semibold text-ink no-underline hover:bg-slate-100">
          Abrir guia de missões
        </Link>
      </div>
    </main>
  );
}
