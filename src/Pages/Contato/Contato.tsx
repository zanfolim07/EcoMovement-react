import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';

interface ContactFormData {
	nome: string;
	email: string;
	mensagem: string;
}

export default function Contato() {
	const [isSent, setIsSent] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormData>();

	function onSubmit() {
		setIsSent(true);
		reset();
	}

	return (
		<>
      <main className="min-h-screen w-full bg-white px-6 pt-18 pb-24 max-md:pt-14">
        <section className="mx-auto mb-20 w-full max-w-168">
          <p className="mb-2 text-xs font-extrabold tracking-[0.08em] text-brand uppercase">Fale com a gente</p>
          <h1 className="mb-3 text-3xl font-bold leading-tight text-ink">Contato</h1>
          <p className="m-0 text-sm leading-relaxed text-muted [text-align:justify]">
						Estamos aqui para ouvir você. Seja para tirar dúvidas, enviar sugestões ou resolver qualquer problema,
						nossa equipe está pronta para ajudar e garantir a melhor experiência possível na plataforma.
					</p>
				</section>

        <section className="flex justify-center" aria-labelledby="contato-form-title">
          <form className="w-full max-w-152 rounded-2xl border border-line bg-white px-8 py-11 max-md:p-6" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-8 text-center text-xl font-extrabold text-copy" aria-hidden="true">
							<span>Eco</span>Movement
						</div>
            <h2 id="contato-form-title" className="mb-6 text-base font-semibold leading-tight text-ink">Envie sua mensagem</h2>

            <div className="mb-4 flex flex-col gap-1.5">
              <label className="text-xs font-bold text-ink" htmlFor="nome">Nome</label>
							<input
                className="w-full rounded-2xl border border-slate-300 bg-white px-3.5 py-3 text-sm leading-relaxed text-copy outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-3 focus:ring-brand/20 aria-invalid:border-red-600"
                id="nome"
								type="text"
								placeholder="Digite seu nome"
								aria-invalid={Boolean(errors.nome)}
								{...register('nome', { required: 'Informe seu nome.' })}
							/>
              {errors.nome && <span className="text-xs text-red-600">{errors.nome.message}</span>}
						</div>

            <div className="mb-4 flex flex-col gap-1.5">
              <label className="text-xs font-bold text-ink" htmlFor="email">E-mail</label>
							<input
                className="w-full rounded-2xl border border-slate-300 bg-white px-3.5 py-3 text-sm leading-relaxed text-copy outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-3 focus:ring-brand/20 aria-invalid:border-red-600"
                id="email"
								type="email"
								placeholder="Digite seu e-mail"
								aria-invalid={Boolean(errors.email)}
								{...register('email', {
									required: 'Informe seu e-mail.',
									pattern: { value: /\S+@\S+\.\S+/, message: 'Informe um e-mail válido.' },
								})}
							/>
              {errors.email && <span className="text-xs text-red-600">{errors.email.message}</span>}
						</div>

            <div className="mb-4 flex flex-col gap-1.5">
              <label className="text-xs font-bold text-ink" htmlFor="mensagem">Mensagem</label>
							<textarea
                className="min-h-32 w-full resize-y rounded-2xl border border-slate-300 bg-white px-3.5 py-3 text-sm leading-relaxed text-copy outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-3 focus:ring-brand/20 aria-invalid:border-red-600"
                id="mensagem"
								placeholder="Escreva sua mensagem"
								rows={5}
								aria-invalid={Boolean(errors.mensagem)}
								{...register('mensagem', { required: 'Escreva sua mensagem.' })}
							/>
              {errors.mensagem && <span className="text-xs text-red-600">{errors.mensagem.message}</span>}
						</div>

            <Button type="submit" className="mt-1 w-full bg-brand text-white hover:bg-brand-dark">
							Enviar
						</Button>

						{isSent && (
              <p className="mt-4 mb-0 text-center text-xs leading-relaxed text-green-700" role="status">
								Mensagem enviada com sucesso. Obrigado por entrar em contato!
							</p>
						)}
					</form>
				</section>
			</main>

		</>
	);
}
