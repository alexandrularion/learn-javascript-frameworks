import React from "react";
// Task 4: State
const UserSettings = () => {
  const [themeMode, setThemeMode] = React.useState("Dark");
  const [language, setLanguage] = React.useState("RO");

  const handleThemeModeClick = () => {
    if (themeMode === "Dark") {
      setThemeMode("Light");
    } else {
      setThemeMode("Dark");
    }
  };

  const handleLanguageClick = () => {
    if (language === "RO") {
      setLanguage("EN");
    } else {
      setLanguage("RO");
    }
  };

  return (
    <div>
      <p>Theme mode: {themeMode}</p>
      <p>Language: {language}</p>

      <button onClick={handleThemeModeClick}>Switch theme</button>
      <button onClick={handleLanguageClick}>Switch language</button>
    </div>
  );
};

export default UserSettings;
