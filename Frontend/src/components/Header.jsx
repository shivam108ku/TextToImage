import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { RiHomeSmile2Line, RiRefund2Line, RiUser2Line } from "@remixicon/react";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row p-4 w-full justify-around items-center gap-4 md:gap-0">
      <div>
        <Link className="flex items-center gap-1 text-xl font-black" to="/">
          <RiHomeSmile2Line size={32} />
          <h1>Home</h1>
        </Link>
      </div>

      <div className="w-full md:w-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10">
          <button
            className="flex items-center gap-2 py-2 px-3 rounded-2xl border hover:bg-black duration-300 border-green-600"
            onClick={() => navigate("/buy")}
          >
            <RiRefund2Line color="green" />
            <p className="font-black text-lg">Credit left: {credit}</p>
          </button>

          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <p className="text-gray-600 text-sm md:text-base">Hi, {user.name}</p>
                <div className="relative group">
                  <RiUser2Line size={32} />
                  <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                    <ul className="bg-white rounded-md border text-sm p-2">
                      <li
                        onClick={logout}
                        className="py-1 px-2 cursor-pointer"
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <p
                  onClick={() => navigate("/buy")}
                  className="cursor-pointer bg-zinc-800 px-4 py-2 text-blue-500 rounded-full text-sm"
                >
                  Subscription
                </p>
                <button
                  onClick={() => setShowLogin(true)}
                  className="bg-blue-800 text-white px-6 py-2 text-sm rounded-full"
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
