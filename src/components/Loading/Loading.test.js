import React from 'react';
import { render } from '@testing-library/react-native';
import Loading from './Loading';

describe('Loading component', () => {
  it('renders activity indicator', () => {
    const { getByTestId } = render(<Loading />);
    const indicator = getByTestId('activity-indicator');
    expect(indicator).toBeTruthy();
  });
});
