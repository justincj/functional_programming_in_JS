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

