function getStockSymbols(stocks){
    return stocks.map(function(stock){
        return stock.symbol;
    });

}
  var symbols = getStockSymbols([
    {symbol: "XFX", price: 240.22, volume: 23432},
    {symbol: 'TNZ', price: 332.19, voume: 234},
    {symbol: "JXJ", price: 120.22, volume: 5323}
  ])
  
  console.log(symbols)