import bannerImg from "../assets/cool-background.png";
import featureImg from "../assets/audiences.png";
const Audience = () => {
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
            <h1 className="text-2xl lg:text-4xl  font-serif font-bold">
              Our Audience: Empowering Corporate Professionals and Personal
              Users
            </h1>
            <p className="text-base lg:text-justify lg:text-xl mt-3 lg:mt-5 font-Inter ">
              TaskNest is the trusted task management platform chosen by
              corporate professionals seeking streamlined workflows and
              individuals looking to enhance personal organization. From
              managing projects in the boardroom to keeping track of daily tasks
              at home, TaskNest is the go-to solution for creating order and
              efficiency in both professional and personal spheres.
            </p>
            <div className="flex justify-center mt-5">
              <img className="" src={featureImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audience;
