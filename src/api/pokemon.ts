import { useMemo } from 'react';
import useSWR from 'swr';
import type { SWRConfiguration } from 'swr';
// utils
import { endpoints, fetcher } from '/src/utils/axios';

// ----------------------------------------------------------------------

const config: SWRConfiguration = {};

// ----------------------------------------------------------------------

interface GetPokemons {
  pokemons: string[];
  pokemonsLoading: boolean;
  pokemonsError: Error | null;
  pokemonsValidating: boolean;
  pokemonsEmpty: boolean;
}

interface PokemonsData {
  results: string[];
}

// ----------------------------------------------------------------------

export function useGetPokemons(): GetPokemons {
  const URL = [endpoints.pokemon];

  const { data, isLoading, error, isValidating } = useSWR<PokemonsData>(URL, fetcher, config);

  const memoizedValue = useMemo(
    () => ({
      pokemons: data?.results || [],
      pokemonsLoading: isLoading,
      pokemonsError: error,
      pokemonsValidating: isValidating,
      pokemonsEmpty: !isLoading && !data?.results?.length,
    }),
    [data?.results, error, isLoading, isValidating]
  );

  return memoizedValue;
}
