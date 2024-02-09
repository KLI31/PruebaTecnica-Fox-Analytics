import "./App.css";
import InfoApp from "./Components/InfoApp/InfoApp";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeButton from "./Components/ThemeButton"
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider>
      <InfoApp />
      <ThemeButton />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
