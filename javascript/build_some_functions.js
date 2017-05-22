function runningLogger(){
    console.log('I am running!');
}

function multiplyByTen(value){
    return value*10;
}
console.log(multiplyByTen(5));

function stringReturnOne(){
    return "I am string one.";
}

function stringReturnTwo(){
    return "I am string two.";
}

function caller(arg){
    if(typeof arg === 'function'){
        arg();
    }
}

function myDoubleConsoleLog(arg1, arg2){
    if(typeof arg1 === 'function'){
        console.log(arg1());
    }
    if(typeof arg2 === 'function'){
        console.log(arg2());
    }
}

function caller2(arg){
    console.log('starting');
    setTimeout(function(){
        if(typeof arg === 'function'){
            console.log(arg());
        }
    },2000);
    console.log('ending');
    return 'interesting';
}
caller2(myDoubleConsoleLog);