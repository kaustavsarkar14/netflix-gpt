import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { LOGO_URL } from "../utils/constants";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import { toggleGptSearchView } from "../redux/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="absolute bg-gradient-to-b from-black  md:px-8 py-1 w-full z-10 flex justify-between items-center">
      <img className="w-36" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex gap-3">
          <button
            className="font-medium flex justify-center items-center gap-2 text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md px-2 hover: backdrop-blur-md bg-opacity-20 "
            onClick={handleGptSearchClick}
          >
            <AutoAwesomeRoundedIcon />{" "}
            <p className="hidden md:block">GPT Search</p>
          </button>
          <img
            className="h-10 w-10 rounded-sm"
            src={user.photoURL}
            alt="user logo"
          />
          <button
            className="font-medium flex justify-center items-center gap-2 text-sm bg-gray-900 rounded-md px-3 hover:bg-gray-800 backdrop-blur-md bg-opacity-20"
            onClick={handleSignOut}
          >
            <LogoutRoundedIcon /> <p className="hidden md:block">Log out</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
