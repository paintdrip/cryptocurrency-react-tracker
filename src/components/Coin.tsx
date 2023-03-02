import React from 'react';

type CoinProps = {
  image: string;
  name: string;
  symbol: string;
  price: number;
  volume: number;
  priceChange: number;
  marketcap: number;
};

const Coin: React.FunctionComponent<CoinProps> = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin">
      <div className="coin-row">
        <div className="coin-unit">
          <img src={image} alt="cryptopic" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">$ {price}</p>
          <p className="coin-volume">$ {volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent-red">{priceChange.toFixed(2)} %</p>
          ) : (
            <p className="coin-percent-green">+{priceChange.toFixed(2)} %</p>
          )}
          <p className="coin-marketcap">Mkt Cap: $ {marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
