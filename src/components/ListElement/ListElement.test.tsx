import { IPokemon } from '../../commom/types';
import ListElement from './ListElement';
import Enzyme, { render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MemoryRouter as Router } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps: IPokemon = {
  name: 'pikachu',
  url: 'https://pokeapi.co/api/v2/pokemon/12'
};

describe('ListElement Component', () => {
  const component = render(
    <Router>
      <ListElement {...defaultProps} />
    </Router>
  );

  describe('Rendering ListElement', () => {
    it('Should instance to be defined', () => {
      expect(component).toBeDefined();
    });

    it('Should component text contain "PIKACHU"', () => {
      expect(component.text()).toContain('PIKACHU');
    });

    it('Should component text contain "No. 12"', () => {
      expect(component.text()).toContain('No. 12');
    });
  });
});
