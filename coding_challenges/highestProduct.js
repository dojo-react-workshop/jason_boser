// Highest product of any 3 numbers in an array

//[-10, 5, 1, 2, 3]
//  A   A        A
//         B  B  B

const highestProduct = (arr) => {

    if(arr.length < 2) {throw new Error('Must have at least 3 vals')}
    let first = arr[0];
    let second = arr[1];
    let third = arr[2];
    let highestProductOf2 = first*second;
    let lowestProductOf2 = first*second;
    let highest = Math.max(first,second);
    let lowest = Math.min(first,second);

    return arr.reduce((highestProductOf3, val, index) => {
        if(index < 2) { return highestProductOf3; }
        
        highestProductOf3 = Math.max(
            highestProductOf3,
            highestProductOf2 * val,
            lowestProductOf2 * val
        );

        highestProductOf2 = Math.max(
            highestProductOf2,
            highest*val,
            lowest*val
        );

        lowestProductOf2 = Math.min(
            lowestProductOf2,
            lowest*val,
            highest*val
        );

        highest = Math.max(highest,val)
        lowest = Math.min(lowest,val)
        
        return highestProductOf3;

    },first*second*third)

}

console.log(highestProduct([1,2,3,4,5])) //60
console.log(highestProduct([-5,-4,-3,-2,-1])) //-6
console.log(highestProduct([-10,-5,0,6,12])) //600