import mongoose from 'mongoose';
const schema = mongoose.Schema({
    _id: String,
    topic: String,
    likes: Number,
    postedBy: {
        username: String
    },
    liked: Boolean,
    verified: Boolean,
    title: String,
    tuit: String,
    stats: {
        comments: Number,
        retuits:Number,
        likes:Number
    },
}, {collection: 'tuits'});
export default schema;


// db.tuits.insert(
//     {
//         "_id": "123",
//         "topic": "Web Development",
//         "postedBy": {
//             "username": "ReactJS"
//         },
//         "liked": true,
//         "verified": false,
//         "handle": "ReactJS",
//         "time": "2h",
//         "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
//         "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//         "attachments": {
//             "video": "unKvMC3Y1kI"
//         },
//         "logo_image": "../tuiter/images/react-blue.png",
//         "avatar_image": "../tuiter/images/react-blue.png",
//         "stats": {
//             "comments": 123,
//             "retuits": 234,
//             "likes": 345
//         }
//     }
// )

// load mongoose library
// create schema
// tuit property of type String
// likes property of type Number



// which collection name
// export schema so it can be used elsewhere

