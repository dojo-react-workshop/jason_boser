module.exports = (app) => {
    app.get('/',(req,res) => {
        res.render('index');
    })

    app.post('/results',(req,res) => {
        res.render('results',req.body);
    })
}