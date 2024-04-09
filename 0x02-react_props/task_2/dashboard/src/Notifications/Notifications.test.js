// Notifications.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

test('renders NotificationItem elements', () => {
  const notifications = [{ type: 'default', value: 'test', html: { __html: '<u>test</u>' } }];
  const { getByText } = render(<Notifications notifications={notifications} />);
  expect(getByText('test')).toBeInTheDocument();
});

test('first NotificationItem renders the right html', () => {
  const notifications = [{ type: 'default', value: 'test', html: { __html: '<u>test</u>' } }];
  const { getByText } = render(<Notifications notifications={notifications} />);
  expect(getByText('test')).toBeInTheDocument();
});

