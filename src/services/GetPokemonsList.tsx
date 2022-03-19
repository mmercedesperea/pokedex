import { useState, useEffect } from 'react';
import { IPokemons, IService } from '../common/types';

const getPokemonsList = () => {
  const [result, setResult] = useState<IService<IPokemons>>({
    status: 'loading'
  });
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((response) => setResult({ status: 'loaded', payload: response }))
      .catch((error) => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default getPokemonsList;
