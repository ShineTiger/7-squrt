import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Ready from "./pages/Ready";
import Main from "./pages/Main";
import Rest from "./pages/Rest";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <BrowserRouter>
      <div className="lg:w-96 md:w-96 sm:w-full h-screen mx-auto">
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<Ready />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/Rest" element={<Rest />} />
          </Routes>
        </RecoilRoot>
      </div>
    </BrowserRouter>
  );
}

export default App;
