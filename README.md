# spon-market
SPON market indicies

# Usage
```js
const { sponMarket } = require("spon-market")

sponMarket().then(data => console.log(data))
```

Example Output
```js
[ { symbol: 'DAX',
    value: ' 11.557,40',
    change: ' -12,00',
    changePcnt: ' -0,10%' },
  { symbol: 'MDAX',
    value: ' 24.796,80',
    change: ' +420,40',
    changePcnt: ' +1,72%' },
  { symbol: 'TECDAX',
    value: ' 2.703,91',
    change: ' +60,44',
    changePcnt: ' +2,29%' },
  { symbol: 'E-STOXX 50',
    value: ' 3.327,11',
    change: ' +45,35',
    changePcnt: ' +1,38%' },
  { symbol: 'SMI',
    value: ' 9.727,29',
    change: ' +117,77',
    changePcnt: ' +1,23%' },
  { symbol: 'Dow Jones',
    value: ' 25.897,20',
    change: ' +315,40',
    changePcnt: ' +1,23%' },
  { symbol: 'NASDAQ 100',
    value: ' 7.605,78',
    change: ' +119,92',
    changePcnt: ' +1,60%' },
  { symbol: 'S&P 500',
    value: ' 2.890,21',
    change: ' +40,88',
    changePcnt: ' +1,43%' },
  { symbol: 'NIKKEI 225',
    value: ' 20.582,90',
    change: ' +244,60',
    changePcnt: ' +1,20%' },
  { symbol: 'HSI',
    value: ' 25.733,60',
    change: ' +361,20',
    changePcnt: ' +1,42%' } ]
```
