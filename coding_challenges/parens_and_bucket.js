//feed a string with any characters, including ()
//return a boolean indicating if parentheses match up
console.log(validParens('(afwe9(fewaf)fea)kjlwie'))
console.log(validParens('(afwe9(fewaf)fea)kjlwie)'))

function validParens (str) {
    let counter =0; 

    for(let i=0; i<str.length; i++){
        if(str[i]==='(') counter++;
        else if(str[i]===')') counter--;
        if(counter<0) return false;
    }
    if(counter===0) return true;
    else return false;
}

//array of integers indicating terrace heights [3,1,5,6,4,2,3]
//how much water can be contained? (c)
//        *
//    *   *
//    *   * *
//* c *   * * c *
//* c * * * * * *
//* * * * * * * *
//L C     M     R

function terraceHeights(arr){
    let left = 0;
    let right = arr.length-1;
    let volume = 0;
    let max = 0;

    for(let i=1; i<arr.length; i++){
        if(arr[i] > arr[max]) max = i;
    }

    for(let curr=1; curr<max; curr++){
        if(arr[curr] < arr[left]){
            volume += (arr[left]-arr[curr]);
        }else{
            left=curr;
        }
    }

    for(let curr=arr.length-2; curr>max; curr--){
        if(arr[curr] < arr[right]){
            volume += (arr[right]-arr[curr]);
        }else{
            right=curr;
        }
    }

    return volume;
}

console.log(terraceHeights([3,1,5,6,4,2,3]));
console.log(terraceHeights([3,1,5,2,6,4,2,3]));
console.log(terraceHeights([6,5,4,3,2,1,2,3,4,5,6]));
console.log(terraceHeights([1,2,3,4,5,6,5,4,3,2,1]));
