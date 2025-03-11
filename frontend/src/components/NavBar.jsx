import { FaMoon, FaSun } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
const NavBar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="flex p-5 justify-between items-center">
      <h1 className="text-2xl uppercase font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
        <Link to={"/"}>
        Products Shop 🛒
        </Link>
      </h1>
      <div className="flex space-x-4">
        <Link to={"/create"}>
        <button className="p-2 text-white bg-gray-700 rounded-lg dark:bg-white dark:text-gray-700">
          <IoMdAddCircle size={20} />
        </button>
        </Link>
        <button
          onClick={toggleDarkMode}
          className="p-2 text-white bg-gray-700 rounded-lg dark:bg-white dark:text-gray-700"
        >
          {darkMode ? <FaSun size={20}/> : <FaMoon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
