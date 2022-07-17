import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ready from "./pages/Ready";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ready />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
