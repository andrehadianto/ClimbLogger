import { addDoc, collection } from "firebase/firestore";

import { db } from "@/config/firebase";

const handler = async (request, response) => {
  try {
    const body = JSON.parse(request.body);
    const timestamp = Date.now(); // in milliseconds

    const docRef = await addDoc(collection(db, "logs"), {
      ...body,
      timestamp,
    });

    response.status(200).json({ id: docRef });
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
};

export default handler;
