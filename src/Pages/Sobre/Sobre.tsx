const steps = [
    {
        number: '01',
        title: 'Realize a missão',
        description:
            'Escolha uma missão a partir da sua ficha técnica: nome, categoria, descrição da ação, impacto ambiental e nível de dificuldade.',
    },
    {
        number: '02',
        title: 'Comprove com a evidência certa',
        description:
            'Cada missão pede o tipo de evidência mais adequado: foto, vídeo, GPS, QR Code ou OCR, conforme a natureza da ação.',
    },
    {
        number: '03',
        title: 'O EcoGuard valida a ação',
        description:
            'A IA fornece sinais (objeto identificado, categoria, confiança, duplicidade), mas quem decide é o motor de regras do EcoGuard, cruzando esses sinais com GPS, horário, frequência e histórico em até 6 camadas de verificação.',
    },
    {
        number: '04',
        title: 'Receba seu EcoScore e acumule EcoPoints',
        description:
            'Cada submissão validada gera um EcoScore de 0 a 100, com pesos para impacto ambiental, intensidade, evidência, dificuldade e consistência. Os EcoPoints são a soma de todos os EcoScores válidos.',
    },
    {
        number: '05',
        title: 'Acompanhe sua evolução',
        description:
            'Veja seu progresso pela Árvore Digital, pela Floresta Digital da sua comunidade, pelos badges conquistados e pelo ranking.',
    },
];

const impactAreas = [
    {
        title: 'Missões que cobrem o essencial',
        description:
            'O catálogo inclui posts e Moments com as hashtags do movimento, engajamento com perfis de ONGs, evolução da árvore digital, adição da árvore a uma floresta de comunidade e distribuição de frutos entre usuários.',
    },
    {
        title: 'Ranking com recompensa real',
        description:
            'O usuário com maior pontuação ao final de 30 dias de competição recebe a cobertura integral da conta de energia elétrica, com um processo de encerramento auditável: congelamento do ranking, cálculo da pontuação final, desempate e confirmação do vencedor.',
    },
    {
        title: 'Floresta Coletiva com prêmio para o Top 10',
        description:
            'Florestas que ficam entre as 10 mais desenvolvidas garantem alta recompensa em pontos e badges exclusivos para os usuários da comunidade.',
    },
];

const ecosystemFeatures = [
    {
        title: 'Árvore Digital',
        description:
            'Começa morta, marrom-acinzentada e sem folhas, e evolui conforme o usuário engaja com conteúdos do movimento, completa missões e acumula badges, até virar uma árvore cheia de folhas, frutos e, nos níveis finais, flores.',
    },
    {
        title: 'Floresta Digital',
        description:
            'É a expansão coletiva do sistema de árvores por comunidade. Cresce pelo mesmo tipo de ação, mas em ritmo mais lento, exigindo que vários usuários engajem ao mesmo tempo, e reúne visivelmente as árvores de todos os participantes.',
    },
    {
        title: 'Badges',
        description:
            'Colecionáveis adquiridos por missões, engajamento e progressão da árvore/floresta, exibidos em uma faixa estilo escoteiro no perfil, com efeitos visuais que ficam mais chamativos quanto mais raro é o badge.',
    },
];

const values: [string, string][] = [
    ['Verificação real', 'Cada ação é comprovada por evidência — foto, vídeo, GPS, QR Code ou OCR — antes de gerar qualquer pontuação.'],
    ['Decisão nunca só da IA', 'A IA fornece sinais, mas quem decide a validade de uma submissão é o motor de regras do EcoGuard, cruzando GPS, horário, frequência e histórico.'],
    ['Sem vantagem comprada', 'Nenhum plano pago pode vender EcoPoints ou vantagem de pontuação, nem hoje, nem em planos pagos futuros.'],
    ['Transparência na apuração', 'O encerramento da competição segue um processo auditável: congelamento do ranking, cálculo da pontuação final, desempate e confirmação do vencedor.'],
    ['Escalabilidade', 'O ranking nunca é somado em tempo real — uma camada de agregado com cache garante performance mesmo com o crescimento da base de usuários.'],
    ['Custo consciente', 'Vídeo não é exigido por padrão; foto, QR Code e OCR cobrem a maior parte das missões, mantendo o sistema mais barato de operar.'],
];

export default function Sobre() {
    return (
        <>
            <main className="w-full overflow-hidden bg-white">
                <section className="mx-auto grid w-full max-w-240 gap-2 px-6 pt-18 pb-4">
                    <div>
                        <p className="mb-2 text-xs font-extrabold tracking-[0.08em] text-brand uppercase">Nossa proposta</p>
                        <h2 className="mt-2 mb-3 max-w-168 text-3xl font-bold leading-tight text-ink">Transformando ações do dia a dia em pontos verificáveis.</h2>
                    </div>
                    <p className="mt-2 max-w-192 text-sm leading-relaxed text-muted [text-align:justify]">
                        O EcoMovement transforma ações sustentáveis do mundo real em elementos verificáveis e
                        pontuáveis dentro da SoulUp — sem abrir brecha para fraude, sem travar com o crescimento
                        da base de usuários e sem custar caro demais para manter.
                    </p>
                </section>

                <section className="mx-auto grid w-full max-w-240 gap-2 px-6 pt-14">
                    <div className="max-w-168">
                        <p className="mb-2 text-xs font-extrabold tracking-[0.08em] text-brand uppercase">Nosso propósito</p>
                        <h2 className="mt-2 text-2xl font-bold leading-tight text-ink">Duas camadas trabalhando juntas.</h2>
                    </div>
                    <p className="mt-2 max-w-192 text-sm leading-relaxed text-muted [text-align:justify]">
                        O EcoMovement é a camada de produto: missões, EcoScore, EcoPoints, ranking, árvore
                        digital, floresta digital e badges — a experiência que o usuário vê dentro da SoulUp.
                        O EcoGuard é a camada de confiança: o motor de regras e antifraude que decide se uma
                        submissão é válida, cruzando o resultado da IA com GPS, tempo, frequência e histórico
                        do usuário.
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
                            Toda submissão passa por até 6 camadas de verificação do EcoGuard — evidência, temporal,
                            geográfica, visual, comportamental e cruzamento de dados. A IA nunca é prova absoluta:
                            ela só fornece sinais, e quem decide é o motor de regras, cruzando-os com GPS, horário,
                            frequência e histórico do usuário.
                        </p>
                        <p className="mb-0 max-w-208 text-sm leading-relaxed text-muted [text-align:justify]">
                            A proteção de dados inclui comunicação segura por HTTPS/TLS, senhas armazenadas com
                            hash e salt, minimização dos dados coletados e separação entre dados pessoais e
                            dados analíticos.
                        </p>
                    </div>
                </section>

                <section className="mx-auto grid w-full max-w-240 gap-10 px-6 pt-18">
                    <div>
                        <p className="mb-2 text-xs font-extrabold tracking-[0.08em] text-brand uppercase">Missão</p>
                        <h2 className="mt-2 max-w-100 text-2xl font-bold leading-tight text-ink">Transformar ações sustentáveis em elementos verificáveis e pontuáveis.</h2>
                        <p className="max-w-120 text-sm leading-relaxed text-muted [text-align:justify]">Sem abrir brecha para fraude, sem travar com o crescimento da base de usuários e sem custar caro demais para manter.</p>
                    </div>
                    <div className="border-t border-line pt-8">
                        <p className="mb-2 text-xs font-extrabold tracking-[0.08em] text-brand uppercase">Visão</p>
                        <h2 className="mt-2 max-w-100 text-2xl font-bold leading-tight text-ink">Ser a camada de confiança da SoulUp.</h2>
                        <p className="max-w-120 text-sm leading-relaxed text-muted [text-align:justify]">Fazer com que cada EcoScore e cada EcoPoint representem, de fato, uma ação sustentável real e verificada.</p>
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