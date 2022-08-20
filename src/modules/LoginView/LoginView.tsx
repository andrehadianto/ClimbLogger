import { onAuthStateChanged } from "firebase/auth";
import "firebaseui/dist/firebaseui.css";
import { auth } from "firebaseui";
import { useEffect, useRef, useState } from "react";

interface Props {
  // https://github.com/firebase/firebaseui-web#configuration
  uiConfig: auth.Config;

  // Callback that will be passed the FirebaseUi instance before it starts
  uiCallback?(ui: auth.AuthUI): void;

  // The Firebase App auth instance to use
  firebaseAuth: any; // Authentication config
}

export const LoginView = ({ firebaseAuth, uiConfig, uiCallback }: Props) => {
  const [firebaseui, setFirebaseui] = useState<
    typeof import("firebaseui") | null
  >(null);
  const [userSignedIn, setUserSignedIn] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Load the package only after the component has mounted for SSR
    setFirebaseui(require("firebaseui"));
  }, []);

  useEffect(() => {
    if (firebaseui === null) return;

    // Get or Create a firebaseUI instance
    const firebaseUiWidget =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebaseAuth);
    if (uiConfig.signInFlow === "popup") firebaseUiWidget.reset();

    // Track the auth state to reset firebaseUi if the user signs out
    const unregisterAuthObserver = onAuthStateChanged(firebaseAuth, (user) => {
      if (!user && userSignedIn) firebaseUiWidget.reset();
      setUserSignedIn(!!user);
    });

    // Trigger the callback if any was set
    if (uiCallback) uiCallback(firebaseUiWidget);

    // Render the widget
    firebaseUiWidget.start(elementRef.current, uiConfig);

    return () => {
      unregisterAuthObserver();
      firebaseUiWidget.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseui, uiConfig]);

  return <div ref={elementRef} />;
};
