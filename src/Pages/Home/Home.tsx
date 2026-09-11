import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';

import imagemInicio from '../../assets/img/imagem-inicio.png';

export default function Home() {
  return (
    <main>
      <section className="flex min-h-[70vh] items-center px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-brand">
              EcoMovement
            </span>

            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Menos carbono e mais movimento.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              O EcoMovement transforma ações sustentáveis em movimento,
              incentivando pequenas atitudes que contribuem para um futuro
              mais consciente e sustentável.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/missoes">
                <Button>
                  Conheça as missões
                </Button>
              </Link>

              <Link
                to="/sobre"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-brand px-8 py-3 text-sm font-semibold text-brand transition duration-200 hover:-translate-y-px md:text-base"
              >
                Saiba mais
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={imagemInicio}
              alt="Ilustração do EcoMovement"
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Como funciona
          </span>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Pequenas ações, grandes mudanças
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Participe de missões sustentáveis, registre suas ações e
            acompanhe seu progresso dentro da comunidade EcoMovement.
          </p>
        </div>
      </section>
    </main>
  );
}