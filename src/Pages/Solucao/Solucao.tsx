import cell1 from '../../assets/img/cell-1.png';
import cell2 from '../../assets/img/cell-2.png';
import cell3 from '../../assets/img/cell-3.png';
import cell4 from '../../assets/img/cell-4.png';
import cell5 from '../../assets/img/cell-5.png';
import cell6 from '../../assets/img/cell-6.png';
import cell7 from '../../assets/img/cell-7.png';
import cell8 from '../../assets/img/cell-8.png';
import cell9 from '../../assets/img/cell-9.png';
import cell10 from '../../assets/img/cell-10.png';
import cell11 from '../../assets/img/cell-11.png';
import imgArvore1 from '../../assets/img/img-arvore1.png';
import imgArvore2 from '../../assets/img/img-arvore2.png';
import imgArvore3 from '../../assets/img/img-arvore3.png';
import imgArvore4 from '../../assets/img/img-arvore4.png';
import imgArvore5 from '../../assets/img/img-arvore5.png';
import imgFlorestaDigital from '../../assets/img/img-floresta-digital.png';
import img93 from '../../assets/img/9 3.png';

const telasDesenvolvidas = [
  { src: cell1, title: 'Missões e pontos' },
  { src: cell2, title: 'Câmera da missão' },
  { src: cell3, title: 'Envio de evidência' },
  { src: cell4, title: 'Validação aprovada' },
  { src: cell5, title: 'Missões concluídas' },
  { src: cell6, title: 'Limite de tempo' },
  { src: cell7, title: 'Detalhes da missão' },
  { src: cell8, title: 'Feed da comunidade' },
  { src: cell9, title: 'Perfil EcoMovement' },
  { src: cell10, title: 'Formulário' },
  { src: cell11, title: 'Perfil do usuário' },
  { src: imgArvore1, title: 'Árvore 1' },
  { src: imgArvore2, title: 'Árvore 2' },
  { src: imgArvore3, title: 'Árvore 3' },
  { src: imgArvore4, title: 'Árvore 4' },
  { src: imgArvore5, title: 'Árvore 5' },
  { src: imgFlorestaDigital, title: 'Floresta digital' },
  { src: img93, title: 'Ranking' },
];

export default function Solucao() {
  return (
    <>
      <main className="w-full bg-white">
        <section className="mx-auto w-full max-w-288 px-6 pt-18 pb-16 max-md:pt-14" aria-labelledby="solucao-intro-title">
          <div className="w-full">
            <p className="mb-2 text-xs font-extrabold tracking-[0.08em] text-brand uppercase">Prototipagem no Figma</p>
            <h1 id="solucao-intro-title" className="mb-3 max-w-200 text-3xl font-bold leading-tight text-ink">Uma experiência sustentável pensada para acontecer na prática.</h1>
            <div className="grid grid-cols-2 gap-x-12 max-md:grid-cols-1 max-md:gap-y-4">
              <p className="m-0 text-sm leading-relaxed text-muted [text-align:justify]">
                A visualização das telas mostra como o EcoMovement transforma a identidade visual do
                projeto em uma experiência simples, responsiva e conectada aos fluxos de missões,
                validação, pontos e comunidade.
              </p>
              <p className="m-0 text-sm leading-relaxed text-muted [text-align:justify]">
                O protótipo estabelece a identidade visual, a disposição dos elementos, o design
                responsivo e a experiência intuitiva. A implementação transforma essas telas em um
                sistema capaz de orientar missões, validar evidências e acompanhar a evolução de cada
                usuário.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-288 px-6 pb-24" aria-labelledby="telas-title">
          <div className="mb-10 max-w-192">
            <p className="mb-2 text-xs font-extrabold tracking-[0.08em] text-brand uppercase">Telas desenvolvidas</p>
            <h2 id="telas-title" className="mb-3 text-3xl font-bold leading-tight text-ink">Conheça a interface do EcoMovement.</h2>
            <p className="mb-12 max-w-200 text-sm leading-relaxed text-muted [text-align:justify]">
              Uma seleção das telas que representam os principais fluxos da plataforma, organizadas
              para facilitar a leitura da jornada do usuário.
            </p>
          </div>

          <div className="grid grid-cols-4 items-start gap-x-6 gap-y-8 max-[900px]:grid-cols-3 max-md:grid-cols-2 max-md:gap-x-4 max-md:gap-y-7">
            {telasDesenvolvidas.map((tela, index) => (
              <figure className="m-0 text-center" key={tela.title}>
                <div className="flex min-h-75 items-end justify-center max-md:min-h-55">
                  <img className="block w-full max-w-47.5 transition hover:-translate-y-1.5 [filter:drop-shadow(0_10px_16px_rgb(15_23_42_/_0.12))]" src={tela.src} alt={`Tela ${index + 1}: ${tela.title}`} />
                </div>
                <figcaption className="mt-3.5 text-xs font-semibold text-muted">{tela.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

    </>
  );
} 