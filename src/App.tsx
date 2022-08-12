import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Ready from "./pages/Ready";
import Main from "./pages/Main";
import Rest from "./pages/Rest";
import Goal from "./pages/Goal";
import { RecoilRoot } from "recoil";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Rest" element={<Rest />} />
          <Route path="/Ready" element={<Ready />} />
          <Route path="/Goal" element={<Goal />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
