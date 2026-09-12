import { useParams } from 'react-router-dom';

import guilhermeImg from '../../assets/img/img-guilherme.png';
import lucasImg from '../../assets/img/img-lucas.png';
import jaimeImg from '../../assets/img/img-jaime.png';
import fabioImg from '../../assets/img/img-fabio.png';
import matheusImg from '../../assets/img/img-matheus.png';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Guilherme Zanfolim Nunes Farias',
    rm: 'RM 570983',
    photo: guilhermeImg,
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    name: 'Lucas Monteiro Dias da Costa',
    rm: 'RM 571388',
    photo: lucasImg,
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    name: 'Jaime ringel',
    rm: 'RM 562044',
    photo: jaimeImg,
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    name: 'Fabio Cezare Almeida',
    rm: 'RM 572642',
    photo: fabioImg,
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    name: 'Matheus Magalhães Romão de Moraes',
    rm: 'RM 573371',
    photo: matheusImg,
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
];
export default function Integrantes() {
  const { memberId } = useParams<{ memberId?: string }>();

  return (
    <>
      <main className="mx-auto max-w-300 px-5 pt-18 pb-20">
        <section className="mx-auto mb-31 max-w-225 text-left">
          <p className="mb-2 text-xs font-extrabold tracking-[0.08em] text-brand uppercase">Nossa equipe</p>
          <h2 className="mt-2 mb-3 text-3xl font-bold leading-tight text-ink">Quem somos</h2>
          <p className="text-sm leading-relaxed text-muted [text-align:justify]">
            A EcoMovement é um projeto criado por um grupo de desenvolvedores com o objetivo de incentivar hábitos
            sustentáveis por meio da tecnologia. Acreditamos que pequenas ações do dia a dia podem gerar grandes
            impactos, conectando comportamento consciente a benefícios reais de forma simples e acessível.
          </p>
        </section>

        <div className="mx-auto flex max-w-225 flex-wrap justify-center gap-x-8 gap-y-19">
          {teamMembers.map((member, index) => (
            <div
              key={member.rm}
              className={`relative w-full max-w-70 rounded-2xl border bg-white px-5 pt-18 pb-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${memberId === String(index + 1) ? 'border-brand' : 'border-line'}`}
            >
              <div className="absolute -top-11 left-1/2 size-22.5 -translate-x-1/2 overflow-hidden rounded-2xl">
                <img className="size-full object-cover" src={member.photo} alt={member.name} />
              </div>
              <h3 className="mb-3 flex h-11 items-center justify-center text-sm font-semibold text-ink">{member.name}</h3>
              
              <div className="mb-3 flex justify-center gap-3">
                <a className="text-[1.4rem] text-sky-500 transition-opacity hover:opacity-80" href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a className="text-[1.4rem] text-sky-500 transition-opacity hover:opacity-80" href={member.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
              </div>

              <span className="text-xs font-medium text-muted">{member.rm}</span>
            </div>
          ))}
        </div>
      </main>

    </>
  );
}
