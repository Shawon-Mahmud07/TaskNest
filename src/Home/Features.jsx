import { Button } from "@material-tailwind/react";
import bannerImg from "../assets/cool-background.png";
import todoImg from "../assets/features.jpg";
import useAos from "../hooks/useAos";

const Features = () => {
  useAos();
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
      <div className="flex items-center  lg:h-screen max-w-screen-2xl mx-auto pb-8 lg:pb-0">
        <div className="w-11/12 lg:w-10/12 mx-auto  ">
          <div
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="flex flex-col lg:flex-row  justify-between items-center"
          >
            <div className="md:w-1/2">
              <img
                src={todoImg}
                alt=""
                className="rounded md:w-10/12 lg:mx-0  mx-auto"
              />
            </div>
            <div className="lg:w-1/2 w-full  text-center  ">
              <h2 className="text-2xl lg:text-4xl font-bold mb-3 lg:w-3/4 leading-snug font-serif">
                Wherever you go, stay in control.
              </h2>
              <p className="  text-base font-medium font-Inter lg:text-xl lg:text-left lg:w-5/6">
                With 10+ apps and plugins, effortlessly review upcoming tasks
                and add new ones on the fly. Experience seamless synchronization
                across all your devices..
              </p>
              {/* stats */}

              <div className=" lg:text-left text-center brightness-150">
                <Button
                  className=" bg-gradient-to-r mt-6 lg:mt-10 from-[#6F00CC]  to-[#9000CC] py-1 lg:py-2 rounded-md  font-semibold text-base text-[#fff] hover:bg-gradient-to-l hover:from-[#6F00CC]  hover:to-[#9000CC]"
                  size="sm"
                >
                  See all apps
                </Button>{" "}
                <br />
                <p className="mt-2 font-medium">
                  for iOS, Android, macOS, Windows, and more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
