import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Home from "./pages/home";
import Footer from "./shared/footer";
import { theme } from "./theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
