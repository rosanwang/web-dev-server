import express from 'express';
import cors from 'cors';   //establishes rules by which resources can be shared across domains
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
//import tuitsController from "./tuits/tuits-controller.js";
import mongoose from 'mongoose';

//    'mongodb://localhost:27017/webdev'
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(express.json()); // parses JSON from HTTP request body
app.use(cors());

//request to http://localhost:4000/hello URL triggers function
//from the view of the server, http://localhost:4000/hello is the endpoint

helloController(app);
userController(app);
tuitsController(app);

app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')});
app.listen(process.env.PORT || 4000);
//app.listen(4000);