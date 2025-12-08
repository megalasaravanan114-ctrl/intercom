import {  Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import IntercomAuthPage from "./pages/auth/IntercomAuthPage";
import TransactionTable from "./components/TransactionTable/TransactionTable";

function App() {
  return (
    <>
      <div className="App">
        <IntercomAuthPage />
        {/* <Home /> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<></>} />
          <Route path="/transcations" element={<TransactionTable />} />
          <Route path="/contact" element={<></>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
