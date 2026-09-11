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
    <main className="min-h-screen px-6 py-16">
      <section className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            EcoMovement
          </span>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Perguntas Frequentes
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
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
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => alternarPergunta(index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-semibold transition hover:bg-gray-50"
                  aria-expanded={aberta}
                >
                  <span>{item.pergunta}</span>

                  <span className="text-xl text-brand">
                    {aberta ? '−' : '+'}
                  </span>
                </button>

                {aberta && (
                  <div className="border-t border-gray-100 px-6 py-5 text-gray-600">
                    <p className="leading-relaxed">
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