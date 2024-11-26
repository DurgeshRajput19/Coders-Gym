import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Equipments from "./components/Equipments/Equipments";
import Banner from "./components/Banner/Banner";
import Img1 from "./assets/Untitled design.png";
import Img2 from "./assets/pexels-foadshariyati-29526372.jpg";
import Tab from "./components/Tab/Tab";
import Testimonal from "./components/Testimonial/Testimonal";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

const BannerData = {
  image: Img1,
  title: "The important to take care of yourself",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore atque temporibus nemo harum quis ratione molestiae officiis incidunt impedit dolorem ea perferendis error, enim hic vel facilis. Rem ipsum recusandae, blanditiis, eius quidem suscipit, autem deserunt culpa nemo nisi quod!",
};
const Banner2Data = {
  image: Img2,
  title: "The important to take care of yourself",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore atque temporibus nemo harum quis ratione molestiae officiis incidunt impedit dolorem ea perferendis error, enim hic vel facilis. Rem ipsum recusandae, blanditiis, eius quidem suscipit, autem deserunt culpa nemo nisi quod!",
};

const bgstyle = {
  backgroundImage: `url(${Img1})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  BackgroundPosition: "center",
  backgroundAttachment: "fixed",
};
function App() {
  return (
    <div className="overflow-x-hidden ">
      <div className="bg-gradient-to-r from-orange-200 to-white h-fit  ">
        <Navbar />
        <Hero />
      </div>
      <Equipments />
      <Banner {...BannerData} />
      <Tab />
      <Banner {...Banner2Data} />
      <Testimonal/>
      <Banner2/>
      <Footer/>
    </div>
  );
}

export default App;
