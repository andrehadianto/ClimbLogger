import * as functions from "firebase-functions";
import * as express from "express";
import { addLog,getAllLogs,updateLog,deleteEntry } from "./entrycontroller";
const app = express();

app.get("/", (req, res)=> res.status(200).send("hey"));
//app.post("/entries", addEntry)
app.post("/logs", addLog)
app.get("/logs",getAllLogs)
app.patch("/logs/:LogID/:User",updateLog)
app.delete("/logs/:LogID/:User",deleteEntry)

exports.app = functions.https.onRequest(app);



