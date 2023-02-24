import { addDoc, collection } from "firebase/firestore";

import { db } from "@/config/firebase";

const handler = async (request, response) => {
  try {
    const {
      userRef,
      gym,
      grade,
      attempt,
      color,
      instagram,
      description,
      ascend,
    } = JSON.parse(request.body);
    const timeStamp = Date.now(); // in milliseconds

    const docRef = await addDoc(collection(db, "logs"), {
      userRef,
      Gym: gym,
      Grade: grade,
      Attempts: attempt,
      RouteColor: color,
      Sent: ascend,
      VideoURL: instagram,
      Description: description,
      Timestamp: timeStamp,
    });

    response.status(200).json({ id: docRef });
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
};

export default handler;
