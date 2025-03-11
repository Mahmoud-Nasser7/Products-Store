import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Create from "./pages/Create";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 px-5">
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
       
  
      </div>
    </div>
  );
};

export default App;