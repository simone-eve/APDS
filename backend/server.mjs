import https from "https"
import http from "http"
import express from "express";
import fs from "fs";
import posts from "./routes/post.mjs"


const PORT = 3000;
const app = express();

const options = {
    key: fs.readFileSync('keys/privatekey.pem'),
    cert: fs.readFileSync('keys/certificate.pem')
}

app.use(cors());
app.use(express.json());

app.use((reg,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
})

app.use("/post", posts);
app.route("/post", posts);


let server = https.createServer(options,app)
console.log(PORT)
server.listen(PORT);
