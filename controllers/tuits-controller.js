import * as tuitsDao from "../tuits/tuits-dao.js";

const createTuit = (req, res) => {
    const newTuit = req.body;
    console.log(newTuit);
    newTuit._id = (new Date()).getTime()+'';
    newTuit.stats = {};
    newTuit.stats.likes = 0;
    newTuit.stats.dislikes = 0;
    newTuit.stats.comments = 0;
    newTuit.stats.retuits = 0;
    newTuit.postedBy = {};
    newTuit.postedBy.username = "Jose";
    newTuit.handle = "WebDev";
    tuits.push(newTuit);
    res.json(newTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    //uits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    //res.sendStatus(200);
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.send(status);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    //tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.send(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

