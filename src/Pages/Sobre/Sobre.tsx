
const steps = [
    {
        number: '01',
        title: 'Realize missões sustentáveis',
        description:
            'Participe de missões relacionadas a hábitos sustentáveis, saúde e movimento, mobilidade, educação e conexão com a natureza.',
    },
    {
        number: '02',
        title: 'Comprove a ação',
        description:
            'Cada missão possui uma validação adequada, que pode usar vídeo, foto, QR Code, geolocalização e tempo de permanência.',
    },
    {
        number: '03',
        title: 'Acumule pontos',
        description:
            'Após a validação, a missão gera pontos. Quizzes e desafios educacionais também contribuem para sua evolução.',
    },
    {
        number: '04',
        title: 'Transforme pontos em benefícios',
        description:
            'Use seus pontos em benefícios previstos pela plataforma, como créditos de transporte público e doações para ONGs parceiras.',
    },
    {
        number: '05',
        title: 'Acompanhe sua evolução',
        description:
            'Veja seu progresso pela Árvore Emocional, pela Floresta Coletiva, pelos broches, pelo ranking e pelo histórico de participação.',
    },
];

const impactAreas = [
    {
        title: 'Sustentabilidade no cotidiano',
        description:
            'As missões aproximam a sustentabilidade da rotina, incentivando transporte público, caminhada, bicicleta, reciclagem, itens reutilizáveis e participação em ações ambientais.',
    },
    {
        title: 'Mobilidade sustentável',
        description:
            'Os pontos podem subsidiar total ou parcialmente o transporte público por meio de créditos ou vouchers. O modelo pode evoluir para integrações com operadores e sistemas de bilhetagem.',
    },
    {
        title: 'Impacto social',
        description:
            'Os pontos também podem ser convertidos em doações para ONGs parceiras, com uma área de transparência para mostrar organizações, projetos, valores e comprovantes.',
    },
];

const ecosystemFeatures = [
    {
        title: 'Árvore Emocional',
        description:
            'Representa a evolução sustentável de cada usuário. Com consistência, ela cresce, floresce e evolui; ao final de cada ciclo mensal há um reinício simbólico, enquanto o histórico permanece no Jardim Pessoal.',
    },
    {
        title: 'Floresta Coletiva',
        description:
            'Representa o progresso da comunidade. As ações individuais fazem a floresta virtual crescer e reforçam a ideia de que pequenas atitudes formam um impacto coletivo maior.',
    },
    {
        title: 'Broches e conquistas',
        description:
            'Reconhecem participação e consistência. Podem ser conquistados por missões concluídas, desempenho em categorias e conquistas especiais ao longo da jornada.',
    },
];

const values: [string, string][] = [
    ['Sustentabilidade prática', 'Incentivar atitudes que possam fazer parte da rotina.'],
    ['Transparência', 'Mostrar de forma clara como pontos, benefícios e doações funcionam.'],
    ['Segurança', 'Proteger a integridade das missões e dos dados dos usuários.'],
    ['Acessibilidade', 'Permitir que diferentes perfis participem e evoluam na plataforma.'],
    ['Engajamento', 'Usar gamificação para estimular consistência e participação.'],
    ['Impacto coletivo', 'Conectar ações individuais a benefícios para a comunidade e o meio ambiente.'],
];

export default function Sobre() {
    return (
        <>
            <main className="w-full overflow-hidden bg-white">
                <section className="mx-auto grid w-full max-w-240 gap-2 px-6 pt-18 pb-4">
                    <div>
                        <p className="mb-2 text-xs font-extrabold tracking-[0.08em] text-brand uppercase">Nossa proposta</p>
                        <h2 className="mt-2 mb-3 max-w-168 text-3xl font-bold leading-tight text-ink">Transformando ações do dia a dia em progresso mensurável.</h2>
                    </div>
                    <p className="mt-2 max-w-192 text-sm leading-relaxed text-muted [text-align:justify]">
                        O EcoMovement incentiva ações sustentáveis por meio de missões, desafios e quizzes.
                        Atividades realizadas no mundo real se transformam em pontos, progresso e benefícios
                        para o usuário e para a comunidade, de forma simples, motivadora e mensurável.
                    </p>
                </section>

                <section className="mx-auto grid w-full max-w-240 gap-2 px-6 pt-14">
                    <div className="max-w-168">
                        <p className="mb-2 text-xs font-extrabold tracking-[0.08em] text-brand uppercase">Nosso propósito</p>
                        <h2 className="mt-2 text-2xl font-bold leading-tight text-ink">Escolhas melhores precisam caber na vida real.</h2>
                    </div>
                    <p className="mt-2 max-w-192 text-sm leading-relaxed text-muted [text-align:justify]">
                        Tornar escolhas sustentáveis mais acessíveis, frequentes e recompensadoras, incentivando
                        mudanças positivas de comportamento por meio de tecnologia, gamificação e benefícios que
                        tenham valor real para o usuário.
                    </p>
                </section>

                <section className="mx-auto w-full max-w-240 px-6 pt-18">
                    <div className="max-w-168">
                        <p className="mb-2 text-xs font-extrabold tracking-[0.08em] text-brand uppercase">Como funciona</p>
                        <h2 className="mt-2 text-2xl font-bold leading-tight text-ink">Uma jornada clara do primeiro desafio ao impacto.</h2>
                    </div>
                    <div className="mt-6">
                        {steps.map((step) => (
                            <article className="border-y border-line py-5 [&:not(:first-child)]:border-t-0" key={step.number}>
                                <span className="mb-1 block text-xs font-extrabold text-brand">{step.number}</span>
                                <h3 className="mb-1.5 text-xl font-bold leading-tight text-ink">{step.title}</h3>
                                <p className="m-0 max-w-208 text-sm leading-relaxed text-muted [text-align:justify]">{step.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="mx-auto w-full max-w-240 px-6 pt-18">
                    <div className="max-w-168">
                        <p className="mb-2 text-xs font-extrabold tracking-[0.08em] text-brand uppercase">Impacto na prática</p>
                        <h2 className="mt-2 text-2xl font-bold leading-tight text-ink">Quando a plataforma evolui, a comunidade também evolui.</h2>
                    </div>
                    <div className="mt-6">
                        {impactAreas.map((area) => (
                            <article className="border-y border-line py-5 [&:not(:first-child)]:border-t-0" key={area.title}>
                                <h3 className="mb-1.5 text-xl font-bold leading-tight text-ink">{area.title}</h3>
                                <p className="m-0 max-w-208 text-sm leading-relaxed text-muted [text-align:justify]">{area.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="mx-auto w-full max-w-240 px-6 pt-18">
                    <div className="max-w-168">
                        <p className="mb-2 text-xs font-extrabold tracking-[0.08em] text-brand uppercase">O ecossistema</p>
                        <h2 className="mt-2 text-2xl font-bold leading-tight text-ink">Seu esforço ganha forma, memória e companhia.</h2>
                    </div>
                    <div className="mt-6">
                        {ecosystemFeatures.map((feature) => (
                            <article className="border-y border-line py-5 [&:not(:first-child)]:border-t-0" key={feature.title}>
                                <h3 className="mb-1.5 text-xl font-bold leading-tight text-ink">{feature.title}</h3>
                                <p className="m-0 max-w-208 text-sm leading-relaxed text-muted [text-align:justify]">{feature.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="mx-auto mt-18 w-full max-w-240 rounded-2xl bg-white px-6 py-8">
                    <div className="max-w-232">
                        <p className="mb-2 text-xs font-extrabold tracking-[0.08em] text-brand uppercase">Segurança e validação</p>
                        <h2 className="mt-2 max-w-168 text-2xl font-bold leading-tight text-ink">Integridade para que cada ponto represente uma ação real.</h2>
                        <p className="mb-0 max-w-208 text-sm leading-relaxed text-muted [text-align:justify]">
                            O EcoMovement usa diferentes formas de validação conforme a atividade: câmera dentro
                            do aplicativo, geolocalização, horário, tempo mínimo, QR Codes em locais parceiros e
                            análise de fotos ou vídeos por inteligência artificial.
                        </p>
                        <p className="mb-0 max-w-208 text-sm leading-relaxed text-muted [text-align:justify]">
                            As permissões são solicitadas conforme a necessidade de cada funcionalidade. O usuário
                            pode gerenciar acessos à câmera, ao microfone, à localização e à galeria.
                        </p>
                    </div>
                </section>

                <section className="mx-auto grid w-full max-w-240 gap-10 px-6 pt-18">
                    <div>
                        <p className="mb-2 text-xs font-extrabold tracking-[0.08em] text-brand uppercase">Missão</p>
                        <h2 className="mt-2 max-w-100 text-2xl font-bold leading-tight text-ink">Unir tecnologia, gamificação, mobilidade e impacto social.</h2>
                        <p className="max-w-120 text-sm leading-relaxed text-muted [text-align:justify]">Incentivar práticas sustentáveis por meio de uma experiência digital acessível e motivadora.</p>
                    </div>
                    <div className="border-t border-line pt-8">
                        <p className="mb-2 text-xs font-extrabold tracking-[0.08em] text-brand uppercase">Visão</p>
                        <h2 className="mt-2 max-w-100 text-2xl font-bold leading-tight text-ink">Ser referência em gamificação sustentável.</h2>
                        <p className="max-w-120 text-sm leading-relaxed text-muted [text-align:justify]">Criar uma comunidade em que ações positivas gerem benefícios individuais e impacto coletivo.</p>
                    </div>
                </section>

                <section className="mx-auto w-full max-w-240 px-6 pt-18 pb-20">
                    <div className="max-w-168">
                        <p className="mb-2 text-xs font-extrabold tracking-[0.08em] text-brand uppercase">Valores</p>
                        <h2 className="mt-2 text-2xl font-bold leading-tight text-ink">O que orienta cada escolha do projeto.</h2>
                    </div>
                    <div className="mt-6">
                        {values.map(([title, description]) => (
                            <article className="border-y border-line py-5 [&:not(:first-child)]:border-t-0" key={title}>
                                <h3 className="mb-1.5 text-xl font-bold leading-tight text-brand">{title}</h3>
                                <p className="m-0 text-sm leading-relaxed text-muted [text-align:justify]">{description}</p>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
