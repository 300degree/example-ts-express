import mongoose from "mongoose";

export default class ConnDB {

    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
        this.mongoDB()
    }

    // Connection Database
    public mongoDB():void {
        const Database = `mongodb+srv://${this.username}:${this.password}@cluster0.nogndxd.mongodb.net/member?retryWrites=true&w=majority`;
        mongoose.Promise = global.Promise;
        mongoose.connect(Database)
        .then(() => {
            console.log('DB Connection Successfully');
        })
        .catch((err) => {
            console.log(err.message);
        });
    }
}