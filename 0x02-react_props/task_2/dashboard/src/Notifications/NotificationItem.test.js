// NotificationItem.test.js
import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

test('renders component without crashing', () => {
  render(<NotificationItem />);
});

test('renders correct html with type and value props', () => {
  const { getByText } = render(<NotificationItem type="default" value="test" />);
  expect(getByText('test')).toBeInTheDocument();
});

test('renders correct html with html prop', () => {
  const { getByText } = render(<NotificationItem html={{ __html: '<u>test</u>' }} />);
  expect(getByText('test')).toBeInTheDocument();
});
