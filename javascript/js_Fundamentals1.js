const x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
for(let i=0; i<x.length; i++){
    console.log(i);
}

x.push(100);
x.push(["hello", "world", "JavaScript is Fun"]);

// console.log(x);


var sum=0;
for(let i=1; i<=500; i++){
    sum += i;
}
console.log('sum = ' + sum);



const y = [1, 5, 90, 25, -3, 0];
var min = y[0];
for(let i=1; i<y.length; i++){
    if(y[i] < min){
        min = y[i];
    }
}
console.log('min = ' + min);



const z = [1, 5, 90, 25, -3, 0];
var sum = y[0];
for(let i=1; i<y.length; i++){
    sum += y[i];
}
var avg = sum/y.length;
console.log('avg = ' + avg);



var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for(key in newNinja){
    console.log(key + ": " + newNinja[key]);
}