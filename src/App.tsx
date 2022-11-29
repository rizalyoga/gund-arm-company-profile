import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config/firebase";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/landing-page/LandingPage";
import Content1 from "./components/home-contents/content-1/Content1";
import Content2 from "./components/home-contents/content-2/Content2";
import Content3 from "./components/home-contents/content-3/Content3";
import UnknownPage from "./pages/unknown-page/UnknownPage";
import Loading from "./components/common/loading/Loading";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";

const AboutPage = lazy(() => import("./pages/about-page/AboutPage"));
const AuthenticationPage = lazy(
  () => import("./pages/authentication-page/AuthenticationPage")
);
const DashboardPage = lazy(() => import("./pages/dashboard-page/Dashboard"));
const DetailMemberPage = lazy(
  () => import("./pages/detail-member-page/DetailMember")
);

initializeApp(firebaseConfig.config);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-container min-h-screen overflow-hidden">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<LandingPage />}>
              <Route index element={<Content1 />} />
              <Route path="content1" element={<Content1 />} />
              <Route path="content2" element={<Content2 />} />
              <Route path="content3" element={<Content3 />} />
            </Route>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<AuthenticationPage />} />
            <Route path="/reset-password" element={<AuthenticationPage />} />
            <Route path="/register" element={<AuthenticationPage />} />
            <Route path="/about/member/:id" element={<DetailMemberPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<UnknownPage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
