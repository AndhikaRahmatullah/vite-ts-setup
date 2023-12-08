import { useState } from 'react';
import reactLogo from '/src/assets/react.svg';
import viteLogo from '/vite.svg';
import '/src/App.css';
import { useGetPokemons } from '/src/api/pokemon';
import { RouterLink } from '/src/routes/components';

import { paths } from '/src/routes/paths';

export default function HomeView() {
  const [count, setCount] = useState(0);

  const { pokemons } = useGetPokemons();

  console.log({ pokemons });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <RouterLink href={paths.home}>Vite + React</RouterLink>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}
