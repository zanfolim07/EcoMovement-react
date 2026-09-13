import { Link, useNavigate, useParams } from 'react-router-dom';
import TituloSecao from '../../components/TituloSecao/TituloSecao';
import { telasSolucao } from '../../data/telasSolucao';

export default function DetalheSolucao() {
  const { telaId } = useParams<{ telaId: string }>();
  const navigate = useNavigate();
  const indice = telasSolucao.findIndex((item) => item.id === telaId);
  const tela = telasSolucao[indice];

  if (!tela) {
    return (
      <main className="mx-auto min-h-[60vh] max-w-6xl px-6 py-14 md:py-20">
        <TituloSecao
          id="tela-nao-encontrada"
          nivel="h1"
          etiqueta="Solução do projeto"
          titulo="Tela não encontrada."
          descricao="Não encontramos uma tela com esse endereço. Volte à galeria para explorar o protótipo."
        />
        <Link to="/solucao" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-2xl bg-brand px-6 py-3 text-sm font-semibold text-white no-underline hover:bg-brand-dark">
          Voltar à galeria
        </Link>
      </main>
    );
  }

  const anterior = telasSolucao[indice - 1];
  const proxima = telasSolucao[indice + 1];

  return (
    <main className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <nav className="mb-8" aria-label="Caminho da página">
        <ol className="flex list-none flex-wrap items-center gap-2 p-0 text-sm text-muted">
          <li><Link to="/solucao" className="font-semibold text-brand underline underline-offset-4">Solução</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{tela.titulo}</li>
        </ol>
      </nav>

      <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
        <figure className="m-0 rounded-2xl border border-line bg-slate-50 p-6">
          <img src={tela.imagem} alt={tela.alt} className="mx-auto h-auto w-full max-w-72 object-contain" />
          <figcaption className="mt-5 text-center text-xs leading-relaxed text-muted">
            Tela {indice + 1} de {telasSolucao.length} · Protótipo EcoMovement
          </figcaption>
        </figure>

        <div>
          <TituloSecao
            id="detalhe-titulo"
            nivel="h1"
            etiqueta={tela.categoria}
            titulo={tela.titulo}
            descricao={tela.descricao}
          />
          <section className="mt-8" aria-labelledby="destaques-titulo">
            <h2 id="destaques-titulo" className="mb-4 text-xl font-bold text-ink">O que esta tela apresenta</h2>
            <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-muted marker:text-brand">
              {tela.destaques.map((destaque) => <li key={destaque}>{destaque}</li>)}
            </ul>
          </section>
          <p className="mt-8 rounded-2xl bg-slate-50 p-5 text-sm leading-relaxed text-muted">
            Esta imagem faz parte da apresentação do projeto. Ações como enviar evidências e receber pontos estão ilustradas no protótipo.
          </p>
          <Link to="/solucao" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-brand underline underline-offset-4">
            Voltar à galeria completa
          </Link>
        </div>
      </div>

      <nav className="mt-12 grid gap-3 border-t border-line pt-6 sm:grid-cols-2" aria-label="Navegar entre telas">
        <button
          type="button"
          disabled={!anterior}
          onClick={() => { if (anterior) navigate(`/solucao/${anterior.id}`); }}
          className="min-h-12 cursor-pointer rounded-2xl border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <span aria-hidden="true">← </span>{anterior ? `Anterior: ${anterior.titulo}` : 'Primeira tela'}
        </button>
        <button
          type="button"
          disabled={!proxima}
          onClick={() => { if (proxima) navigate(`/solucao/${proxima.id}`); }}
          className="min-h-12 cursor-pointer rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          {proxima ? `Próxima: ${proxima.titulo}` : 'Última tela'}<span aria-hidden="true"> →</span>
        </button>
      </nav>
    </main>
  );
}
