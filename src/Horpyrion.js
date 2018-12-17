import { MongoClient } from "mongodb";
import UserContext from "./UserContext";

export default class Horpyrion {
    constructor(mongoUrl) {
        this._mongoUrl = mongoUrl;
    }
    async sync() {
        return new Promise((resolve, reject) => {
            MongoClient.connect(
                this._mongoUrl,
                (err, db) => {
                    if (err) {
                        return reject(err);
                    }
                    console.log("Connected correctly to database server");
                    this._db = db;
                    return resolve(db);
                }
            );
        });
    }

    async authorize() {
        return UserContext.Authorize();
    }

    getRootUser() {
        return new UserContext(UserContext.ROOT_USER_TOKEN, this._db);
    }

    getUser(userToken) {
        return new UserContext(userToken, this._db);
    }
}
