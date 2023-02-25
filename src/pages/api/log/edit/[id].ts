import { doc, updateDoc } from "firebase/firestore";

import { db } from "@/config/firebase";

const handler = async (request, response) => {
  const query = request.query;
  const { id } = query;

  const docRef = doc(db, "logs", id);
  try {
    const body = JSON.parse(request.body);

    const logRef = await updateDoc(docRef, body);

    response.status(200).json({ id: logRef });
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
};

export default handler;
