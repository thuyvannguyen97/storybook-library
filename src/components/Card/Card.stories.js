import React from 'react';

import { Card } from './Card';
import DefaultCover from '../assets/book-default.svg';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Card {...args} />;

export const DefaultMenu = Template.bind({});
DefaultMenu.args = {
  backgroundColor: "#fff",
  book: {
    title: null,
    coverUrl: DefaultCover,
  }
};
