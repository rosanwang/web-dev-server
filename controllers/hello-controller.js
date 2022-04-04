// controllers are functions, classes, modules which handle HTTP requests

const helloController = (app) => {
    app.get('/hello', (req, res) => {
        res.send('Life is good!')
    });
}

export default helloController;

