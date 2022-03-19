import List from './List';
import Enzyme, { render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MemoryRouter as Router } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

describe('List Component', () => {
  const component = render(
    <Router>
      <List />
    </Router>
  );

  it('Should instance to be defined', () => {
    expect(component).toBeDefined();
  });

  it('Should component text contain "Loading..."', () => {
    expect(component.text()).toContain('Loading...');
  });

  it('includes one div', () => {
    expect(component.find('div').length).toEqual(1);
  });
});
