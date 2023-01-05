import Server from "./configs/app";
import Network from "./configs/env/network";

const PORT = new Network(8080);
const server = new Server(PORT.port);

server.run();