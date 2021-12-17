import { useEffect, useState } from "react";
import initializeFirebase from "../components/Authentication/Firebase/Firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

// initialize fireabse
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [success, setSuccess] = useState("");

  const auth = getAuth();

  // sign in with google
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = (location, history) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const destination = location?.state?.from || "/";
        history.push(destination);
        setAuthError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
        setUser({});
      })
      .finally(() => setLoading(false));
  };

  // register an user
  const registerUser = (email, password, name, location, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        // after creating an user we have to send data to firebase.
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});

        setAuthError("");
        history.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
        setSuccess("");
        setUser({});
      })
      .finally(() => setLoading(false));
  };

  // login an user
  const loginUser = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.push(destination);

        setAuthError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
        setSuccess("");
        setUser({});
      })
      .finally(() => setLoading(false));
  };

  // logout
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setLoading(false));
  };

  //observe current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  //
  return {
    user,
    signInWithGoogle,
    registerUser,
    loginUser,
    logOut,
    loading,
    authError,
    success,
  };
};

export default useFirebase;
