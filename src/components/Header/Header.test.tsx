import Header from './Header';
import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('Header Component', () => {
  let component: ReactWrapper;

  const renderComponent = () => {
    component = mount(<Header />);
  };

  describe('Rendering Header', () => {
    it('Should instance to be defined', () => {
      renderComponent();

      expect(component).toBeDefined();
    });
  });
});
