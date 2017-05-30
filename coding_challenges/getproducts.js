//[5,1,3,8,2] => return array with products of all numbers but the index
//result = [48,240,80,30,120]
'use strict'

function getProducts(arr){
    const results = [];
    const afterProducts = [];
    let productAfter = 1;
    let productBefore = 1;

    for(let i=arr.length-1; i>=0; i--){
        afterProducts[i] = productAfter;
        productAfter *= arr[i];
    }
    for(let j=0; j<arr.length; j++){
        results.push(productBefore*afterProducts[j]);
        productBefore *= arr[j];
    }

    return results;
}

console.log(getProducts([5,1,3,8,2]));