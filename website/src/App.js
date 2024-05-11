import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./companents/Home";
import { Navbar } from "./companents/Navbar";
import { Products } from "./companents/Products";
import { About } from "./companents/About";
import { Contact } from "./companents/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;



