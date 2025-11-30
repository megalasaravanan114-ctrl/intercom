import {  Routes, Route} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="App">
        <Home />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/about" element={<></>} />
          <Route path="/services" element={<></>} />
          <Route path="/contact" element={<></>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
