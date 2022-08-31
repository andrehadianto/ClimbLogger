import * as functions from "firebase-functions";
import * as express from "express";
import { addEntry } from "./entrycontroller";
const app = express();

app.get("/", (req, res)=> res.status(200).send("hey"));
app.post("/entries", addEntry)
exports.app = functions.https.onRequest(app);


