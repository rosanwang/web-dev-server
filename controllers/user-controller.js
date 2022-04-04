import people from './users/users.js';  // import the array of users
let users = people;

// use express instance app to declare HTTP GET
// request pattern /api/users to call a function
const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
}

const deleteUser = (req, res) => {
    const userId = req.params['uid'];
    users = users.filter(usr =>
        usr._id !== userId);
    res.sendStatus(200);
}

const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
}


const findUsersByType = (type) => {
    return people.filter(people => type === people.type);
}

const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(u => u._id === userId);
    res.json(user);
}

const updateUser = (req, res) => {
    const userId = req.params['uid'];
    const updatedUser = req.body;
    users = users.map(usr =>
        usr._id === userId ?
            updatedUser :
            usr);
    res.sendStatus(200);
}

// function runs when /api/users requested
// responds with array of users
const findAllUsers = (req, res) => {
    const type = req.query.type;
    //sends data to the server embedded in the request body after ?
    // parameters are name value pairs separated by &
    if(type) {
        res.json(findUsersByType(type));
        return;
    }
    res.json(users);
}

export default userController;
// exports so server.js can import

