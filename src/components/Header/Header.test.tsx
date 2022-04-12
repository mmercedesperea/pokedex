import Header from './Header';
import { render } from '@testing-library/react';

test('header contains POKEDEX', () => {
  const { getByText } = render(<Header />);
  expect(getByText('POKÉDEX')).toBeTruthy();
});
