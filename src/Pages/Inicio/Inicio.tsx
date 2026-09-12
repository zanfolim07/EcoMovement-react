import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';

import imagemInicio from '../../assets/img/imagem-inicio.png';
import imgOqueSomos from '../../assets/img/img-oque-somos.png';
import imgConhecaArvore from '../../assets/img/img-conheca-arvore.png';

// Ícones dos cards (Ajuste os caminhos/nomes dos arquivos se necessário)
import iconRobo from '../../assets/icons/icon-robo.png';
import iconMoedas from '../../assets/icons/icon-moeda.png';
import iconChip from '../../assets/icons/icon-sistema.png';

import iconAlvo from '../../assets/icons/icon alvo.png';
import iconCoroaLendario from '../../assets/icons/icon coroa lendario.png';
import iconMedalhaArvore from '../../assets/icons/icon medalha arvore.png';
import iconMedalhaBike from '../../assets/icons/icon medalha bike.png';
import iconMedalhaCalendario30 from '../../assets/icons/icon medalha calendario 30.png';
import iconMedalhaCalendario from '../../assets/icons/icon medalha calendario.png';
import iconMedalhaCoracao from '../../assets/icons/icon medalha coracao.png';
import iconMedalhaLivro from '../../assets/icons/icon medalha livro.png';
import iconMedalhaPlant from '../../assets/icons/icon medalha plant.png';
import iconRelogio from '../../assets/icons/icon relogio.png';
import iconTrofeuBronze from '../../assets/icons/icon trofeu bronze.png';
import iconTrofeuOuro from '../../assets/icons/icon trofeu ouro.png';
import iconTrofeuPrata from '../../assets/icons/icon trofeu prata.png';

const badgeIcons: string[] = [
  iconAlvo,
  iconCoroaLendario,
  iconMedalhaArvore,
  iconMedalhaBike,
  iconMedalhaCalendario30,
  iconMedalhaCalendario,
  iconMedalhaCoracao,
  iconMedalhaLivro,
  iconMedalhaPlant,
  iconRelogio,
  iconTrofeuBronze,
  iconTrofeuOuro,
  iconTrofeuPrata,
];

interface HeroStat {
  title: string;
  description: string;
}

const heroStats: HeroStat[] = [
  {
    title: 'Ganhe pontos',
    description: 'Complete missões e transforme suas ações em pontos dentro da plataforma.',
  },
  {
    title: 'Gere impacto',
    description: 'Seus pontos contribuem para iniciativas que fazem a diferença no mundo real.',
  },
  {
    title: 'Receba recompensas',
    description: 'Troque seus pontos por benefícios e vantagens exclusivas.',
  },
];

interface IntroFeature {
  title: string;
  description: string;
}

const introFeatures: IntroFeature[] = [
  {
    title: 'EcoScore (0 a 100)',
    description:
      'A nota da sua submissão específica, calculada por pesos claros (Impacto ambiental 40%, Intensidade 20%, Evidência 20%, Dificuldade 10%, Consistência 10%).',
  },
  {
    title: 'EcoPoints',
    description:
      'Seus pontos acumulados (conversão 1:1 por submissão). Cada missão concluída ainda garante um bônus de +10% sobre o total de pontos acumulados.',
  },
  {
    title: 'Recompensas',
    description:
      'Cobertura integral da conta de energia elétrica para o usuário com maior pontuação ao final de 30 dias de competição! (Com apuração transparente e regras claras de desempate).',
  },
];

interface TreeCard {
  title: string;
  description: string;
  icon: string;
  highlight: boolean;
}

const treeCards: TreeCard[] = [
  {
    title: 'IA + Motor de Regras',
    description: 'A inteligência artificial apenas fornece sinais (fotos, QR codes, OCR de contas), mas quem decide a validação é o EcoGuard cruzando dados de GPS, tempo e histórico.',
    icon: iconRobo,
    highlight: true,
  },
  {
    title: 'Regra de Ouro (Anti Pay-to-Win)',
    description: 'Dinheiro não compra vantagem. Nenhum plano pago vende EcoPoints ou posições no ranking. A competição é 100% por mérito e impacto real.',
    icon: iconMoedas,
    highlight: false,
  },
  {
    title: 'As 6 Camadas de Proteção',
    description: 'Verificação de evidência, temporal, geográfica, visual, comportamental e cruzamento de dados.',
    icon: iconChip,
    highlight: false,
  },
];

export default function Inicio(): React.JSX.Element {
  const [selectedCard, setSelectedCard] = useState(treeCards[0].title);

  return (
    <>
      <main className="w-full overflow-x-hidden bg-white">
        <section className="flex w-full items-center overflow-hidden bg-[linear-gradient(90deg,#80D7DE_0%,#4CAEDD_13%,#1885DB_25%,#1B89DB_50%,#1372CE_100%)] px-6 pt-12 pb-4 text-white md:px-12 md:pt-18">
          <div className="mx-auto flex w-full max-w-288 flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
            <div className="max-w-136">
              <h1 className="m-0 text-[1.4rem] font-normal leading-[1.35] md:text-3xl">
                <strong>EcoMovement</strong> &amp; SoulUp
                <br />
                Sustentabilidade Gamificada.
              </h1>

              <p className="mt-3.5 text-sm leading-relaxed text-white/90 [text-align:justify]">
                Transforme ações sustentáveis em prêmios. Suas atitudes viram EcoScores auditados pelo EcoGuard
                para disputar a cobertura da conta de energia na SoulUp.
              </p>
            </div>

            <div className="flex w-full max-w-95 items-end justify-center md:max-w-110 lg:max-w-125">
              <img
                src={imagemInicio}
                alt="Banner EcoMovement"
                className="block max-h-105 w-full object-contain"
              />
            </div>
          </div>
        </section>

        <div className="relative z-5 -mt-10 flex w-full justify-center px-5">
          <div className="flex w-full max-w-240 flex-col overflow-hidden rounded-2xl bg-white shadow-[0_12px_30px_rgb(15_23_42_/_0.15)] md:flex-row">
            {heroStats.map((stat) => (
              <div key={stat.title} className="flex-1 p-5 [text-align:justify]">
                <h3 className="mb-1 text-xs font-bold text-brand">{stat.title}</h3>
                <p className="m-0 text-xs leading-relaxed text-muted">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="mx-auto flex w-full max-w-288 flex-col items-center gap-10 px-6 pt-20 pb-16 text-center md:flex-row md:justify-between md:px-12 md:py-24 md:text-left">
          <div className="max-w-128">
            <h2 className="m-0 text-2xl font-extrabold text-ink">O que é o EcoMovement &amp; SoulUp?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted [text-align:justify]">
              Explore categorias de missões e transforme suas ações em pontos.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted [text-align:justify]">
              Como provar que a sua reciclagem ou consumo consciente realmente aconteceu, sem espaço para fraudes?
              Na SoulUp, suas ações viram EcoScores que fazem sua Árvore Digital crescer, fortalecem a Floresta Coletiva
              e ainda garantem badges exclusivos.
            </p>
            <Link className="mt-5 inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white no-underline transition hover:-translate-y-px hover:bg-brand-dark" to="/sobre">
              Ver mais
            </Link>
          </div>

          <div className="flex w-full max-w-75 shrink-0 items-center justify-center lg:max-w-95">
            <img
              src={imgOqueSomos}
              alt="O que é o EcoMovement"
            />
          </div>
        </section>

        <div id="feature-box" className="relative mx-auto mb-20 flex max-w-288 flex-col rounded-2xl bg-brand px-6 pt-10 pb-12 md:mb-24 md:flex-row md:px-12 md:py-14">
          {introFeatures.map((feature) => (
            <div key={feature.title} className="flex-1 border-b border-white/25 py-6 last:border-0 md:border-r md:border-b-0 md:px-6 md:first:pl-0 md:last:border-0 md:last:pr-0">
              <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
              <p className="m-0 text-sm leading-relaxed text-white/85 [text-align:justify]">{feature.description}</p>
            </div>
          ))}

          <a href="#proxima-secao" className="absolute right-3 bottom-3 flex size-12.5 items-center justify-center rounded-full bg-white text-brand no-underline transition hover:scale-108" aria-label="Avançar">
            <svg className="size-5.5 fill-none stroke-current stroke-[3.5] [stroke-linecap:round] [stroke-linejoin:round]" viewBox="0 0 24 24">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="10 7 17 7 17 14"></polyline>
            </svg>
          </a>
        </div>

        <section className="mx-auto flex w-full max-w-288 flex-col items-center gap-10 px-6 pt-20 pb-16 text-center md:flex-row-reverse md:justify-between md:px-12 md:py-24 md:text-left">
          <div className="flex w-full max-w-75 shrink-0 items-center justify-center lg:max-w-95">
            <img
              src={imgConhecaArvore}
              alt="Conheça a sua árvore digital"
            />
          </div>

          <div className="max-w-128">
            <h2 className="m-0 text-2xl font-extrabold text-ink">Conheça a Sua Árvore e Floresta Digital</h2>
            <ul className="mt-3.5 list-none p-0 text-sm leading-relaxed text-muted [text-align:justify]">
              <li>
                A Árvore Digital: Começa como um galho seco e evolui conforme você completa missões e ganha badges.
                Nos níveis altos, ela gera frutos que você pode compartilhar com amigos.
              </li>
              <li>
                A Floresta Digital: A união das árvores da sua comunidade. O engajamento coletivo
                faz a floresta crescer, garantindo prêmios para o Top 10.
              </li>
            </ul>
          </div>
        </section>

        <div className="mx-auto flex w-full max-w-288 flex-col gap-6 px-6 pb-20 md:flex-row md:px-12 md:pb-24">
          {treeCards.map((card) => (
            <Card 
              key={card.title} 
              title={card.title} 
              description={card.description} 
              icon={card.icon}
              highlight={card.highlight}
              selected={selectedCard === card.title}
              onSelect={() => setSelectedCard(card.title)}
            />
          ))}
        </div>

        <section className="mx-auto flex w-full max-w-288 flex-col items-center justify-between gap-10 px-6 pt-8 pb-24 text-center md:flex-row md:px-12 md:pt-16 md:pb-28 md:text-left">
          <div className="max-w-128 [text-align:justify]">
            <h2 className="m-0 text-2xl font-extrabold text-ink">Conquistas &amp; Badges</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Colecione insígnias exclusivas que refletem sua jornada sustentável, dispostas em uma faixa estilo escoteiro que destaca sua identidade
              no ecossistema. Quanto mais raro o desbloqueio entre os usuários, mais chamativo e valioso é o efeito visual do seu badge.
            </p>
          </div>

          <div className="grid max-w-80 grid-cols-4 gap-4 md:max-w-120 md:grid-cols-5 lg:max-w-136">
            {badgeIcons.map((iconSrc, index) => (
              <img
                key={index}
                src={iconSrc}
                alt={`Badge ${index + 1}`}
                className="size-14 object-contain"
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}