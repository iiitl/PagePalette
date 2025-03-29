import React, { useState } from "react";
import Navbar from "./utlis/navbar";
import Footer from "./utlis/footer";
import Landing from "./pages/landing";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

const App = () => {
  const [page, setPage] = useState("landing");

  const renderPage = () => {
    switch (page) {
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "pricing":
        return <Pricing />;
      case "contact":
        return <Contact />;
      default:
        return <Landing setPage={setPage} />;
    }
  };

  return (
    <div className="bg-white border-gray-200 dark:bg-teal-950 dark:text-white">
      <Navbar setPage={setPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
