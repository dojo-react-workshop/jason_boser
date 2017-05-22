'use strict';

const a = [1,2,3,4,5,7,8,12,13,16];

//Arrays.filter
//filter - returns a new array with all the elements that pass the
//test from the provided function.  value is the element at a[i].
Array.prototype.filter = function(func){
    var newArray = [];
    this.forEach(function(value,index){
        if(func(value,index)){
            newArray.push(value);
        }
    });
    return newArray;
}
console.log(a.filter(function(value,index){
    return value>=7;
    //return;//returns empty array since it returns 'undefined'/false for all
    //return true;//returns the same array since all values are true
    //return (value%2===0);//keeps even numbers
}))