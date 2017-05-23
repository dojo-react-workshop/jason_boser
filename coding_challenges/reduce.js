Array.prototype.reduce = function(callback,curVal){
    let i=0;

    if(curVal === undefined){
        curVal = this[0];
        i=1;
    }

    for(i; i<this.length; i++){
        curVal = callback(curVal,this[i]);
    }
    return curVal;
}

const array = [1,2,3,4];

const sum = array.reduce((currentSum, currentValue) => {
    return currentSum * currentValue;
},100);

console.log(sum);