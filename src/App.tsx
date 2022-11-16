import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Homepage from "./components/pages/Landing-page/LandingPage";
import PageTwo from "./components/pages/about/PageTwo";
import PageThree from "./components/pages/login/PageThree";
import Content1 from "./components/home-contents/content-1/Content1";
import Content2 from "./components/home-contents/content-2/Content2";
import Content3 from "./components/home-contents/content-3/Content3";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-slate-700 min-h-screen">
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route index element={<Content1 />} />
            <Route path="content2" element={<Content2 />} />
            <Route path="content3" element={<Content3 />} />
          </Route>
          <Route path="/about" element={<PageTwo />} />
          <Route path="/login" element={<PageThree />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
