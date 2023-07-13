import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Benefits from "../components/LogIn";
import OurClasses from "../components/NuestrasClases";
import Register from "../components/Register";
import { SelectedPage } from "../types";
import Footer from "../components/Footer";
import LogIn from "../components/LogIn";
import NuestrasClases from "../components/NuestrasClases";

const Landing = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // When te component dissapears (avoiding memory leaks & bugs)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <LogIn setSelectedPage={setSelectedPage} />
      <NuestrasClases setSelectedPage={setSelectedPage} />
      <Register setSelectedPage={setSelectedPage} />
      <Footer />
    </>
  );
};

export default Landing;
