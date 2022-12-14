import {createContext, MutableRefObject, PropsWithChildren, useContext, useEffect, useRef, useState,} from "react";
import {useDispatch} from "react-redux";

import {uiConfig} from "./config";

import {auth} from "@/config/firebase";
import {login} from "@/store/userSlice";

export interface FirebaseContextType {
  firebaseWidgetRef?: MutableRefObject<any>;
}

const FirebaseContext = createContext<FirebaseContextType | null>(null);

export const FirebaseContextProvider = ({
                                          children,
                                        }: PropsWithChildren<{}>) => {
  const dispatch = useDispatch();
  const [firebaseUi, setFirebaseUi] = useState<typeof import("firebaseui") | null>(null);

  const firebaseWidgetRef = useRef(null);

  useEffect(() => {
    // Load the package only after the component has mounted for SSR
    setFirebaseUi(require("firebaseui"));
  }, []);

  useEffect(() => {
    if (firebaseUi === null) return;

    // Get or Create a firebaseUI instance
    const firebaseUiWidget =
      firebaseUi.auth.AuthUI.getInstance() || new firebaseUi.auth.AuthUI(auth);
    if (uiConfig.signInFlow === "popup") firebaseUiWidget.reset();

    // Track the auth state to reset firebaseUi if the user signs out
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
          })
        );
      } else {
        firebaseUiWidget.reset();
      }
    });

    // Trigger the callback if any was set
    // if (uiCallback) uiCallback(firebaseUiWidget);

    // Render the widget
    firebaseUiWidget.start(firebaseWidgetRef.current, uiConfig);

    return () => {
      firebaseUiWidget.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseUi, uiConfig]);

  return (
    <FirebaseContext.Provider
      value={{
        firebaseWidgetRef,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = (): FirebaseContextType => {
  const context = useContext(FirebaseContext);
  if (!context) throw new Error("unable to find FirebaseContext");

  return context;
};
