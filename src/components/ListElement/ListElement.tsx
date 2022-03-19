import { Link } from 'react-router-dom';
import { IPokemon } from '../../common/types';
import imgPokeball from '../../assets/pokeballp.png';
import './ListElement.styles.scss';

const ListElement = (props: IPokemon): React.ReactElement => {
  const numberExtractor = (url: string) => {
    return url.replace(/\d/, '').replace(/\D/g, '');
  };

  const { name, url } = props;
  return (
    <>
      <tr>
        <td>No. {numberExtractor(url)}</td>
        <td className="pokemonNameLi">
          <Link to={`/pokemon/${numberExtractor(url)}`}>{name.toUpperCase()}</Link>
        </td>
        <td>
          <img className="pokeballListImg" src={imgPokeball} alt="pokeball" />
        </td>
      </tr>
    </>
  );
};
export default ListElement;
