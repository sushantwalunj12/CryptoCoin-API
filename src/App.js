import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';
import './App.css';


const App = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
      setCoins(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>ID</th>
            <th>Current Price</th>
            <th>Total Volume</th>
          </tr>
        </thead>
        <tbody>
          {coins.map(coinss => (
            <Table key={coinss.id} coinss={coinss} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;