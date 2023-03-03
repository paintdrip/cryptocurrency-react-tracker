import React, { useState } from 'react';
import axios from 'axios';

import './scss/App.scss';
import Coin from './components/Coin';

function App() {
  const [coins, setCoins] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  React.useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="main">
      <div className="main-search">
        <div className="container">
          <img src="logo512.png" className="headerpic" alt="headerpic" />
          <h1 className="container-text">Cryptocurrency Price Tracker</h1>
        </div>
        <form>
          <input type="text" placeholder="Search" className="main-input" onChange={handleChange} />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
}

export default App;
