import "firebaseui/dist/firebaseui.css";

import { useFirebase } from "@/common/context/useFirebase";

export const LoginView = () => {
  const { firebaseWidgetRef } = useFirebase();

  return <div ref={firebaseWidgetRef} />;
};
