
const faqSections = [
	{
		title: 'Sobre o EcoMovement',
		questions: [
			{
				question: 'O que é o EcoMovement?',
				answer:
					'O EcoMovement é uma solução de gamificação sustentável desenvolvida para o ecossistema SoulUp. A plataforma transforma ações realizadas no mundo real em missões que geram pontos, progresso e benefícios, incentivando hábitos mais sustentáveis.',
			},
			{
				question: 'Como o EcoMovement funciona?',
				answer:
					'O usuário escolhe uma missão, realiza a atividade e envia a comprovação solicitada. Depois da validação, recebe pontos e avança em sua jornada dentro da plataforma. Esses pontos podem ser utilizados em benefícios previstos pelo sistema, como transporte público e doações para ONGs.',
			},
			{
				question: 'Quais tipos de missões existem?',
				answer:
					'As missões são organizadas em categorias como hábitos sustentáveis, saúde e movimento, mobilidade sustentável, educação e conexão com a natureza.',
			},
		],
	},
	{
		title: 'Missões e validação',
		questions: [
			{
				question: 'Como uma missão é validada?',
				answer:
					'O método depende da atividade. Uma missão pode exigir vídeo, foto, QR Code, geolocalização, registro de horário ou tempo mínimo de permanência. Fotos e vídeos também podem ser analisados por inteligência artificial.',
			},
			{
				question: 'Por que algumas missões utilizam QR Code?',
				answer:
					'O QR Code ajuda a confirmar que o usuário esteve em um local parceiro ou participou de uma atividade específica. Em algumas situações, o sistema pode registrar entrada, saída e tempo de permanência.',
			},
			{
				question: 'Por que o aplicativo pode solicitar minha localização?',
				answer:
					'A localização pode ser necessária para validar missões relacionadas a deslocamento, caminhada, bicicleta, transporte público ou presença em locais parceiros. A permissão é solicitada de acordo com a necessidade da funcionalidade.',
			},
			{
				question: 'O que acontece se uma missão não for validada?',
				answer:
					'A ação não gera a pontuação correspondente enquanto não atender aos critérios de validação definidos para aquela missão.',
			},
		],
	},
	{
		title: 'Pontos e benefícios',
		questions: [
			{
				question: 'Como ganho pontos?',
				answer:
					'Os pontos são obtidos principalmente pela conclusão de missões validadas e pela participação em quizzes e desafios educacionais disponíveis na plataforma.',
			},
			{
				question: 'Quanto vale cada ponto?',
				answer:
					'Nos pontos elegíveis para conversão, a regra atual considera 1 ponto = R$ 0,01. As conversões seguem os limites e as regras definidos para cada plano e benefício.',
			},
			{
				question: 'Posso usar meus pontos no transporte público?',
				answer:
					'Sim. A proposta do EcoMovement permite utilizar pontos para subsidiar total ou parcialmente o transporte público por meio de créditos ou vouchers. A integração direta com sistemas de bilhetagem faz parte da evolução futura da solução.',
			},
			{
				question: 'Posso doar meus pontos?',
				answer: 'Sim. O usuário pode converter pontos em doações para ONGs parceiras diretamente pela plataforma.',
			},
			{
				question: 'Como funcionam as doações para ONGs?',
				answer:
					'Os pontos doados são convertidos em valor financeiro. Pela regra atual, 85% do valor convertido é destinado à ONG e 15% é utilizado pela plataforma como taxa de operação e manutenção. Os repasses são consolidados mensalmente e a plataforma prevê informações de transparência sobre as organizações e os projetos apoiados.',
			},
			{
				question: 'O que são Pontos de Impacto?',
				answer:
					'Quando o usuário ultrapassa o limite mensal de pontos conversíveis do seu plano, os pontos excedentes continuam registrados como Pontos de Impacto, mantendo o reconhecimento da participação e da evolução sustentável dentro da plataforma.',
			},
		],
	},
	{
		title: 'Planos',
		questions: [
			{
				question: 'Quais planos estão disponíveis?',
				answer:
					'O EcoMovement possui três modalidades: Free, Plus e Pro. O Free permite até 2 missões por dia, o Plus até 4 missões por dia e o Pro até 6 missões por dia. Cada plano possui limites e benefícios diferentes relacionados a missões, conversão de pontos, histórico, recursos de impacto e personalização.',
			},
			{
				question: 'Preciso pagar para usar o EcoMovement?',
				answer:
					'Não. O plano Free permite utilizar as principais funcionalidades da plataforma. Os planos Plus e Pro ampliam limites e oferecem recursos adicionais.',
			},
		],
	},
	{
		title: 'Gamificação e comunidade',
		questions: [
			{
				question: 'O que é a Árvore Emocional?',
				answer:
					'É uma representação visual da evolução do usuário. A árvore cresce conforme a pessoa realiza missões e mantém consistência. Ao final de cada ciclo mensal, ocorre um reinício simbólico, enquanto o histórico permanece registrado no Jardim Pessoal.',
			},
			{
				question: 'O que é a Floresta Coletiva?',
				answer:
					'É um espaço virtual que representa o progresso da comunidade. As ações sustentáveis realizadas pelos usuários contribuem para o crescimento coletivo da floresta.',
			},
			{
				question: 'O que são os broches?',
				answer:
					'Os broches são conquistas obtidas por participação, quantidade de missões concluídas, desempenho em categorias e marcos especiais de consistência.',
			},
			{
				question: 'Existe ranking?',
				answer:
					'Sim. A plataforma prevê ranking geral e ranking entre amigos, permitindo acompanhar a evolução e comparar a participação de forma gamificada.',
			},
			{
				question: 'Como funcionam os quizzes?',
				answer:
					'Os quizzes fazem parte da área de educação da plataforma. Eles permitem aprender sobre sustentabilidade, avançar em trilhas e acumular pontos e conquistas. Os limites de participação variam conforme o plano.',
			},
		],
	},
	{
		title: 'Privacidade e segurança',
		questions: [
			{
				question: 'Como o EcoMovement protege a integridade das missões?',
				answer:
					'A plataforma combina diferentes mecanismos de validação, como câmera própria no aplicativo, registro de horário, geolocalização, QR Codes, tempo de permanência e análise de fotos ou vídeos por inteligência artificial.',
			},
			{
				question: 'Posso controlar as permissões do aplicativo?',
				answer:
					'Sim. As configurações de privacidade permitem gerenciar permissões relacionadas a câmera, microfone, localização e galeria, além de opções de visibilidade do perfil, ranking e Floresta Coletiva.',
			},
			{
				question: 'Como posso acompanhar minhas doações?',
				answer:
					'A plataforma prevê histórico de doações, comprovantes, informações das ONGs parceiras, projetos apoiados e indicadores públicos de impacto social.',
			},
		],
	},
];

export default function FAQ() {
	return (
		<>
      <main className="min-h-screen w-full bg-white">
        <header className="mx-auto w-full max-w-240 px-6 pt-18 pb-12 max-md:pt-14 max-md:pb-8">
          <p className="mb-2 text-xs font-extrabold tracking-[0.08em] text-brand uppercase">Central de ajuda</p>
          <h1 className="mt-2 mb-3 text-3xl font-bold leading-tight text-ink">Perguntas frequentes</h1>
          <p className="m-0 max-w-168 text-sm leading-relaxed text-muted [text-align:justify]">
						Encontre respostas sobre missões, pontos, planos, benefícios, comunidade e segurança
						dentro do EcoMovement.
					</p>
				</header>

        <div className="mx-auto w-full max-w-240 px-6">
					{faqSections.map((section) => (
            <section className="border-t border-line py-11 first:border-0" key={section.title}>
              <h2 className="mb-5 text-2xl font-bold leading-tight text-ink">{section.title}</h2>
              <div className="border-t border-line">
								{section.questions.map((item) => (
                  <details className="border-b border-line" key={item.question}>
                    <summary className="relative cursor-pointer list-none py-4 pr-8 text-xl font-semibold text-brand [&::-webkit-details-marker]:hidden after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:text-2xl after:font-normal after:content-['+'] open:after:content-['-'] focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-4">{item.question}</summary>
                    <p className="mt-0 mb-5 max-w-208 text-sm leading-relaxed text-muted [text-align:justify]">{item.answer}</p>
									</details>
								))}
							</div>
						</section>
					))}
				</div>
			</main>

		</>
	);
}
