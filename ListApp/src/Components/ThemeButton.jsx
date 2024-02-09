import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon } from 'react-icons/fa';
import { MdWbSunny } from "react-icons/md"
function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{ position: "absolute", top: 12, right: 10 }}>
            <button onClick={toggleTheme}>{theme === 'dark' ? <MdWbSunny /> : <FaMoon />}</button>
        </div>
    )
}

export default ThemeButton;
