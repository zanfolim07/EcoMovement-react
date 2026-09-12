
import cell1 from '../../assets/img/cell-1.png';
import cell2 from '../../assets/img/cell-2.png';
import cell3 from '../../assets/img/cell-3.png';
import cell4 from '../../assets/img/cell-4.png';
import cell5 from '../../assets/img/cell-5.png';
import cell6 from '../../assets/img/cell-6.png';

const passos = [
  {
    image: cell1,
    title: 'Acesse a aba Missões na seção EcoMovement.',
    description:
      'Acesse a área de missões gerais do app e selecione EcoMovement para encontrar as missões de sustentabilidade disponíveis.',
  },
  {
    image: cell2,
    title: 'Leia as orientações da missão.',
    description:
      'Confira as instruções, o formato da validação e os critérios necessários antes de iniciar a atividade.',
  },
  {
    image: cell3,
    title: 'Envie a comprovação da evidência.',
    description:
      'Realize a atividade e envie a foto ou o vídeo solicitado para que a missão possa ser analisada.',
  },
  {
    image: cell4,
    title: 'Acompanhe o progresso da missão.',
    description:
      'Após o envio, acompanhe o andamento da validação e as informações sobre a pontuação da missão.',
  },
  {
    image: cell5,
    title: 'Confira as missões concluídas.',
    description:
      'Acesse o histórico para verificar as missões aprovadas ou rejeitadas e acompanhar sua evolução.',
  },
  {
    image: cell6,
    title: 'Respeite o tempo limite da atividade.',
    description:
      'Se a missão tiver tempo máximo, conclua e envie a evidência dentro do prazo indicado na tela.',
  },
];

export default function Missoes() {
  return (
    <>
      <main className="w-full bg-white">
        <section className="mx-auto w-full max-w-240 px-6 pt-18 pb-16 max-md:pt-14">
          <p className="mb-2 text-xs font-extrabold tracking-[0.08em] text-brand uppercase">Missões EcoMovement</p>
          <h1 className="mb-3 text-3xl font-bold leading-tight text-ink">Transforme ações sustentáveis em progresso.</h1>
          <p className="m-0 max-w-192 text-sm leading-relaxed text-muted [text-align:justify]">
            Acesse a aba Missões, escolha um desafio e envie a comprovação solicitada. Depois da
            validação, você recebe pontos e acompanha sua evolução dentro da plataforma.
          </p>
        </section>

        <section className="mx-auto w-full max-w-240 px-6 pt-12 pb-24" aria-labelledby="passos-title">
          <div className="mb-12 max-w-168">
            <p className="mb-2 text-xs font-extrabold tracking-[0.08em] text-brand uppercase">Como participar</p>
            <h2 id="passos-title" className="mb-3 text-3xl font-bold leading-tight text-ink">Realize uma missão em poucos passos.</h2>
          </div>

          <div className="flex flex-col gap-14">
            {passos.map((passo, index) => (
              <article className={`grid grid-cols-[210px_minmax(0,1fr)] items-center gap-10 max-md:flex max-md:flex-col max-md:items-stretch max-md:gap-6 ${index % 2 === 1 ? 'grid-cols-[minmax(0,1fr)_210px]' : ''}`} key={passo.title}>
                <div className={`flex justify-center ${index % 2 === 1 ? 'col-start-2 row-start-1 max-md:col-auto max-md:row-auto' : ''}`}>
                  <img className="block w-full max-w-47.5 transition hover:-translate-y-1.5 [filter:drop-shadow(0_10px_18px_rgb(15_23_42_/_0.12))]" src={passo.image} alt={`Tela da missão: ${passo.title}`} />
                </div>
                <div className={`max-w-136 ${index % 2 === 1 ? 'col-start-1 row-start-1 max-md:col-auto max-md:row-auto' : ''}`}>
                  <span className="mb-2 block text-xs font-extrabold text-brand">0{index + 1}</span>
                  <h3 className="mb-3 text-xl font-bold leading-tight text-ink">{passo.title}</h3>
                  <p className="m-0 text-sm leading-relaxed text-muted [text-align:justify]">{passo.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

    </>
  );
}
