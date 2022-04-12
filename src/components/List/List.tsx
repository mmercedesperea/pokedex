import { IPokemons, IService } from '../../common/types';
import usePokemonsList from '../../services/UsePokemonsList';
import Pagination from '../Pagination/Pagination';

const List = (): React.ReactElement => {
  const data: IService<IPokemons> = usePokemonsList();

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
