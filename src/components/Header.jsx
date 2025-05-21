import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../contexts/AuthContext";
// import Button from "./Button";
import Hero from "./Hero";

const Header = () => {
  // const { signin } = useContext(authContext);

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md">
      <h1 className="text-2xl font-bold text-indigo-600">Logo</h1>

      <div className="flex items-center gap-6">
        <Link to="/" className="text-gray-800 hover:text-indigo-600 font-medium">
          Home
        </Link>
        <Link to="/Notfound" className="text-gray-800 hover:text-indigo-600 font-medium">
          About
        </Link>
        <Link to="/Contact" className="text-gray-800 hover:text-indigo-600 font-medium">
          Contact
        </Link>
      </div>

      <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500">
        Sign Up
      </button>

      {/* <Button /> */}
    </div>
  );
};

export default Header;
