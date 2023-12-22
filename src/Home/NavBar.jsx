import logoImg from "../assets/checklist.png";
import {
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import React from "react";

// import { AuthContext } from "../../Providers/AuthProvider";
// import { toast } from "react-toastify";
// import { useState } from "react";
// import { useEffect } from "react";

function NavList() {
  // const { user, logOut } = useContext(AuthContext);

  // console.log(user);
  // const handleLogOut = () => {
  //   logOut()
  //     .then(() => {
  //       toast.success("Sign-out successful.");
  //       Navigate("/login");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <ul className="my-2 text-white flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center  lg:gap-6">
      <Typography
        as="li"
        className="px-1 hover:text-[#8700CC] hover:underline underline-offset-8 md:text-sm xl:text-lg  lg:font-extrabold font-Inter"
      >
        <NavLink to="/">HOME</NavLink>
      </Typography>

      {/* {userRoll == "manager" ? (
        <>
          <Typography
            as="li"
            className="px-1  md:text-sm xl:text-lg  lg:font-extrabold font-Inter"
          >
            <NavLink
              to="/admin/dashboard"
              className="flex items-center  transition-colors"
            >
              DASHBOARD
            </NavLink>
          </Typography>
        </>
      ) : (
        <>
          <Typography
            as="li"
            className="px-1  md:text-sm xl:text-lg  lg:font-extrabold font-Inter"
          >
            <NavLink
              to="/create-store"
              className={({ isActive }) => (isActive ? activeNav : normalNav)}
            >
              CREATE STORE
            </NavLink>
          </Typography>
        </>
      )} */}
      <Typography
        as="li"
        className="px-1 hover:text-[#8700CC] hover:underline underline-offset-8 md:text-sm xl:text-lg  lg:font-extrabold font-Inter"
      >
        <NavLink to="" className="flex items-center  transition-colors">
          DASHBOARD
        </NavLink>
      </Typography>

      <Typography
        as="li"
        className="px-1 hover:text-[#8700CC] hover:underline underline-offset-8 md:text-sm xl:text-lg  lg:font-extrabold font-Inter"
      >
        <NavLink
          to="https://www.youtube.com/watch?v=4kz1-X9Sn08"
          target="_blank"
        >
          WATCH DEMO
        </NavLink>
      </Typography>

      {/* {user && (
        <div className="flex flex-col items-center">
          <Avatar src={user.photoURL} alt="avatar" size="md" />
          <p className="text-sm">{user.displayName}</p>
        </div>
      )}
      {user ? (
        <Button
          onClick={handleLogOut}
          className="block bg-gradient-to-l from-[#6F00CC]  to-[#9000CC] py-1 lg:py-2 rounded-md  font-semibold text-base text-[#fff]"
          size="sm"
        >
          <span>Log Out</span>
        </Button>
      ) : (
        <>
          <Link to="/login">
            <Button
              className="block bg-[#FF7F56] py-1 lg:py-2 rounded-md  font-semibold text-base text-[#fff]"
              size="sm"
            >
              <span>Login</span>
            </Button>
          </Link>
        </>
      )} */}
      <Link to="/login">
        <Button
          className="block bg-gradient-to-r from-[#6F00CC]  to-[#9000CC] py-1 lg:py-2 rounded-md  font-semibold text-base text-[#fff] hover:bg-gradient-to-l hover:from-[#6F00CC]  hover:to-[#9000CC]"
          size="sm"
        >
          <span>Login</span>
        </Button>
      </Link>
    </ul>
  );
}

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="lg:fixed w-full  z-10 px-6 py-5 lg:py-2  bg-gradient-to-r from-[#100514]  to-[#00133E] shadow-xl">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between ">
          <Link to="/">
            <div className="flex gap-2 items-center text-white cursor-pointer">
              <img className="w-10 lg:w-12" src={logoImg} alt="" />
              <h1 className="font-cinzel text-2xl lg:text-3xl font-semibold">
                <span className="text-[#8700CC]">Task</span>
                <span>Nest</span>
              </h1>
            </div>
          </Link>

          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white " strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </div>
  );
};

export default NavBar;
