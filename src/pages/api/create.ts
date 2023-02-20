import { addDoc, collection } from "firebase/firestore";

import { db } from "@/config/firebase";

const handler = async (request, response) => {
  try {
    const { gym, grade, attempt, color, instagram, description, ascend } =
      JSON.parse(request.body);

    const docRef = await addDoc(collection(db, "logs"), {
      Gym: gym,
      Grade: grade,
      Attempts: attempt,
      RouteColor: color,
      Sent: ascend,
      VideoURL: instagram,
      Description: description,
    });

    response.status(200).json({ id: docRef });
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
};

export default handler;
