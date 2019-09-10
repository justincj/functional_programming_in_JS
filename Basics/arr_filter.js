const people = [
    {name: 'Donal Knuth', born: 1938},
    {name: 'Vin Cerf', born: 1943},
    {name: 'Hal Abelson', born: 1947},
    {name:'Alan Turing', born: 1912},
    {name: 'John von Neuman', born: 1903},
    {name: 'Thomas H. Cormen', born: 1956},
    {name: 'Peter Norvig', born: 1956},
    {name:'Jon Bentley', born: 1953},
    {name: 'Grady Booch', born: 1955},
    {name: 'Randal Bryant', born: 1952},
    ]


    // filter(predicate, items) { ...for of ...}
  
 let out =  people.filter(item => item.born > 1955)
console.log(out)


// Jafar Hussein egghead.io

function getStockOver(stocks, minPrice){
    return stocks.filter(function(stock){
      return stock.price >= minPrice;
    })  ;
   
 }
   var expensiveStocks = getStockOver([
     {symbol: "XFX", price: 240.22, volume: 23432},
     {symbol: 'TNZ', price: 332.19, voume: 234},
     {symbol: "JXJ", price: 120.22, volume: 5323}
   ], 150.00);
   
   console.log(expensiveStocks)
 
















