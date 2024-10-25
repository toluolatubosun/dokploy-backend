import http from "http";
import express from "express";
import { config } from "dotenv";

config();
const app = express();
const httpServer = http.createServer(app);

const PORT = process.env.PORT || 4000;

// Listen to server port
httpServer.listen(PORT, async () => {
    console.log(`:::> Server listening on port ${PORT} @ http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.send(`Hello World from ${process.env.APP_NAME}`);
});

// On server error
app.on("error", (error) => {
    console.error(`<::: An error occurred on the server: \n ${error}`);
});

export default app;
