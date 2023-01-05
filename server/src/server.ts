import Server from "./configs/app";
import Network from "./configs/env/network";
import ConnDB from "./configs/database";

const connectDB = new ConnDB("", "", ""); // input your "Username", "Password", "DatabaseNameCol"
const config = new Network();
const server = new Server(config.port);

connectDB.mongoDB()
server.run();