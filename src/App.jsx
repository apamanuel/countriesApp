import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/views/Home/Home";
import Landing from "../src/views/Landing/Landing";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
