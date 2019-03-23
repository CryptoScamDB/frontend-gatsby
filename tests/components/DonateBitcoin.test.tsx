import React from 'react';
import renderer from 'react-test-renderer';
import DonateBitcoin from '../../src/components/icons/donate/DonateBitcoin';
import 'jest-styled-components';

describe('DonateBitcoin', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DonateBitcoin />).toJSON()!;
    const {
      props: { href }
    } = tree;
    expect(typeof href).toBe('string');
    expect(tree).toMatchSnapshot();
  });
});
