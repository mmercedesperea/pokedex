import Detail from './Detail';
import Enzyme, { render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MemoryRouter as Router } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

describe('Detail Component', () => {
  const component = render(
    <Router>
      <Detail />
    </Router>
  );

  describe('Rendering Detail', () => {
    it('Should instance to be defined', () => {
      expect(component).toBeDefined();
    });
  });
});
