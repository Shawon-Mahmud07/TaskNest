import { FaGoogle } from "react-icons/fa6";
// react simple captcha
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
// Material Tailwind
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
// react-icons
import { HiEyeOff, HiEye } from "react-icons/hi";
// react-toastify
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { userSignIn, handleGoogleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = "/";

  const [passwordIcon, setShowPassword] = useState(false);
  const [captchaValue, setCaptchaValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [successInfo, setSuccessInfo] = useState(false);
  const [wrongInfo, setWrongInfo] = useState(null);

  // make password input visible
  const showPassword = () => {
    setShowPassword(!passwordIcon);
  };
  // react-simple-captcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaValue;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
      setSuccessInfo(true);
      setWrongInfo(false);
    } else {
      setWrongInfo(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userSignIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          toast.success("User Logged in Successfully.");
        }
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 2000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage) {
          toast.error("Invalid Email & Password");
        }
      });
  };
  // Google
  const handleGoogle = () => {
    handleGoogleSignIn()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        toast.success("Sign In successfully");
        console.log(credential);
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 3000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="lg:h-full   lg:flex items-center bg-lime-100-200">
      <Helmet>
        <title>TaskNest | Sign In</title>
      </Helmet>

      <div className="w-11/12  py-5  lg:w-10/12  mx-auto flex flex-col items-center lg:flex-row  lg:shadow-xl">
        <div className=" lg:w-6/12 mx-auto ">
          <img
            src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1701622753~exp=1701623353~hmac=7f723920eecbad7ac02e0927d2292134091b505b04d83f59bbafc4d7e0e4dd64"
            alt=""
          />
        </div>

        <div className=" w-full lg:w-6/12 mt-5 md:mt-0 ">
          <h2 className="text-center text-[#151515] text-2xl lg:text-4xl font-semibold lg:font-bold">
            Sign In
          </h2>

          <Card
            color="transparent"
            shadow={false}
            className=" lg:w-9/12 mx-auto py-5"
          >
            <form
              onSubmit={handleSubmit}
              className=" mb-2 w-11/12 lg:w-10/12 mx-auto  "
            >
              <div className="mb-1  flex flex-col gap-2.5">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Email
                </Typography>

                <Input
                  type="email"
                  name="email"
                  size="lg"
                  label="Enter Your Email"
                  className="bg-white"
                  required
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
                </Typography>
                <div className="relative">
                  <Input
                    name="password"
                    type={passwordIcon ? "text" : "password"}
                    size="lg"
                    label="Enter Your Password"
                    className="bg-white"
                    required
                  />
                  <div
                    onClick={showPassword}
                    className="absolute top-1/2 -translate-y-1/2 right-2.5"
                  >
                    {passwordIcon ? <HiEye></HiEye> : <HiEyeOff></HiEyeOff>}
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <LoadCanvasTemplate />
                  </div>
                  {/* captcha Input field */}
                  <Input
                    type="text"
                    size="lg"
                    value={captchaValue}
                    onChange={(e) => setCaptchaValue(e.target.value)}
                    placeholder="Type Above Text"
                    className=" !border-t-blue-gray-200 bg-white focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />

                  {/* Captcha validate Btn */}
                  <Button
                    onClick={handleValidateCaptcha}
                    className="mt-4 py-2 px-3 mb-1 bg-gradient-to-r from-[#100514]  to-[#00133E]  font-semibold  text-white"
                  >
                    Validate Captcha
                  </Button>

                  {/* validation wrong or success info... */}
                  {successInfo && (
                    <p className="text-green-500 text-sm font-medium">
                      validation successful.
                    </p>
                  )}
                  {wrongInfo && (
                    <p className="text-red-500 text-sm font-medium">
                      wrong validation, try again.
                    </p>
                  )}
                </div>
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button
                disabled={disabled}
                type="submit"
                className="mt-4 bg-gradient-to-r  from-[#6F00CC]  to-[#9000CC] hover:bg-gradient-to-l hover:from-[#6F00CC]  hover:to-[#9000CC] font-semibold  text-white"
                fullWidth
              >
                sign In
              </Button>

              <Typography className="mt-4  text-center font-normal text-[#8700CC]">
                New here?
                <Link
                  to="/sign-up"
                  className="font-medium hover:text-black   pl-1 "
                >
                  Create a New Account
                </Link>
              </Typography>

              {/* another login way */}
              <Typography className="mt-2 text-[#444]  lg:text-lg text-center font-medium">
                Or sign in with
              </Typography>
              <div className="mt-6 ">
                <Button
                  onClick={handleGoogle}
                  size="md"
                  variant="outlined"
                  className="flex text-[#380e16] font-extrabold items-center justify-center gap-3 w-11/12 mx-auto"
                >
                  <FaGoogle className="h-4 w-4  font-poppins  "></FaGoogle>
                  Login with Google
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
