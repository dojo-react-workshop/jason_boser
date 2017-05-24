'use strict'
//APPLE
// Can't buy and sell in same time slots
//return best profit could have made from one purchase and one sale
//for this one, buy low at 5 and sell high at 11
const applePricesYesterday = [10,7,5,8,11,9];

function getMaxProfit(arr, ind=0){
    //base case to break recursion, can't compare less than 2 prices
    if (ind+1 >= arr.length){
        return;
    }
    let maxDiff = arr[ind+1] - arr[ind];
    for (let i = ind+2; i < arr.length; i++){
        let diff = arr[i] - arr[ind];
        if (diff > maxDiff){
            maxDiff = diff;
        }
    }
    let nextMax = getMaxProfit(arr, ind+1);
    if (nextMax === undefined){
        return maxDiff;
    } else if (maxDiff > nextMax){
        return maxDiff;
    } else {
        return nextMax;
    }
}
console.log('Max profit = ' + getMaxProfit(applePricesYesterday, 0)); 





// function maxProfit(arr) {
//     var buyIndex = 0;
//     var sellIndex = 1;
//     var maxProfit = arr[sellIndex] - arr[buyIndex];

//    for(let i=0; i<arr.length; i++) {
//         for(let x=i+1; x<arr.length; x++) {
          
//             if((arr[x]-arr[i]) > maxProfit) {
//                 buyIndex = i;
//                 sellIndex = x;
//                 maxProfit = arr[x]-arr[i];
//             }
//         }
//     }

//    return({buyIndex:buyIndex, sellIndex:sellIndex, maxProfit:maxProfit});

// }