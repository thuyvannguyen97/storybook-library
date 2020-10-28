import React from 'react';

import { SearchBox } from './SearchBox';

export default {
  title: 'Components/SearchBox',
  component: SearchBox,
};

const Template = (args) => <SearchBox {...args} />;

export const DefaultSearch = Template.bind({});
DefaultSearch.args = {
  action: "",
  placeholder: 'Search for a book',
};
