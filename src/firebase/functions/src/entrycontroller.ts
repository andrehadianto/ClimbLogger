import { Response } from "express";
import { db } from "./config/firebase";

type EntryType = {
    title: String,
    text: String
};

type Request = {
    body: EntryType,
    params: {entryId: String}
};

const addEntry = async(req: Request, res: Response) => {
    const { title, text } = req.body;
    try {
        const entry = db.collection("entries").doc()
        const entryObj = {
            id: entry.id,
            title,
            text
        };
        entry.set(entryObj);

        res.status(200).send({
            status: "success",
            message: "entry added succesfuly",
            data: entryObj
        });
    } catch(error)  {
        if (error instanceof Error) {
          res.status(500).json(error.message);
        }
    }
}

export {addEntry}