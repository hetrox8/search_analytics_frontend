// src/components/SearchAnalytics.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchAnalytics = () => {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/search_queries')
      .then(response => setAnalytics(response.data))
      .catch(error => console.error('Error fetching search analytics:', error));
  }, []);

  return (
    <div>
      <h2>Search Analytics</h2>
      <ul>
        {Object.entries(analytics).map(([query, count]) => (
          <li key={query}>{query}: {count}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchAnalytics;
