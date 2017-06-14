const LARGE_MATRIX = [
    [2,61,2,61],
    [1,6,4,5],
    [17,3,61,5]
]

const SMALL_MATRIX = [
    [1,6],
    [17,3]
]

const SMALL_MATRIX2 = [
    [1,6],
    [17,4]
]

//Verify is the small matrix is contained in the larger matrix

function matrixSearch (large, small) {
    for(let y=0; y<=large.length-small.length; y++){
        for(let x=0; x<=large[y].length-small[0].length; x++){
            let found = true;
            for(let ys=0; ys<small.length; ys++){
                for(let xs=0; xs<small[ys].length; xs++){
                    if(small[ys][xs] !== large[y+ys][x+xs])
                        found = false;
                }
            }
            if(found) return true;
        }
    }
    return false;
}

console.log(matrixSearch(LARGE_MATRIX,SMALL_MATRIX))
console.log(matrixSearch(LARGE_MATRIX,SMALL_MATRIX2))