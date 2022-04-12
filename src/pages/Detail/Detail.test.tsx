import Detail from './Detail';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import usePokemonDetails from '../../services/UsePokemonDetails';

jest.mock('../../services/UsePokemonDetails');

const mockusePokemonDetails = usePokemonDetails as jest.Mock<any>;

afterEach(() => {
  mockusePokemonDetails.mockReset();
});

test('Rendering Detail', () => {
  mockusePokemonDetails.mockReturnValue({ status: 'loading' });
  const { getByText } = render(
    <Router>
      <Detail />
    </Router>
  );

  expect(getByText('Loading...')).toBeTruthy();
});
