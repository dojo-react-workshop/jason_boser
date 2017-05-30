var namelist = [];

module.exports = (() => {

    return {
        homepage: (req,res) => {
            res.render('index',{names:namelist});
        },
        submit: (req,res) => {
            if(req.body.name){
                namelist.push(req.body.name);
                res.json({names:namelist});
            }else{
                res.status(400);
                res.json({});
            }
        },
        delete: (req,res) => {
            namelist.splice(Number(req.body.index),1);
            res.json({names:namelist});
        },
        update: (req,res) => {
            namelist[Number(req.body.index)] = req.body.name;
            res.json({
                name:req.body.name,
                id:req.body.index
            });
        }
    }

})();