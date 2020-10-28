import React from 'react';

import { MenuBar } from './MenuBar';

export default {
  title: 'Components/MenuBar',
  component: MenuBar,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <MenuBar {...args} />;

export const DefaultMenu = Template.bind({});
DefaultMenu.args = {
  items: ['Home', 'Users', 'Books', 'Transactions', 'Seller Channel'],
  color: '#555',
};
