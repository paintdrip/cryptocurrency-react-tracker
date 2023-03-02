import React from 'react';

type CoinProps = {
  image: string;
  name: string;
  symbol: string;
  price: number;
  volume: number;
};

const Coin: React.FunctionComponent<CoinProps> = ({ image, name, symbol, price, volume }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="cryptopic" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">$ {price}</p>
          <p className="coin-volume">$ {volume.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
