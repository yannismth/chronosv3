"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button'
const Header = () => {
    const [showLine, setShowLine] = useState(false);
    // Gérer le scroll
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 50) {
        setShowLine(true);
        } else {
        setShowLine(false);
        }
    };
    // Utiliser useEffect pour écouter le scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Nettoyage de l'événement de scroll
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const Router = useRouter();
  const handleLoginClick = () => {
        Router.push('/dashboard');

  }
    return(
        <header className="relative sticky top-0 z-50 py-4 bg-background/60 backdrop-blur" data-aos="fade-down" data-aos-delay="200">
            <div className="flex justify-between items-center px-8 lg:justify-around">
                    <h1 className="text-xl uppercase font-bold">Chronos</h1>

                <nav>
                    <ul className='gap-8 hidden md:flex'>
                        <li>Features</li>
                        <li>Solutions</li>
                        <li>Pricings</li>
                    </ul>
                </nav>

                <div className='hidden md:flex'>
                    <Button variant={"outline"} className='mr-2' onClick={handleLoginClick}>Login</Button>
                    <Button>Get Started for Free</Button>
                </div>
                <img src="/menu-line.svg" alt="hamburger mobile version" width={20} height={20} className='md:hidden'/>
            </div>
            {showLine && <hr style={{ opacity: 1, transition: 'opacity 0.5s' }} className='mt-4'/>}
        </header>
    );
};

export default Header;