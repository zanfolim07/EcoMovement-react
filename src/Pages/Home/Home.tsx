import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import imagemInicio from '../../assets/img/imagem-inicio.png';

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-[linear-gradient(90deg,#80D7DE_0%,#4CAEDD_13%,#1885DB_25%,#1B89DB_50%,#1372CE_100%)] px-6 py-16 md:px-12 md:py-0">
      <div className="mx-auto flex w-full max-w-320 flex-col-reverse items-center gap-10 md:flex-row md:justify-between md:gap-8">
        <div className="z-2 max-w-152 text-center text-white md:text-left">
          <h1 className="m-0 text-3xl font-extrabold leading-tight">EcoMovement</h1>

          <p className="mt-6 text-xl font-light leading-tight md:mt-8">
            Pequenas <strong>ações</strong> geram grandes <strong>impactos</strong>
          </p>

          <p className="mt-5 text-sm leading-relaxed">
            Acumule pontos no dia a dia. Transforme seu estilo de vida e suas ações em impacto
            real. Veja sua árvore crescer junto com o mundo que você melhora.
          </p>

          <div className="mt-8 flex justify-center md:justify-start">
            <Button onClick={() => navigate('/inicio')}>Entrar</Button>
          </div>
        </div>

        <div className="z-2 flex w-full max-w-75 justify-center md:absolute md:right-[2%] md:bottom-0 md:max-w-135 xl:right-[4%] xl:max-w-155">
          <img
            src={imagemInicio}
            alt="Pessoa sorrindo enquanto usa o celular e segura um cartão, representando as ações do dia a dia"
            className="block max-h-120 w-full object-contain md:max-h-180 xl:max-h-205"
          />
        </div>
      </div>
    </section>
  );
}
