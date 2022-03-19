import { useState, useEffect } from 'react';
import { IPokemonDetail, IService } from '../commom/types';

const getPokemonDetails = (id: string) => {
  const [result, setResult] = useState<IService<IPokemonDetail>>({
    status: 'loading'
  });

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => setResult({ status: 'loaded', payload: response }))
      .catch((error) => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default getPokemonDetails;
