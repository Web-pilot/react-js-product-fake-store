import "./App.css";
import SearchAppBar from "./components/AppBar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingleRecipe from "./components/SingleRecipe";

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleRecipe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
