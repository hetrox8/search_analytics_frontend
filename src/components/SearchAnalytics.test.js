// src/components/SearchAnalytics.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import SearchAnalytics from './SearchAnalytics';

jest.mock('axios');

test('fetches and displays search analytics', async () => {
  axios.get.mockResolvedValue({
    data: { 'test query': 3, 'another query': 2 }
  });

  const { getByText } = render(<SearchAnalytics />);

  await waitFor(() => {
    expect(getByText('test query: 3')).toBeInTheDocument();
    expect(getByText('another query: 2')).toBeInTheDocument();
  });
});
