const SESSION = {};

module.exports = (app) => {
    app.get('/',(req,res) => {
        res.render('index');
    })

    app.post('/submit',(req,res) => {
        SESSION.surveyInfo = req.body
        res.redirect('/results');
    })

    app.get('/results',(req,res) => {
        res.render('results',SESSION.surveyInfo);
    })
}