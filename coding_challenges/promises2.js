const somePromise = new Promise((resolve,reject) => {
    const rand = Math.random();
    if(rand > 0.5){
        resolve();
    }else{
        reject();
    }
})

somePromise
    .then(() => {
        console.log('resolved');
    })
    .then(() => {
        console.log('I might throw an error...');
        const rand = Math.random();
        if(rand > 0.5) {throw new Error('error!')}
    })
    .then(() => {
        console.log("I didn't throw an error!");
    })
    .catch(() => {
        console.log('rejected');
    })