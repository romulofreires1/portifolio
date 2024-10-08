import Image from 'next/image';
import Link from 'next/link';
import { Roboto } from 'next/font/google';
import { AboutMe as TAboutMe } from '@/types/Home';
import useI18nField from '@/hooks/useI18nField';
import useLocale from '@/hooks/useLocale';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});

interface AboutMeProps {
  aboutMe: TAboutMe;
}

const namespaces = ['home', 'common'];

export const AboutMe = ({ aboutMe }: AboutMeProps) => {
  const { title, description, imageContainer, technologies } = aboutMe;

  const iam = useI18nField('iam', namespaces);
  const contactMe = useI18nField('contactMe', namespaces);
  const locale = useLocale();

  return (
    <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between">
      <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
        <h1 className="text-4xl md:text-6xl xl:leading-[5rem]">
          {title.greetingMessage[locale]}
        </h1>
        <h1 className="text-4xl md:text-6xl xl:leading-[5rem]">
          <span className="mt-2">{iam} </span>
          <strong className="font-semibold text-galactic-purple">
            {title.name}
          </strong>
        </h1>
        <div>
          <h2 className={`mb-12 ${roboto.className}`}>{description[locale]}</h2>
        </div>
        <ul className="flex flex-wrap justify-center sm:justify-start xl:w-fit gap-3 text-xl mb-10">
          {technologies.map(
            ({ name, backgroundColor, textColor, icon }, index) => (
              <li
                key={name + index}
                style={{ backgroundColor: backgroundColor, color: textColor }}
                className="flex w-fit p-2 rounded-md"
              >
                {name}
              </li>
            ),
          )}
        </ul>
        <Link
          href={'/contacts'}
          className="p-2 g-h-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80 border-solid border-2 border-neon-spring hover:bg-neon-spring"
        >
          {contactMe}
        </Link>
      </div>
      <div className="relative">
        <Image
          src={imageContainer.image.url}
          alt={imageContainer.image.alt[locale]}
          unoptimized
          width={350}
          height={350}
          className="rounded-full"
        />
      </div>
    </main>
  );
};
