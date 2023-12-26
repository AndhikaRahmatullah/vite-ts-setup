import React, { useCallback } from 'react';
// routes
import { RouterLink } from '/src/routes/components';
// components
import { Button } from '/src/components/button';
import { useThemeContext } from '/src/theme/context';

// ----------------------------------------------------------------------

const HomeView: React.FC = () => {
  const theme = useThemeContext();

  const handleToggleTheme = useCallback(() => {
    theme.onUpdateTheme();
  }, [theme.onUpdateTheme]);

  const logos: { label: string; href: string; image: string }[] = [
    { label: 'react', href: 'https://react.dev', image: '/logo/react.svg' },
    { label: 'vite', href: 'https://vitejs.dev', image: '/logo/vite.svg' },
    { label: 'typescript', href: 'https://www.typescriptlang.org/', image: '/logo/typescript.svg' },
  ];

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-10 py-10 transition-all duration-300 2xl:container dark:bg-dark">
      <p className="text-center text-5xl font-bold transition-all duration-300 dark:text-light">
        React Vite TypeScript + TailwindCSS
        <br /> <span className="text-3xl font-medium text-disabled">Starting Template</span>
      </p>

      <div className="flex w-full justify-center gap-10">
        {logos.map((logo) => (
          <RouterLink key={logo.label} href={logo.href} target="_blank">
            <img src={logo.image} className="w-28 transition-all duration-300 hover:scale-95" alt={logo.label} />
          </RouterLink>
        ))}
      </div>

      <div className="flex flex-row gap-5">
        <Button onClick={handleToggleTheme} variant="outlined">
          Theme {theme.currentTheme}
        </Button>
      </div>

      <div className="">
        <p className="transition-all duration-300 dark:text-light">
          Edit <code>src/sections/home/view/home-view.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="transition-all duration-300 dark:text-light">Click on the Vite, React and Typescript logos to learn more</p>
    </section>
  );
};

export default HomeView;
