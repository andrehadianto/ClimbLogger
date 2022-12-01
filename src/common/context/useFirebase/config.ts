enum SIGN_IN_OPTIONS {
  EMAIL = "password",
  GOOGLE = "google.com",
  FACEBOOK = "facebook.com",
}

// Configure FirebaseUI
export const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      console.log(authResult);
      console.log(redirectUrl);
      return true; // false to not redirect
    },
  },
  signInFlow: "popup",
  // Redirect url after sign in is successful. Alternatively can use callbacks.signInSuccess fn
  signInSuccessUrl: "/dashboard",
  signInOptions: [
    SIGN_IN_OPTIONS.EMAIL,
    SIGN_IN_OPTIONS.GOOGLE,
    SIGN_IN_OPTIONS.FACEBOOK,
  ],
};
