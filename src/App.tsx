import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ready from "./pages/Ready";
import Main from "./pages/Main";
import Rest from "./pages/Rest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ready />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Rest" element={<Rest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
