import React from 'react';
import renderer from 'react-test-renderer';
import DonateEthereum from '../../src/components/icons/donate/DonateEthereum';

describe('DonateEthereum', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DonateEthereum />).toJSON()!;
    const {
      props: { href }
    } = tree;
    expect(typeof href).toBe('string');
    expect(tree).toMatchSnapshot();
  });
});
