import Header from './Header';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MemoryRouter as Router } from 'react-router-dom';

export default {
  title: 'Components/Header',
  component: Header
} as Meta;

const Template: Story = () => (
  <Router>
    <Header />
  </Router>
);

export const Default = Template.bind({});
