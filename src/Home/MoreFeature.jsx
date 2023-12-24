import bannerImg from "../assets/cool-background.png";
import featureImg from "../assets/moreFeature.jpg";
const MoreFeature = () => {
  const backgroundStyles = {
    backgroundImage: `url(${bannerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      style={backgroundStyles}
      className=" h-auto lg:h-screen brightness-90 "
    >
      <div className="max-w-screen-2xl mx-auto  ">
        <div className=" flex flex-col lg:flex-row justify-center -pt-10 items-center lg:h-screen w-11/12 md:w-9/12 lg:w-6/12 mx-auto ">
          <div
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="text-center my-8 lg:my-0 "
          >
            <h1 className="text-2xl  lg:text-4xl  font-serif font-bold">
              Countless individuals depend on TaskNest.
            </h1>
            <p className="text-base lg:text-lg mt-3 lg:mt-5 font-Inter ">
              Revolutionizing the Organization and Structure of the Professional
              Landscape, while Enhancing the Personal Lives of Corporate
              Professionals and Individuals with Unparalleled Efficiency and
              Simplicity.
            </p>
            <div className="flex justify-center">
              <img className="md:size-96" src={featureImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreFeature;
