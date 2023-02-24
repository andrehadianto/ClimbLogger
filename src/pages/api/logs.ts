import { collection, getDocs, orderBy, query, where } from "firebase/firestore";

import { db } from "@/config/firebase";

const handler = async (request, response) => {
  const logArr = [];

  try {
    const { id: userRef } = JSON.parse(request.body);

    const logQuery = query(
      collection(db, "logs"),
      where("userRef", "==", userRef),
      orderBy("Timestamp", "desc") // latest first
    );
    const querySnapshot = await getDocs(logQuery);
    querySnapshot.forEach((doc) => {
      logArr.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    response.status(200).json(logArr);
  } catch (e) {
    console.error(e);
    response.status(400).end();
  }
};

export default handler;
