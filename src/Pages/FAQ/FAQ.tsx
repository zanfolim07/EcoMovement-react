import { useState } from 'react';

interface Pergunta {
  pergunta: string;
  resposta: string;
}

const perguntas: Pergunta[] = [
  {
    pergunta: 'O que é o EcoMovement?',
    resposta:
      'O EcoMovement é uma plataforma que incentiva ações sustentáveis por meio de missões, permitindo que os usuários acompanhem sua participação e contribuam para um futuro mais sustentável.',
  },
  {
    pergunta: 'Como funcionam as missões?',
    resposta:
      'As missões representam ações sustentáveis que podem ser realizadas no dia a dia. Ao concluir uma missão, o usuário registra sua ação e recebe pontos de acordo com a atividade realizada.',
  },
  {
    pergunta: 'O que são os EcoPoints?',
    resposta:
      'EcoPoints são pontos obtidos pelos usuários ao realizar missões sustentáveis. Eles ajudam a acompanhar o progresso e a participação de cada pessoa na plataforma.',
  },
  {
    pergunta: 'Posso acompanhar minha posição no ranking?',
    resposta:
      'Sim. O EcoMovement possui um ranking que permite acompanhar a pontuação dos participantes e visualizar a posição de cada usuário.',
  },
  {
    pergunta: 'Por que participar do EcoMovement?',
    resposta:
      'Porque pequenas atitudes podem gerar grandes impactos. A proposta do EcoMovement é tornar a sustentabilidade mais acessível, incentivando hábitos positivos e a participação da comunidade.',
  },
];

export default function FAQ() {
  const [perguntaAberta, setPerguntaAberta] = useState<number | null>(null);

  function alternarPergunta(index: number) {
    setPerguntaAberta(
      perguntaAberta === index ? null : index
    );
  }

  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 md:py-20">
      <section className="mx-auto max-w-4xl">
        <div className="mb-10 text-center md:mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            EcoMovement
          </span>

          <h1 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            Perguntas Frequentes
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Encontre respostas para as principais dúvidas sobre o
            EcoMovement.
          </p>
        </div>

        <div className="space-y-4">
          {perguntas.map((item, index) => {
            const aberta = perguntaAberta === index;

            return (
              <div
                key={item.pergunta}
                className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-200 ${
                  aberta
                    ? 'border-brand shadow-md'
                    : 'border-gray-200 hover:shadow-md'
                }`}
              >
                <button
                  type="button"
                  onClick={() => alternarPergunta(index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-gray-50 sm:px-6"
                  aria-expanded={aberta}
                >
                  <span className="text-sm font-semibold sm:text-base">
                    {item.pergunta}
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-xl font-medium text-white">
                    {aberta ? '−' : '+'}
                  </span>
                </button>

                {aberta && (
                  <div className="border-t border-gray-100 px-5 py-5 sm:px-6">
                    <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                      {item.resposta}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}