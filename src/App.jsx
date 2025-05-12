//component and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import { LayoutGroup } from "framer-motion";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <GlobalStyles />
      <LayoutGroup>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<Home />} />
        </Routes>
      </LayoutGroup>
    </>
  );
}

export default App;
