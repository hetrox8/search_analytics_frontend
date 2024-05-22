import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'

const SearchAnalytics = () => {
  const [analytics, setAnalytics] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/search_queries');
        setAnalytics(response.data);
      } catch (error) {
        console.error('Error fetching search analytics:', error);
        setError('Error fetching search analytics');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="searchAnalytics">
      <h2>Search Analytics</h2>
      {error && <p className="error">{error}</p>}
      <ul className="analyticsList">
        {analytics.map((query, index) => (
          <li key={index} className="analyticsItem">
            <span className="query">{query.query}</span>:
            <span className="ipAddress">{query.ip_address}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchAnalytics;
