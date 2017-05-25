var helper = require('./6-modular_helper');

helper(process.argv[2],process.argv[3],(err,data) => {
    if(err){
        console.log('ERROR');
    }else{
        for(let i=0; i<data.length; i++){
            console.log(data[i]);
        }
    }
})
