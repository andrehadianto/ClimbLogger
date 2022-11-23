import { Response } from "express";
import { db } from "./config/firebase";

type EntryType = {
    User: string,
    LogID: string,
    Attempts: String,
    Description: String,
    Grade: String,
    Gym: String,
    ImageURL: String,
    RouteColor: String,
    Sent: boolean,
    VideoURL : String
};

type Request = {
    body: EntryType,
    params: {LogID: string,User: string}
};

const addLog = async(req: Request, res: Response) => {
    const { User,LogID,Attempts, Description,Grade,Gym,ImageURL,RouteColor,Sent,VideoURL } = req.body;
    try {
        const entry = db.collection("Users").doc(User).collection("Logs").doc(LogID)
        const entryObj = {
            id: LogID,
            Attempts, 
            Description,
            Grade,
            Gym,
            ImageURL,
            RouteColor,
            Sent,
            VideoURL 
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

const getAllLogs = async(req: Request, res: Response) => {
    try {
        const allLogs: EntryType[] =[]
        const querySnapshot = await db.collection('Users').doc('QQ123').collection('Logs').get()
        querySnapshot.forEach((doc:any) => allLogs.push(doc.data()))
        return res.status(200).json(allLogs)

    } catch (error)
    { 
        if (error instanceof Error) {
           return res.status(500).json(error.message);
          }
        else 
          {return res.status(500).json("error")}
    }
}

const updateLog = async(req: Request, res: Response) => {
    const { Attempts, Description,Grade,Gym,ImageURL,RouteColor,Sent,VideoURL } = req.body;
    const { LogID,User } = req.params;
    try{
        const entry = db.collection('Users').doc(User).collection("Logs").doc(LogID)
        const curData = (await entry.get()).data() || {}
        const entryObj = {
            id: LogID || curData.id,
            Attempts: Attempts || curData.Attempts, 
            Description : Description||curData.Description,
            Grade : Grade||curData.Grade,
            Gym : Gym ||curData.Gym,
            ImageURL : ImageURL||curData.ImageURL,
            RouteColor : RouteColor||curData.RouteColor,
            Sent : Sent||curData.Sent,
            VideoURL :VideoURL||curData.VideoURL
        }
        await entry.set(entryObj).catch(error => {
            return res.status(400).json({
              status: 'error',
              message: error.message
            })
          })
      
          return res.status(200).json({
            status: 'success',
            message: 'entry updated successfully',
            data: entryObj
          })
    } catch(error)  {
        if (error instanceof Error) {
          res.status(500).json(error.message);
        }
        else 
        {return res.status(500).json("error")}
    }
    return res.status(400).json("no code path")

}

const deleteEntry = async (req:Request,res: Response)=>{
    const {LogID,User} = req.params
    try{
        const entry = db.collection("Users").doc(User).collection("Logs").doc(LogID)
        try{
            await entry.delete()
            return res.status(200).json({
                status: 'success',
                message: 'entry deleted successfully',
              })
        }catch(error)  {
            if (error instanceof Error) {
              res.status(500).json(error.message);
            }
            else 
            {return res.status(500).json("error")}
        }
        
    } catch(error)  {
        if (error instanceof Error) {
          res.status(500).json(error.message);
        }
        else 
        {return res.status(500).json("error")}
    }
    return res.status(400).json("no code path")
}
export {addLog,getAllLogs,updateLog,deleteEntry}