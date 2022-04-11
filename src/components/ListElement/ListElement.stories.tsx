import ListElement from './ListElement';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MemoryRouter as Router } from 'react-router-dom';
import { IPokemon } from '../../common/types';

export default {
  title: 'Components/ListElement',
  component: ListElement
} as Meta;

const Template: Story<IPokemon> = (args) => (
  <Router>
    <ListElement {...args} />
  </Router>
);

export const Default = Template.bind({});

Default.args = {
  name: 'caterpie',
  url: 'https://pokeapi.co/api/v2/pokemon/10/'
};
