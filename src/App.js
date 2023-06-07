import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import BasketMenu from "./components/global/BasketMenu";
import NavigationBar from "./components/global/NavigationBar";
import Checkout from "./pages/checkout/Checkout";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import ContactHours from "./pages/contact/ContactHours";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavigationBar />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Contact" element={<ContactHours />} />
        </Routes>

        <BasketMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
