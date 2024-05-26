import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import Resurs from "./componets/Resurs";
import Footer from "./componets/Footer";
import { useContext } from "react";
import { EnglishContex } from "./contex";
import User from "./componets/User";
import Platform from "./componets/platform";
import CardDetails from "./componets/CardDetails";
import WebSites from "./componets/webSites";
import OurInfo from "./componets/OurInfo";
// import Slider from "./componets/Slider";s

function App() {
  const { modal } = useContext(EnglishContex);
  return (
    <div
      className="App"
      style={{
        background: modal ? "#0F1C2E" : "white",
        color: modal ? "white" : "#0F1C2E",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/resurs" element={<Resurs />} />
        <Route path="/user" element={<User />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/details" element={<CardDetails />} />
        <Route path="/web" element={<WebSites />} />
        <Route path="/nas" element={<OurInfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
