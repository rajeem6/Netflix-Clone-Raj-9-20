import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TitleCards from "../components/TitleCards";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TitleCards title="Popular on Netflix" />
      <div className="more-cards">
        <TitleCards title="BlockBuster Movies" />
        <TitleCards title="Only on Netflix" />
        <TitleCards title="Upcoming" />
        <TitleCards title="Top Picks for You" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
