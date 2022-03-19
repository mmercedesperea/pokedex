import App from './App';
import Enzyme, { render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('App Component', () => {
  // Monta el componente con todos sus hijos
  const component = render(<App />);

  describe('Rendering App', () => {
    it('Should instance to be defined', () => {
      expect(component).toBeDefined();
    });
  });
});
