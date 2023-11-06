
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import './App.css';

function App() {
  return (
   <Router>
    <Navbar />
       <Routes>
           <Route path="/" element = { <Home /> } />
           <Route path="/products" element = { <Products /> } />
           <Route path="/contact" element = { <Contact /> } />
           <Route path="/*" element = { <PageNotFound /> } />
       </Routes>
       <Footer />
   </Router>
  );
}


export default App;