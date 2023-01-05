import Server from "./configs/app";
import Network from "./configs/env/network";
import ConnDB from "./configs/database";

const connectDB = new ConnDB("admin", "passw0rd"); // input your "Username", "Password"
const PORT = new Network();
const server = new Server(PORT.port);

connectDB.mongoDB()
server.run();