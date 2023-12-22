import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="absolute bg-gradient-to-b from-black px-8 py-1 w-full z-10 flex justify-between items-center">
      <img
        className="w-36"
        src="https://ongpng.com/wp-content/uploads/2023/04/7.Netflix-Logo-1728x734-1.png"
        alt="logo"
      />
      {user && (
        <div className="flex gap-3">
          <img
            className="h-10 w-10"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="user logo"
          />
          <button
            className="font-medium text-sm bg-gray-900 rounded-md px-3 hover:bg-gray-800"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
