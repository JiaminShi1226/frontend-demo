import { BrowserRouter as Router, Routes, Route, link } from "react-router-dom";
import "./App.css";
import Home from "../pages/Home";
import Shoes from "../pages/Shoes";
import Shoppers from "../pages/Shoppers";

function App() {
  return (
    <Router>
      {/* <div className="App">
        <Home />
      </div> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/allShoes" element={<Shoes />}></Route>
        <Route path="/allShoppers" element={<Shoppers />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
