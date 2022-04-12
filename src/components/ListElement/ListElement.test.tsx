import { IPokemon } from '../../common/types';
import ListElement from './ListElement';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

const defaultProps: IPokemon = {
  name: 'pikachu',
  url: 'https://pokeapi.co/api/v2/pokemon/12'
};

test('List element contain info', () => {
  const { getByText } = render(
    <Router>
      <ListElement {...defaultProps} />
    </Router>
  );
  expect(getByText('PIKACHU')).toBeTruthy();
  expect(getByText('No. 12')).toBeTruthy();
});
