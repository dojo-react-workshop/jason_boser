const cities = [
    {city:'Milwaukee'},
    {city:'Chicago'},
    {city:'Madison'},
    {city:'Milwaukee'},
    {city:'Cleveland'}
]

function uniqueCities (arr) {
    let unique = {};

    arr.forEach((current) => {
        unique[current.city] = current.city;
    })

    return Object.keys(unique);
}

function uniqueCities2 (arr) {
    return Object.keys(arr.reduce((accum={},current) => {
        accum[current.city] = current.city;
        return accum;git 
    },{}))
}

console.log(uniqueCities(cities))
console.log(uniqueCities2(cities))