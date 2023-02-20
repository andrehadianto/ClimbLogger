import { collection, getDocs, orderBy, query } from "firebase/firestore";

import { db } from "@/config/firebase";

const handler = async (_, res) => {
  const respond = [];

  const querySnapshot = await getDocs(
    query(collection(db, "logs"), orderBy("Timestamp", "desc")) // latest first
  );
  querySnapshot.forEach((doc) => {
    respond.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  res.status(200).json(respond);
};

export default handler;
