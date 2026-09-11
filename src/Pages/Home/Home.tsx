export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="flex min-h-[70vh] items-center justify-center px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-brand">
            EcoMovement
          </span>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Menos carbono e mais movimento.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Pequenas atitudes podem gerar grandes mudanças.
            Transforme suas ações sustentáveis em movimento para um futuro melhor.
          </p>
        </div>
      </section>
    </main>
  );
}