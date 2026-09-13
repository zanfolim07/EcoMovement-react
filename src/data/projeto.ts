import iconRobo from '../assets/icons/icon-robo.png';
import iconMoeda from '../assets/icons/icon-moeda.png';
import iconSistema from '../assets/icons/icon-sistema.png';

interface PilarProjeto {
  titulo: string;
  descricao: string;
  icone: string;
}

interface EtapaProjeto {
  titulo: string;
  descricao: string;
}

export const pilaresProjeto: readonly PilarProjeto[] = [
  {
    titulo: 'Ações com evidências',
    descricao:
      'Cada missão informa qual ação realizar e como registrá-la. Fotos, vídeos ou outros comprovantes são solicitados conforme a atividade.',
    icone: iconRobo,
  },
  {
    titulo: 'Progresso com propósito',
    descricao:
      'Missões validadas contribuem para EcoPoints, conquistas e evolução da árvore digital. A participação da comunidade ajuda a floresta a crescer.',
    icone: iconMoeda,
  },
  {
    titulo: 'Confiança na participação',
    descricao:
      'O EcoGuard combina sinais da inteligência artificial com regras de tempo, local e histórico. A IA fornece sinais para análise; a decisão depende do conjunto de verificações.',
    icone: iconSistema,
  },
];

export const etapasProjeto: readonly EtapaProjeto[] = [
  {
    titulo: 'Escolha uma missão',
    descricao: 'Explore as atividades disponíveis e leia as orientações antes de começar.',
  },
  {
    titulo: 'Realize e registre a ação',
    descricao: 'Siga as instruções e reúna a evidência exigida para aquela missão.',
  },
  {
    titulo: 'Acompanhe a análise',
    descricao: 'Confira o andamento da validação e o resultado no histórico de missões.',
  },
  {
    titulo: 'Evolua com a comunidade',
    descricao: 'Acompanhe seus pontos, conquistas e a evolução da árvore e da floresta digital.',
  },
];
