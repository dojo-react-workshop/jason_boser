'use strict';

const a = [1,2,3,4,5,7,8,12,13,16];

//Arrays.map
//map - builds a new array with the results of calling a function 
//on every element in the array.  value is the element at a[i].
Array.prototype.map = function(func){
    var newArray = [];
    this.forEach(function(value,index){
        newArray.push(func(value,index));
    });
    return newArray;
}
console.log(a.map(function(value){return value*=2}));