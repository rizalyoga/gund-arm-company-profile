import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/landing-page/LandingPage";
import Content1 from "./components/home-contents/content-1/Content1";
import Content2 from "./components/home-contents/content-2/Content2";
import Content3 from "./components/home-contents/content-3/Content3";
import UnknownPage from "./pages/unknown-page/UnknownPage";
import Loading from "./components/common/loading/Loading";

const AboutPage = lazy(() => import("./pages/about/AboutPage"));
const LoginPage = lazy(() => import("./pages/login/LoginPage"));
const DetailMember = lazy(() => import("./pages/detail-member/DetailMember"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-container min-h-screen">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<LandingPage />}>
              <Route index element={<Content1 />} />
              <Route path="content1" element={<Content1 />} />
              <Route path="content2" element={<Content2 />} />
              <Route path="content3" element={<Content3 />} />
            </Route>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about/member/:id" element={<DetailMember />} />
            <Route path="*" element={<UnknownPage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
