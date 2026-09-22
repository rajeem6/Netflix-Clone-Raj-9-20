import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TitleCards from "../components/TitleCards";
import Footer from "../components/Footer";

const Home = ({ user }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar user={user} />
      <Hero />
      <TitleCards title="Popular on Netflix" />
      <div className="more-cards">
        <TitleCards title="BlockBuster Movies" category={"top_rated"} />
        <TitleCards title="Only on Netflix" category={"popular"} />
        <TitleCards title="Upcoming" category={"upcoming"} />
        <TitleCards title="Top Picks for You" category={"now_playing"} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
