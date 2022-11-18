import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Homepage from "./components/pages/landing-page/LandingPage";
import AboutPage from "./components/pages/about/AboutPage";
import PageThree from "./components/pages/login/LoginPage";
import Content1 from "./components/home-contents/content-1/Content1";
import Content2 from "./components/home-contents/content-2/Content2";
import Content3 from "./components/home-contents/content-3/Content3";
import DetailUser from "./components/pages/detail-user/DetailUser";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-slate-700 min-h-screen">
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route index element={<Content1 />} />
            <Route path="content1" element={<Content1 />} />
            <Route path="content2" element={<Content2 />} />
            <Route path="content3" element={<Content3 />} />
          </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<PageThree />} />
          <Route path="/about/member/:id" element={<DetailUser />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
