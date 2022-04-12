import Pagination from './Pagination';
import { MemoryRouter as Router } from 'react-router-dom';
import { IPagination } from '../../common/types';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const defaultProps: IPagination = {
  data: [
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
    { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
    { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
    { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
    { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' },
    { name: 'nidorina', url: 'https://pokeapi.co/api/v2/pokemon/30/' },
    { name: 'nidoqueen', url: 'https://pokeapi.co/api/v2/pokemon/31/' },
    { name: 'nidoran-m', url: 'https://pokeapi.co/api/v2/pokemon/32/' },
    { name: 'nidorino', url: 'https://pokeapi.co/api/v2/pokemon/33/' },
    { name: 'nidoking', url: 'https://pokeapi.co/api/v2/pokemon/34/' },
    { name: 'clefairy', url: 'https://pokeapi.co/api/v2/pokemon/35/' },
    { name: 'clefable', url: 'https://pokeapi.co/api/v2/pokemon/36/' },
    { name: 'vulpix', url: 'https://pokeapi.co/api/v2/pokemon/37/' },
    { name: 'ninetales', url: 'https://pokeapi.co/api/v2/pokemon/38/' },
    { name: 'jigglypuff', url: 'https://pokeapi.co/api/v2/pokemon/39/' },
    { name: 'wigglytuff', url: 'https://pokeapi.co/api/v2/pokemon/40/' },
    { name: 'zubat', url: 'https://pokeapi.co/api/v2/pokemon/41/' },
    { name: 'golbat', url: 'https://pokeapi.co/api/v2/pokemon/42/' },
    { name: 'oddish', url: 'https://pokeapi.co/api/v2/pokemon/43/' },
    { name: 'gloom', url: 'https://pokeapi.co/api/v2/pokemon/44/' },
    { name: 'vileplume', url: 'https://pokeapi.co/api/v2/pokemon/45/' },
    { name: 'paras', url: 'https://pokeapi.co/api/v2/pokemon/46/' },
    { name: 'parasect', url: 'https://pokeapi.co/api/v2/pokemon/47/' },
    { name: 'venonat', url: 'https://pokeapi.co/api/v2/pokemon/48/' },
    { name: 'venomoth', url: 'https://pokeapi.co/api/v2/pokemon/49/' }
  ],
  dataLimit: 10
};

test('Pagination contain PREV', () => {
  const { getByText } = render(
    <Router>
      <Pagination {...defaultProps} />
    </Router>
  );
  expect(getByText('PREV')).toBeTruthy();
});

test('Pagination contain BULBASAUR', () => {
  const { getByTestId, getByText } = render(
    <Router>
      <Pagination {...defaultProps} />
    </Router>
  );
  expect(getByTestId('tbodyPokemon')).toHaveTextContent('BULBASAUR');
  expect(getByText('BULBASAUR')).toBeTruthy();
});

test('Pagination contain VULPIX after clicking NEXT button', () => {
  const { getByTestId, getByText } = render(
    <Router>
      <Pagination {...defaultProps} />
    </Router>
  );

  fireEvent.click(getByTestId('button-next'));

  expect(getByText('VULPIX')).toBeTruthy();
});

test('Pagination contain BULBASAUR after clicking PREV button', () => {
  const { getByText } = render(
    <Router>
      <Pagination {...defaultProps} />
    </Router>
  );
  fireEvent.click(getByText('NEXT'));
  fireEvent.click(getByText('PREV'));

  expect(getByText('BULBASAUR')).toBeTruthy();
});

it('should be disabled', () => {
  const { getByTestId } = render(
    <Router>
      <Pagination {...defaultProps} />
    </Router>
  );
  expect(getByTestId('button-prev')).toHaveClass('disabled');
});

it('should be enabled', () => {
  const { getByTestId } = render(
    <Router>
      <Pagination {...defaultProps} />
    </Router>
  );
  expect(getByTestId('button-next')).not.toHaveClass('disabled');
  expect(getByTestId('button-next')).not.toBeDisabled();
});
