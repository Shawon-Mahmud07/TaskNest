import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAos from "../hooks/useAos";

const Dashboard = () => {
  useAos();
  const { user } = useContext(AuthContext);
  return (
    <div
      data-aos="fade-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="w-full text-center b "
    >
      <div>
        <h3 className="text-2xl mt-10 text-[#8700CC] font-sans uppercase bg-gray-200 py-2 font-bold ">
          Welcome {user?.displayName}{" "}
        </h3>
      </div>
      <div className="w-9/12 mx-auto">
        <img
          src="https://www.pngitem.com/pimgs/m/574-5744758_dashboard-png-transparent-png.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Dashboard;
