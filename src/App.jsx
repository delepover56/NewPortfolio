// src/App.jsx
import { Outlet } from "react-router"; // v7
import Background from "@/components/background";
import MobileHeader from "@/components/layout/mobileHeader.jsx";
import MyInfo from "@/components/layout/MyInfo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToOutlet from "@/components/ScrollToOutlet";


function App() {
  return (
    <>
      <Background />
      <ScrollToOutlet />
      <MobileHeader />
      <main className="relative w-full z-10 flex flex-col justify-evenly items-center lg:items-center">
        <Header />
        <div className="relative z-10 w-[90%] flex flex-col lg:flex-row justify-start items-center lg:items-start 2xl:justify-evenly gap-5 sm:gap-10 lg:gap-2 xl:gap-10 mb-5">
          <MyInfo />
          <Outlet /> {/* This renders the routed page */}
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
