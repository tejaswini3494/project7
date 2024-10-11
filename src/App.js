
import "./App.css";

import Guardian from "./Componunts/Guardian/Guardian";
import Heritage from "./Componunts/Heritage/Heritage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./Componunts/Page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/guardian" element={<Guardian />} />
          <Route path="/heritage" element={<Heritage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;