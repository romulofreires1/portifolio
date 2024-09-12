import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { MenuIcon } from '@/components/icons/MenuIcon';
import { useRouter } from 'next/router';
import { Menu } from './Menu';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { locale } = useRouter();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <header className="border-solid border-b-[0.063rem] border-opacity-[0.1] border-white bg-black-velvet text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20">
      <Link className="hover:scale-110 transition-transform" href="/" locale={locale}>
        <Image
          src="/favicon.svg"
          width={35}
          height={35}
          alt="Logo de Rômulo"
          priority
        />
      </Link>
      <button className="p-1 md:hidden" onClick={toggleMenu}>
        <MenuIcon className="fill-white w-10 h-10" />
      </button>
      <nav className="hidden md:flex items-center gap-10 text-md">
        <Link
        locale={locale}
          href="/"
          className={`p-2 rounded-lg ${router.pathname === '/' ? 'bg-galactic-purple' : 'hover:text-neon-spring'}`}
        >
          <span>Home</span>
        </Link>
        <Link
        locale={locale}
          href="/about"
          className={`p-2 rounded-lg ${router.pathname === '/about' ? 'bg-galactic-purple' : 'hover:text-neon-spring'}`}
        >
          <span>Sobre</span>
        </Link>
        <Link
        locale={locale}
          href="/contacts"
          className={`p-2 rounded-lg ${router.pathname === '/contacts' ? 'bg-galactic-purple' : 'hover:text-neon-spring'}`}
        >
          <span>Contatos</span>
        </Link>
      </nav>
      <Menu isVisible={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
};
