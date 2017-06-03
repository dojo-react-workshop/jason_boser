function subsets(str=''){
    if(str.length===0){
        return [''];
    }

    let subs = subsets(str.slice(1));
    let count = subs.length;

    for(let i=0; i<count; i++){
        subs.push(str[0] + subs[i]);
    }

    return subs;
}

console.log(subsets('abc'))


function subsets2(substring,string){
    
}