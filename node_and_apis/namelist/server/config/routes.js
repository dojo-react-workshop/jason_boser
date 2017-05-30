var controller = require('./../controllers/controller.js');

module.exports = (app) => {
    app.get('/', controller.homepage);

    app.post('/submit', controller.submit);

    app.post('/delete', controller.delete);

    app.post('/update', controller.update);
}