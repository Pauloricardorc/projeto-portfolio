import type { NextPage } from 'next';
import CardProjects from '../components/CardProjects';
import CardInfo from '../components/infos';
import CardProfile from '../components/profile';
import CardTags from '../components/Tecnologias';

const Home: NextPage = () => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        <CardProfile />
        <CardInfo />
        <CardTags />
      </div>
      <div className="flex w-full flex-col gap-4">
        <div className="flex h-20 flex-1 items-center justify-between rounded-md bg-primary bg-center p-4 shadow-sm shadow-black">
          <h1 className="text-2xl">Meus Projetos</h1>
          <a
            href=""
            className="text-placeholder transition hover:text-secondary"
          >
            Veja todos
          </a>
        </div>
        <div
          className="w-full overflow-auto rounded-md"
          style={{ height: 'calc(100vh - 9rem)' }}
        >
          <CardProjects />
        </div>
      </div>
    </div>
  );
};

export default Home;
