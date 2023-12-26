import useDarkMode from "./useDarkMode";
import './body.css';

const DarkModeComponent = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(prevDarkMode => !prevDarkMode)}
      style={{
        border: `1px solid ${darkMode ? "White" : "black"}`,
        background: "none",
        color: darkMode ? "white" : "black",
      }}>
      {darkMode ? "Toggle White" : "Toggle Black"}
    </button>
  );
};

export default DarkModeComponent;
