'use strict'

function maxProfit(arr) {
    if(arr.length < 2){
        throw new Error('Must provide at least 2 prices.');
    }

    let buy = arr[0];
    let maxProfit = arr[1] - arr[0];

   for(let i=1; i<arr.length; i++) {
        if((arr[i]-buy) > maxProfit){
            maxProfit = arr[i]-buy;
        }
        if(arr[i] < buy){
            buy = arr[i];
        } 
    }
   return maxProfit;
}

console.log(maxProfit([1,5,8,3,4,6,6,2]))
console.log(maxProfit([2,1,9]))
console.log(maxProfit([10,9,4,1]))
console.log(maxProfit([10,6,3,1]))