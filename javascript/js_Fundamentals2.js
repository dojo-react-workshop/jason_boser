function sumBetween(x,y){
    var sum=0;
    for(let i=x; i<=y; i++){
        sum += i;
    }
    console.log('sum = ' + sum);
}
// sumBetween(1,5);

function findMin(arr){
    if(arr==null || arr.length<=0){
        return;
    }
    var min = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
// console.log(findMin([1,2,3,4,5,6,7,8,9,-1,5,20]));

function average(arr){
    if(arr==null) return;

    var sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    var avg = sum/arr.length;
    return avg;
}
// console.log(average([1, 5, 90, 25, -3, 0]));

var me = {
    name:'Jason',
    distance_traveled:0,
    say_name:function(){
        console.log(this.name);
    },
    say_something:function(text){
        console.log(`${this.name} says ${text}`);
    },
    walk:function(){
        this.distance_traveled += 3;
        console.log(`${this.name} is walking, total distance = ${this.distance_traveled}`);
    },
    run:function(){
        this.distance_traveled += 10;
        console.log(`${this.name} is running, total distance = ${this.distance_traveled}`);
    },
    crawl:function(){
        this.distance_traveled += 1;
        console.log(`${this.name} is crawling, total distance = ${this.distance_traveled}`);
    }
}

me.say_name()
me.say_something("hello")
me.walk()
me.run()
me.crawl()
me.walk()
me.walk()
me.walk()