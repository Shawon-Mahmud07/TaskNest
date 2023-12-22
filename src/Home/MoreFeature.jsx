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
          <div className="text-center my-8 lg:my-0 ">
            <h1 className="text-3xl  lg:text-5xl  font-serif font-bold">
              Countless individuals depend on TaskNest.
            </h1>
            <p className="text-base lg:text-xl mt-3 lg:mt-5 font-Inter ">
              to bring order and structure to their{" "}
              <strong> professional and personal</strong> lives.
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
