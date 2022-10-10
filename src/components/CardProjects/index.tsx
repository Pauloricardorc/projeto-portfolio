import Image from 'next/image';
import ReactImg from '/public/assets/reactjs.png';

export default function CardProjects() {
  return (
    <div className="flex h-auto w-72 flex-col justify-center gap-3 rounded-md bg-primary p-2 text-center shadow-sm shadow-black">
      <div className="m-auto h-24 w-24 cursor-pointer rounded-full transition hover:scale-110">
        <Image
          width={250}
          height={250}
          layout="responsive"
          src={ReactImg}
          alt=""
          className="h-full w-full rounded-full"
        />
      </div>
      <span>Nome do Projeto</span>
      <p className="text-justify text-sm text-placeholder">
        descricao do projeto que foi feito em react com ajuda de alguns video e
        aulas de cursos foi para ajudar pessoal com deficiencia visual, voltado
        a lado da acessibilidade.
      </p>
      <button className="rounded-md bg-action py-2 text-sm transition hover:bg-opacity-80 hover:shadow-sm hover:shadow-stone-900">
        saber mais
      </button>
    </div>
  );
}
