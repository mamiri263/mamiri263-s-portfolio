import "./DarkMode.css";
import { ChangeEventHandler } from "react";
import React from "react";

// 1
const setDark = () => {

  // 2
  localStorage.setItem("theme", "light");

  // 3
  document.documentElement.setAttribute("data-theme", "light");
};

const setLight = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

// 5
const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () => {
  return (
    <div className="toggle-theme-wrapper">
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"

          // 6
          onChange={toggleTheme}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
};

export default DarkMode;