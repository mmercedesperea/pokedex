import { useState, useEffect } from 'react';
import { IPokemonDetail, IService } from '../common/types';

const usePokemonDetails = (id: string) => {
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

export default usePokemonDetails;
