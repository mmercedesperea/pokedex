import Home from './Home';
import Enzyme, { render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MemoryRouter as Router } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

describe('Home Component', () => {
  const component = render(
    <Router>
      <Home />
    </Router>
  );

  describe('Rendering Home', () => {
    it('Should instance to be defined', () => {
      expect(component).toBeDefined();
    });
  });
});
