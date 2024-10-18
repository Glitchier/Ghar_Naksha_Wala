import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Loading from "./components/Loading";
import Lenis from "lenis";

const Home = lazy(() => import("./pages/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Work = lazy(() => import("./pages/Work"));
const LatestWorkDetails = lazy(() => import("./components/LatestWorkDetails"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative px-6 sm:px-[6vw] md:px-[8vw] lg:px-[10vw] font-Montserrat min-w-[360px]">
      <div className="h-[100px] w-full"></div>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/latest_work/:id" element={<LatestWorkDetails />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
