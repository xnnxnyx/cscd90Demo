
import express from "express";
import {dbo} from "./connection.mjs";
import { createServer } from "http";

const PORT = 4000;
const app = express();

app.use(express.json());

const httpServer = createServer(app).listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log("HTTP server on http://localhost:%s", PORT);
  
    // perform a database connection when server starts
    dbo.connectToServer((err) => {
      if (err) console.error(err);
    });
  });

  