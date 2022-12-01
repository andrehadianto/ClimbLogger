import { collection, getDocs } from "firebase/firestore";

import { db } from "@/config/firebase";

const handler = async (_, res) => {
  const respond = [];

  // TODO: add helper function for firestore related functions
  const querySnapshot = await getDocs(collection(db, "logs"));
  querySnapshot.forEach((doc) => {
    respond.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  res.status(200).json(respond);
};

export default handler;
