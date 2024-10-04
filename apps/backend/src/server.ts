import type { Express, Request, Response } from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import express from "express"

const app: Express = express();
const httpServer = createServer(app);

app.get("/", (req, res) => {
  res.send("Fuck you")
})

const io = new Server(httpServer, {
  /* options */
});

io.on("", () => {
})

httpServer.listen(3000);
