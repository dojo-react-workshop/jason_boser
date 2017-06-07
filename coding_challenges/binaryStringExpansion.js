//binary string expansion
//10?1
//replace question marks with 0 or 1
function binaryStringExpansion(str, base='', results=[]){
    if(str.length === 0){
        results.push(base);
    }else{
        if(str[0] === '?'){
            binaryStringExpansion(str.slice(1), base+'0', results);
            binaryStringExpansion(str.slice(1), base+'1', results);
        }else{
            binaryStringExpansion(str.slice(1), base+str[0], results);
        }
    }
    return results;
}

console.log(binaryStringExpansion('10?1?'))

//array of ints, return the maximum product of any 3

