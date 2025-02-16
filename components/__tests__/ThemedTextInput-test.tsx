import * as React from 'react';
import renderer from 'react-test-renderer';

import { ThemedTextInput } from '../ThemedTextInput';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<ThemedTextInput placeholder="Snapshot test!" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});