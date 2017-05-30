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
//solution 1: create a grid of 0 (block) and 1 open, count the 'contained' 1's
//solution 2: find the max and iterate on each side of it
//      a. is the current less than left bound
//          1) yes => add L-C to the volume
//          2) no => move the left bound
//      b. repeat for the right side

//        *
//    *   *
//    *   * *
//* c *   * * c *
//* c * * * * * *
//* * * * * * * *
//L C     M     R
