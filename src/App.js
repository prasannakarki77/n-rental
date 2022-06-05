import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
