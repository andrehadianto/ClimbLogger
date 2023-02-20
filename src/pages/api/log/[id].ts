import { doc, getDoc } from "firebase/firestore";

import { db } from "@/config/firebase";

const handler = async (request, response) => {
  const query = request.query;
  const { id } = query;

  const docRef = doc(db, "logs", id);
  try {
    const data = await getDoc(docRef);
    const respond = {
      id: data.id,
      ...data.data(),
    };

    response.status(200).json(respond);
  } catch (_) {
    response.status(400).end();
  }
};

export default handler;
