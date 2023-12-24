import { Helmet } from "react-helmet";
import Banner from "../Banner";
import Features from "../Features";
import Footer from "../Footer";
import MoreFeature from "../MoreFeature";
import NavBar from "../Navbar";
import Audience from "../Audience";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> TaskNest | Home </title>
      </Helmet>
      <NavBar></NavBar>
      <Banner></Banner>
      <Features></Features>
      <Audience></Audience>
      <MoreFeature></MoreFeature>
      <Footer></Footer>
    </div>
  );
};

export default Home;
