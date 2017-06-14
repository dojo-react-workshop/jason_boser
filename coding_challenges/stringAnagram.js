//Given a string, return an array where each element is
//a different anagram (sequence of letters from the given
//string).

function anagram (str, base='', result=[]) {
    if(str.length === 0)
        result.push(base);

    for(let i=0; i<str.length; i++){
        anagram(
            str.slice(0,i) + str.slice(i+1),
            base + str.slice(i,i+1),
            result
        )
    }

    return result;
}

console.log(anagram('ABC'))