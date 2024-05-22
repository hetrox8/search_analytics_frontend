import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import SearchAnalytics from './SearchAnalytics';

jest.mock('axios');

describe('SearchAnalytics Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders search trends', async () => {
    // Mock data for trends
    const mockData = [
      { query: 'test query 1' },
      { query: 'test query 2' },
    ];

    // Mock axios.get to return mockData
    axios.get.mockResolvedValueOnce({ data: mockData });

    // Render the component
    render(<SearchAnalytics />);

    // Wait for the component to render with the mocked data
    await waitFor(() => {
      mockData.forEach((item) => {
        expect(document.body).toHaveTextContent(item.query);
      });
    });

    // Verify the API call
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/search-analytics');
  });

  test('handles API error', async () => {
    // Mock error for API call
    const errorMessage = 'API error';
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    // Render the component
    render(<SearchAnalytics />);

    // Wait for the component to handle the error
    await waitFor(() => {
      expect(document.body).toHaveTextContent(`Error fetching data: ${errorMessage}`);
    });

    // Verify the API call
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/search-analytics');
  });
});
