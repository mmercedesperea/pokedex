import Home from './Home';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import usePokemonsList from '../../services/UsePokemonsList';

jest.mock('../../services/UsePokemonsList');

const mockusePokemonsList = usePokemonsList as jest.Mock<any>;

afterEach(() => {
  mockusePokemonsList.mockReset();
});

test('Rendering Detail', () => {
  mockusePokemonsList.mockReturnValue({ status: 'loading' });
  const { getByText } = render(
    <Router>
      <Home />
    </Router>
  );

  expect(getByText('Loading...')).toBeTruthy();
});
