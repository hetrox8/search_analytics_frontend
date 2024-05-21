// src/components/SearchBox.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import axios from 'axios';
import SearchBox from './SearchBox';

jest.mock('axios');

test('renders search box', () => {
  const { getByPlaceholderText } = render(<SearchBox />);
  expect(getByPlaceholderText('Search for articles...')).toBeInTheDocument();
});

test('sends query to the backend', async () => {
  axios.post.mockResolvedValue({ status: 200 });
  const { getByPlaceholderText } = render(<SearchBox />);
  const input = getByPlaceholderText('Search for articles...');

  fireEvent.change(input, { target: { value: 'test query' } });
  await new Promise(resolve => setTimeout(resolve, 600));  // Wait for debounce

  expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/search_queries', { query: 'test query' });
});
