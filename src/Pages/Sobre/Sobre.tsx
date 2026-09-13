import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import TituloSecao from '../../components/TituloSecao/TituloSecao';
import { etapasProjeto, pilaresProjeto } from '../../data/projeto';
import imgOqueSomos from '../../assets/img/img-oque-somos.png';
import imgConhecaArvore from '../../assets/img/img-conheca-arvore.png';

export default function Sobre() {
  return (
    <main className="w-full bg-white">
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20" aria-labelledby="sobre-titulo">
        <TituloSecao
          id="sobre-titulo"
          nivel="h1"
          etiqueta="Sobre o EcoMovement"
          titulo="Pequenas atitudes. Um movimento coletivo."
          descricao="O EcoMovement é uma proposta de gamificação sustentável para o ecossistema SoulUp, desenvolvida no Challenge da FIAP. A ideia é aproximar ações do dia a dia de uma jornada com missões, conquistas e participação da comunidade."
        />
        <img
          src={imgOqueSomos}
          alt="Ilustração de apresentação do projeto EcoMovement"
          className="mx-auto w-full max-w-sm object-contain"
        />
      </section>

      <section className="bg-slate-50 px-6 py-14 md:py-20" aria-labelledby="pilares-titulo">
        <div className="mx-auto max-w-6xl">
          <TituloSecao
            id="pilares-titulo"
            etiqueta="O que nos move"
            titulo="Participar, evoluir e confiar."
            descricao="A experiência une incentivo à participação e cuidado com a validação das ações."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pilaresProjeto.map((pilar) => (
              <Card
                key={pilar.titulo}
                title={pilar.titulo}
                description={pilar.descricao}
                icon={pilar.icone}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20" aria-labelledby="jornada-titulo">
        <TituloSecao
          id="jornada-titulo"
          etiqueta="Da ação ao progresso"
          titulo="Uma jornada que começa com você."
        />
        <ol className="mt-8 grid list-none gap-6 p-0 md:grid-cols-2 lg:grid-cols-4">
          {etapasProjeto.map((etapa, index) => (
            <li key={etapa.titulo} className="rounded-2xl border border-line p-6">
              <span className="mb-5 inline-flex size-10 items-center justify-center rounded-full bg-brand/10 font-bold text-brand" aria-hidden="true">
                {index + 1}
              </span>
              <h3 className="mb-3 text-lg font-bold text-ink">{etapa.titulo}</h3>
              <p className="mb-0 text-sm leading-relaxed text-muted">{etapa.descricao}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 md:grid-cols-2 md:pb-24" aria-labelledby="comunidade-titulo">
        <img
          src={imgConhecaArvore}
          alt="Ilustração da árvore digital que representa a evolução do participante"
          loading="lazy"
          className="mx-auto w-full max-w-xs object-contain"
        />
        <div>
          <TituloSecao
            id="comunidade-titulo"
            etiqueta="Crescer juntos"
            titulo="Sua árvore faz parte de uma floresta."
            descricao="A árvore digital representa a evolução individual. A floresta reúne o progresso da comunidade e incentiva a colaboração contínua. No projeto, dinheiro não compra EcoPoints nem vantagem no ranking."
          />
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link to="/solucao" className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-brand px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-brand-dark">
              Explorar a solução
            </Link>
            <Link to="/missoes" className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-line px-6 py-3 text-sm font-semibold text-ink no-underline transition-colors hover:bg-slate-50">
              Conhecer as missões
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
