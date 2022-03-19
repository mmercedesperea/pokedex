import { useParams } from 'react-router-dom';
import PokemonDetail from '../../components/PokemonDetail/PokemonDetail';

const Detail = (): React.ReactElement => {
  const { id } = useParams();

  return (
    <>
      <PokemonDetail id={id as string} />
    </>
  );
};
export default Detail;
