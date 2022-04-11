import List from './List';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MemoryRouter as Router } from 'react-router-dom';
import withMock from 'storybook-addon-mock';
export default {
  title: 'Components/List',
  component: List,
  decorators: [withMock]
} as Meta;

const Template: Story = () => (
  <Router>
    <List />
  </Router>
);

const resultP = [
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
  { name: 'venomoth', url: 'https://pokeapi.co/api/v2/pokemon/49/' },
  { name: 'diglett', url: 'https://pokeapi.co/api/v2/pokemon/50/' },
  { name: 'dugtrio', url: 'https://pokeapi.co/api/v2/pokemon/51/' },
  { name: 'meowth', url: 'https://pokeapi.co/api/v2/pokemon/52/' },
  { name: 'persian', url: 'https://pokeapi.co/api/v2/pokemon/53/' },
  { name: 'psyduck', url: 'https://pokeapi.co/api/v2/pokemon/54/' },
  { name: 'golduck', url: 'https://pokeapi.co/api/v2/pokemon/55/' },
  { name: 'mankey', url: 'https://pokeapi.co/api/v2/pokemon/56/' },
  { name: 'primeape', url: 'https://pokeapi.co/api/v2/pokemon/57/' }
];

export const Default = Template.bind({});

Default.parameters = {
  mockData: [
    {
      url: 'https://pokeapi.co/api/v2/pokemon?limit=151',
      method: 'GET',
      status: 200,
      response: {
        count: 1126,
        next: 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=151',
        previous: null,
        results: resultP
      }
    }
  ]
};

export const LoadingState = Template.bind({});

LoadingState.parameters = {
  mockData: [
    {
      url: 'https://pokeapi.co/api/v2/pokemon?limit=151',
      method: 'GET',
      status: 200,
      response: {
        count: 1126,
        next: 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=151',
        previous: null,
        results: resultP
      },
      delay: 3000
    }
  ]
};
