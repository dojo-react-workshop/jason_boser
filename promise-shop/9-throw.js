'use strict' 
require('es6-promise')

function parsePromised(){
    return new Promise((resolve,reject) => {
        try{
            JSON.parse();
            resolve();
        }catch(err){
            reject(err);
        }
    })
}

parsePromised()
    .then(null,console.log);
