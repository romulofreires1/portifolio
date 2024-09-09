import { AboutMe } from '@/components/Home/AboutMe';
import { Projects } from '@/components/Home/Projects';
import { Project, AboutMe as TAboutMe } from '@/types/Home';
import { GetStaticProps } from 'next';
import Head from 'next/head';

interface HomeProps {
  home: {
    aboutMe: TAboutMe;
    projects: Project[];
  };
}

const Home = ({ home }: HomeProps) => {
  const { projects, aboutMe } = home;

  return (
    <>
      <Head>
        <title>Sobre mim | Rômulo</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end apaixonado por criar interfaces e ajudar outros devs!"
        />
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
        <AboutMe aboutMe={aboutMe} />
        <Projects projects={projects} />
      </div>
    </>
  );
};

const loadHome = async () => {
  const res = await fetch(
    'https://gist.githubusercontent.com/romulofreires1/1f3ec8357c940943174fcb4a38c3d3d4/raw/portifolio-structure-ptbr.json',
  );
  const home = await res.json();

  return home;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const home = await loadHome();

  return {
    props: { home },
    revalidate: 60
  };
};

export default Home;
