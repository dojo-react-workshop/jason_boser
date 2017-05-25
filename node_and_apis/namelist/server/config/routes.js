var controller = require('./../controllers/controller.js');

module.exports = (app) => {
    app.get('/', controller.homepage);
    app.post('/', controller.homepage);
}