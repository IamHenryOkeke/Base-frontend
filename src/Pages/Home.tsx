"use client";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

import { useEffect } from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Home/Hero";
import Services from "../component/Home/Services";
import About from "../component/Home/About";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { isAuthenticated } = useDynamicContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard/home");
  }, [isAuthenticated, navigate]);

  return (
    <main>
      <div className="hero bg-center lg:bg-center lg:h-[961px] px-4 md:px-10 lg:px-16 2xl:px-24">
        <Navbar />
        <Hero />
      </div>
      <div className="px-4 md:px-10 lg:px-16 2xl:px-24">
        <Services />
        <About />
      </div>
      <Footer />
    </main>
  );
}
