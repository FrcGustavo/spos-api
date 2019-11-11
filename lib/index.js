const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = encodeURIComponent(config.dbName);
const DB_TYPE = encodeURIComponent(config.dbType);

const MONGO_URI = `${DB_TYPE}://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        this.dbName = DB_NAME;
    }

    connect() {
        if(!MongoLib.connection) {
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(error => {
                    if(error) {
                        reject(error);
                    }
                    console.log('Connected succesfuly to mongo');
                    resolve(this.client.db(this.dbName));
                });
            });
        }

        return MongoLib.connection;
    }

    getAll(collection, query) {
        return this.connect().then(db => {
            return db
                .collection(collection)
                .find(query)
                .toArray();
        });
    }

    get(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).findOne({ _id: ObjectId(id) });
        });
    }

    create(collection, data) {
        return this.connect()
            .then(db => {
                return db.collection(collection).insertOne(data);
            })
            .then(result => result.insertedId);
    }

    createMany(collection, data) {
        return this.connect()
            .then(db => {
                return db.collection(collection).insertMany(data);
            })
            .then(result => result.insertedIds);
    }

    update(collection, id, data) {
        return this.connect()
            .then(db => {
                return db
                    .collection(collection)
                    .updateOne(
                        { _id: ObjectId(id) },
                        { $set: data },
                        { upsert: true }
                    );
            })
            .then(result => result.upsertedId || id);
    }

    delete(collection, id) {
        return this.connect()
            .then(db => {
                return db
                    .collection(collection)
                    .deleteOne({ _id: ObjectId(id) });
            })
            .then(() => id);
    }

    deleteMany(collection, filter) {
        return this.connect()
            .then(db => {
                return db
                    .collection(collection)
                    .deleteMany(filter);
            })
            .then(result => result.deletedCount);
    }

    count(collection, query) {
        return this.connect()
            .then(db => {
                return db
                    .collection(collection)
                    .countDocuments(query);
            });
    }
};

module.exports = MongoLib;