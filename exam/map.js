Array.prototype.map = function (callback) { 
    let results = [];

    for(let i=0; i<this.length; i++){
        results.push(callback(this[i],i,this))
    }

    return results;
}
