function balancePoint(arr){
    let sum1 = arr.reduce((accum,current) => {
        return accum + current;
    })

    let sum2 = 0;
    for(let i=0; i<arr.length; i++){
        if(sum1===sum2){
            return true;
        }
        let current = arr[i];
        sum1 -= current;
        sum2 += current;
    }

    return false;
}

console.log(balancePoint([1,2,4,2,1]))
console.log(balancePoint([10,-10,20]))
console.log(balancePoint([1,2,3,4,10]))