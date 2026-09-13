interface TituloSecaoProps {
  id: string;
  etiqueta: string;
  titulo: string;
  descricao?: string;
  nivel?: 'h1' | 'h2';
}

export default function TituloSecao({
  id,
  etiqueta,
  titulo,
  descricao,
  nivel: Titulo = 'h2',
}: TituloSecaoProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-2 text-xs font-extrabold uppercase tracking-widest text-brand">
        {etiqueta}
      </p>
      <Titulo id={id} className="mb-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
        {titulo}
      </Titulo>
      {descricao && (
        <p className="mb-0 text-base leading-relaxed text-muted">{descricao}</p>
      )}
    </div>
  );
}
