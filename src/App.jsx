import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import "./App.css";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/platform" element={<Platform />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
