import { useNavigate } from 'react-router-dom';
import { IDParams, IPokemonDetail, IService } from '../../commom/types';
import getPokemonDetails from '../../services/GetPokemonDetails';
import './PokemonDetail.styles.scss';

const PokemonDetail = (props: IDParams): React.ReactElement => {
  const data: IService<IPokemonDetail> = getPokemonDetails(props.id);

  const navigate = useNavigate();

  const goToList = () => {
    const path = `/`;
    navigate(path);
  };
  return (
    <div className="pokemonDetail">
      {data.status === 'loading' && <div>Loading...</div>}
      {data.status === 'loaded' && (
        <div className="card">
          <span className="idCard"># {data.payload.id}</span>
          <img
            className={'pokemonImg ' + data.payload.types[0].type.name}
            src={data.payload.sprites.front_default}
            alt={data.payload.name}
          />
          <div className="infoPokemon">
            <h2>{data.payload.name.toUpperCase()}</h2>
            <div className="typeInfo">
              {data.payload.types.map((t) => (
                <span className={t.type.name} key={t.type.name}>
                  {t.type.name.toUpperCase()}
                </span>
              ))}
            </div>
            <div className="infoBody">
              <h3>Height: {data.payload.height} M</h3>
              <h3>Weight: {data.payload.weight} KG</h3>
            </div>
            <div className="abilities">
              <h3>Abilities</h3>
              <ul>
                {data.payload.abilities.map((a) => (
                  <li key={a.ability.name}>{a.ability.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Stats</h3>
              {data.payload.stats.map((s) => (
                <div className="statsContainer" key={s.stat.name}>
                  <h4>{s.stat.name.toLowerCase()}</h4>
                  <progress id="file" max="100" value={s.base_stat}></progress>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {data.status === 'error' && (
        <div>Error, The pokemons are resting we can not access them.</div>
      )}
      <button onClick={goToList} className="buttonP">
        BACK
      </button>
    </div>
  );
};
export default PokemonDetail;
