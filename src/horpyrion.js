import { MongoClient } from "mongodb";
import currentUser from "./currentUser";

export default function horpyrion(mongoUrl) {
    const dbPromise = new Promise((resolve, reject) => {
        MongoClient.connect(
            mongoUrl,
            (err, db) => {
                if (err) {
                    return reject(err);
                }
                console.log("Connected correctly to database server");
                return resolve(db);
            }
        );
    });
    return {
        setUser: user => currentUser(dbPromise, user)
    };
}
