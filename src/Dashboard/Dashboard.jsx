import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full text-center b ">
      <h3 className="text-2xl mt-10 text-[#8700CC] font-cinzel bg-gray-200 py-2 font-bold ">
        Welcome {user?.displayName}{" "}
      </h3>
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
