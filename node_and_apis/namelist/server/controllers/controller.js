var namelist = [];

module.exports = (() => {

    return {
        homepage: (req,res) => {
            if(req.body.name){
                namelist.push(req.body.name);
            }
            res.render('index',{names:namelist});
        }
    }

})();