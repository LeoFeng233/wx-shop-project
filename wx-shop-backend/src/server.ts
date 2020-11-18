import mongoose from 'mongoose'
import {MONGODB_URL} from "./config/mongoDBConfig";
import http from 'http'
import app from './app';
import {SERVER_ADDRESS, SERVER_PORT} from "./config/serverConfig";

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(success => {
    const server = http.createServer(app.callback());

    server.on("error", (error) => {
        console.log("服务启动失败");
    });
    server.listen(SERVER_PORT, SERVER_ADDRESS, () => {
        console.log("服务启动成功");
    });
})
