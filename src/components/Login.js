import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateInput } from "../utils/validateInput";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setLoading(true);
    const message = validateInput(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) {
      setLoading(false);
      return;
    }
    if (isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              console.log("profile updated");
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        })
        .finally(() => setLoading(false));
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        })
        .finally(() => setLoading(false));
    }
  };

  const toggleSignIn = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="opacity-80"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login background image"
        />
      </div>
      <div className=" w-[98%] md:w-[30%] min-w-[25rem]  absolute top-0 h-screen left-1/2 transform -translate-x-1/2 flex justify-start items-center z-10 pt-10">
        <form className="bg-black bg-opacity-80 rounded-md text-white flex flex-col justify-center items-start w-full px-16 pt-16 pb-44 ">
          <h1 className="font-medium text-3xl pb-6">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h1>
          {isSignUp && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 my-3 w-full rounded-md bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email address"
            className="p-3 my-3 w-full rounded-md bg-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-3 w-full rounded-md bg-gray-700"
          />
          {errorMessage && (
            <p className="text-sm text-red-600 my-1">{errorMessage}</p>
          )}
          <button
            onClick={(e) => handleButtonClick(e)}
            className="p-3 mt-10 mb-4 bg-red-600 font-medium w-full rounded-md flex justify-center"
          >
            {isLoading ? (
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="mr-2 animate-spin"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
              </svg>
            ) : isSignUp ? (
              "Sign Up"
            ) : (
              "Sign In"
            )}
          </button>
          <p className="my-4">
            <span className="text-gray-400">
              {isSignUp ? "Already have an account" : "New to Netflix"}?{" "}
            </span>
            <span onClick={toggleSignIn} className="cursor-pointer">
              {isSignUp ? "Sign In" : "Sign up now"}
            </span>
          </p>
          <p className="text-sm text-gray-400">
            Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
