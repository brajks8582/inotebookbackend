const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017';

const connectToMongo = async () => {
    console.log('Starting mongo connection');
    let startMongoConnection = await mongoose.connect(mongoURI);
    console.log('Mongo connectected')
}

module.exports = connectToMongo;

