import { Link } from "react-router-dom";
import ErrorImg from "../assets/error-page.jpg";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title> TaskNest | ErrorPage</title>
      </Helmet>
      <div className="h-screen text-center py-36 md:py-0 text-3xl space-y-3">
        <div className="flex flex-col justify-center items-center">
          <img className="w-11/12 md:w-5/12" src={ErrorImg} alt="error-img" />
          <p className="mb-2 text-2xl md:text-4xl font-serif">
            Page Not Found.
          </p>
          <Link to="/">
            <button className="bg-[#FF735C]  rounded-md mt-2 px-2 pb-1 hover:bg-[#1A2E35] hover:text-white duration-1000 font-serif">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
