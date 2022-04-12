import List from './List';
import { render } from '@testing-library/react';
import usePokemonsList from '../../services/UsePokemonsList';
import { MemoryRouter as Router } from 'react-router-dom';

jest.mock('../../services/UsePokemonsList');

const mockedusePokemonsList = usePokemonsList as jest.Mock<any>;

afterEach(() => {
  mockedusePokemonsList.mockReset();
});

test('Should component text contain "Loading...', async () => {
  mockedusePokemonsList.mockReturnValue({ status: 'loading' });

  const { getByText } = render(<List />);
  expect(getByText('Loading...')).toBeTruthy();
});

test('Should component text contain "BULBASAUR', async () => {
  mockedusePokemonsList.mockReturnValue({
    status: 'loaded',
    payload: {
      count: 1126,
      next: 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=151',
      previous: null,
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' }
      ]
    }
  });

  const { getByText } = render(
    <Router>
      <List />
    </Router>
  );
  expect(getByText('BULBASAUR')).toBeTruthy();
});

test('Should component text contain "error', async () => {
  mockedusePokemonsList.mockReturnValue({ status: 'error' });

  const { getByText } = render(<List />);
  expect(getByText('Error, The pokemons are resting we can not access them.')).toBeTruthy();
});
