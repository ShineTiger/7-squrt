import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ready from "./pages/Ready";
import Main from "./pages/Main";
import Rest from "./pages/Rest";
import { RecoilRoot } from "recoil";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Ready />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Rest" element={<Rest />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
