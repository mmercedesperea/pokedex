import Pagination from './Pagination';
import Enzyme, { render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MemoryRouter as Router } from 'react-router-dom';
import { IPagination, IPokemon } from '../../commom/types';

Enzyme.configure({ adapter: new Adapter() });

const pokemonMock: IPokemon = {
  name: 'pikachu',
  url: 'https://pokeapi.co/api/v2/pokemon/12'
};
const defaultProps: IPagination = {
  data: [pokemonMock],
  dataLimit: 10
};

describe('List Component', () => {
  const component = render(
    <Router>
      <Pagination {...defaultProps} />
    </Router>
  );

  it('Should instance to be defined', () => {
    expect(component).toBeDefined();
  });

  it('Should component text contain "PREVNEXT"', () => {
    expect(component.text()).toContain('PREVNEXT');
  });

  it('includes one div', () => {
    expect(component.find('button').length).toEqual(2);
  });
});
