import PokemonDetail from './PokemonDetail';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MemoryRouter as Router } from 'react-router-dom';
import { IDParams } from '../../common/types';
export default {
  title: 'Components/PokemonDetail',
  component: PokemonDetail
} as Meta;

const Template: Story<IDParams> = (arg) => (
  <Router>
    <PokemonDetail {...arg} />
  </Router>
);

export const Default = Template.bind({});

Default.args = {
  id: '12'
};
