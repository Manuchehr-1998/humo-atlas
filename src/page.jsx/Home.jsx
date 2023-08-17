import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Manage from "../components/sections-manage/Manage";
import StickBar from "../components/sections-stick-bar/StickBar";
import Trust from "../components/sections-trust/Trust";
import Urbancard from "../components/sections-urban-card/Urbancard";
import Dna from "../components/sections-dna/Dna";
import Free from "../components/freeatlas/Free";
import Blog from "../components/blog/Blog";
import { useEffect, useState } from "react";
import Navfixed from "../components/header/Navfixed";
import "./home.css"

const Home = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 550);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <Navfixed sticky={sticky} />
      <Header />
      <StickBar />
      <Urbancard />
      <Manage />
      <Trust />
      <Dna />
      <Free />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
