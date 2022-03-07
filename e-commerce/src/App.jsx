import "./App.css";
import Viewpage from "./components/Viewpage";
import { Route, Routes } from "react-router-dom";
import Cartpage from "./components/Cartpage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/viewpage" element={<Viewpage />} />
        <Route path="/cartpage" element={<Cartpage />} />
      </Routes>
    </div>
  );
}

export default App;
