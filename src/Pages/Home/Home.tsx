import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';

import imagemInicio from '../../assets/img/imagem-inicio.png';

export default function Home() {
  return (
    <main>
      <section className="bg-brand px-6 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-white/80">
              EcoMovement
            </span>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Menos carbono e mais movimento.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
              Transforme pequenas atitudes sustentáveis em grandes mudanças.
              Participe de missões, acumule EcoPoints e faça parte desse
              movimento.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/missoes">
                <Button className="w-full sm:w-auto">
                  Conheça as missões
                </Button>
              </Link>

              <Link
                to="/sobre"
                className="inline-flex w-full items-center justify-center rounded-2xl border-2 border-white px-8 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/10 sm:w-auto md:text-base"
              >
                Saiba mais
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={imagemInicio}
              alt="Ilustração do EcoMovement"
              className="w-full max-w-md object-contain md:max-w-lg"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand">
              Como funciona
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Pequenas ações, grandes mudanças
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              O EcoMovement incentiva hábitos sustentáveis através de
              desafios e participação da comunidade.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-gray-200 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl font-bold">
                Participe
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Escolha missões sustentáveis e coloque boas atitudes em
                prática no seu dia a dia.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl font-bold">
                Acumule EcoPoints
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Registre suas ações e acompanhe sua evolução através dos
                pontos conquistados.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl font-bold">
                Faça a diferença
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Contribua para uma comunidade mais consciente e para um
                futuro mais sustentável.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}