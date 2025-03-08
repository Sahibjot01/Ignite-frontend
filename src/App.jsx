//component and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import { LayoutGroup } from "framer-motion";
function App() {
  return (
    <>
      <Nav />
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
