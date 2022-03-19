import { IPokemons, IService } from '../../commom/types';
import getPokemons from '../../services/GetPokemonsList';
import Pagination from '../Pagination/Pagination';

const List = (): React.ReactElement => {
  const data: IService<IPokemons> = getPokemons();

  return (
    <div className="listInfo">
      {data.status === 'loading' && <div>Loading...</div>}
      {data.status === 'loaded' && (
        <Pagination data={data.payload.results} dataLimit={10}></Pagination>
      )}
      {data.status === 'error' && (
        <div>Error, The pokemons are resting we can not access them.</div>
      )}
    </div>
  );
};
export default List;