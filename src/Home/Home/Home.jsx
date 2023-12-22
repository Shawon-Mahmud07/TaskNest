import Banner from "../Banner";
import Features from "../Features";
import Footer from "../Footer";
import MoreFeature from "../MoreFeature";
import NavBar from "../Navbar";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Features></Features>
      <MoreFeature></MoreFeature>
      <Footer></Footer>
    </div>
  );
};

export default Home;
