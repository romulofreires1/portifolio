import { Project } from '@/types/Home';
import Image from 'next/image';
import Link from 'next/link';
import useI18nField from '@/hooks/useI18nField';
import useLocale from '@/hooks/useLocale';
interface ProjectsProps {
  projects: Project[];
}

const namespaces = ['home', 'common'];

export const Projects = ({ projects }: ProjectsProps) => {
  const recentProjects = useI18nField('recentProjects', namespaces);
  const locale = useLocale();

  return (
    <article className="space-y-16 flex flex-col items-center xl:items-start text-center xl:text-left">
      <h2 className="text-2xl md:text-4xl text-neon-spring">
        {recentProjects}
      </h2>

      <ul className="flex flex-wrap gap-16 justify-center xl:justify-start">
        {projects.map(({ name, description, image, url }, index) => (
          <li
            className="text-md relative hover:scale-110 transition-transform"
            key={name[locale] + index}
          >
            <Link className="hover:scale-110 transition-transform" href={url}>
              <Image
                src={image.url}
                alt={image.alt[locale]}
                width={400}
                height={200}
                className="rounded-2xl h-[16.75rem] mb-4"
              />
            </Link>
            <div className="w-96 space-y-4">
              <p>{name[locale]}</p>
              <p>{description[locale]}</p>
            </div>
            <div className="bg-galactic-purple rounded-full w-12 h-12 text-center flex justify-center items-center text-xl absolute bottom-[16.25rem] -right-[1.25rem]">
              <span>{index + 1}</span>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};
