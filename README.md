# 💵 Cryptocurrency React Tracker 💵

![preview-1](https://i.ibb.co/3mtsQFP/wallpaper.png)

### Website displaying a list of cryptocurrencies, created on React, Typescript, Scss. The main page displays a list of popular cryptocurrencies, price, capitalization, percentage difference over 24 hours. There is a search function, adaptive layout is made. 

```
function startAutoUpdate() {
    setInterval(() => {
      axios
        .get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
        )
        .then((response) => {
          console.log(response.data);
          setCoins(response.data);
        })
        .catch((error) => console.log(error));
    }, 15000);
  }
```
#### Every 15 seconds the component with data on each cryptocurrency is updated

## 🗄 Links
-  API - https://www.coingecko.com/en/api
-  gh-pages - https://www.npmjs.com/package/gh-pages
