import { Locales as LocalesEnum } from '@/constants/locales.enum';
import { Locales } from '@/types/Common';
export interface Image {
  url: string;
  alt: Locales;
}

export interface Technology {
  name: string;
  textColor: string;
  backgroundColor: string;
  icon: string;
}

export interface AboutMe {
  title: {
    greetingMessage: Locales;
    name: string;
  };
  description: Locales;
  technologies: Technology[];
  imageContainer: {
    image: Image;
  };
}

export interface Project {
  name: Locales;
  description: Locales;
  image: Image;
  url: string;
}
