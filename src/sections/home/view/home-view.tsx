import { useState, useCallback } from 'react';
import { RouterLink } from '/src/routes/components';
import { paths } from '/src/routes/paths';

// ----------------------------------------------------------------------

export default function HomeView() {
  const [count, setCount] = useState<number>(0);

  const handleChangeCount = useCallback(() => {
    setCount((prev: number) => prev + 1);
  }, []);

  return (
    <section>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/public/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/public/react.svg" className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com/AndhikaRahmatullah" target="_blank">
          <img src="/public/github.svg" className="logo github" alt="Github logo" />
        </a>
      </div>

      <RouterLink href={paths.home} className="welcome">
        Welcome
      </RouterLink>

      <div className="card">
        <button onClick={handleChangeCount}>count is {count}</button>

        <p>
          Edit <code>src/sections/home/view/home-view.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">Click on the Vite, React and Github logos to learn more</p>
    </section>
  );
}
