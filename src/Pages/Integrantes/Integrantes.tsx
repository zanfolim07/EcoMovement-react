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