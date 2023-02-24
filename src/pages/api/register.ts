import { doc, setDoc } from "firebase/firestore";

import { db } from "@/config/firebase";

const handler = async (request, response) => {
  try {
    const { first_name, hash, id, last_name, photo_url, username } = JSON.parse(
      request.body
    );

    const userRef = doc(db, "users", `${id}`);
    const docRef = await setDoc(userRef, {
      first_name,
      hash,
      id: `${id}`,
      last_name,
      photo_url,
      username,
    });
    response.status(200).json({ docRef });
  } catch (e) {
    console.error(e);
    response.status(400).end();
  }
};

export default handler;
