import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineUserGroup, HiOutlineHome } from "react-icons/hi";
import { BiBuildings } from "react-icons/bi";
import { RiSettings4Line } from "react-icons/ri";
import { CgLogOut } from "react-icons/cg";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  const menus = [
    { name: "Home", link: "/home", icon: HiOutlineHome},
    { name: "Employee", link: "/employee", icon: HiOutlineUserGroup },
    { name: "Department", link: "/department", icon: BiBuildings },
    { name: "Logout", link: "/login", icon: CgLogOut},
    //{ name: "File Manager", link: "/", icon: FiFolder },
    //{ name: "Cart", link: "/", icon: FiShoppingCart },
    //{ name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    //{ name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div class="flex flex-col items-center  px-40 py-8 mx-auto md:h-screen lg:py-0 ">
            <div class="mt-8">
                <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">Welcome Back!</h1>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    

                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 bg-gradient-to-tr from-fuchsia-500 via-red-600 to-orange-400">
                                <tbody className="">
                                    <tr>
                                        <td className="px-12 py-4 font-medium text-white text-lg whitespace-nowrap">
                                            Admin's ID
                                        </td>
                                        <td className="px-6 py-4 text-lg text-white whitespace-nowrap">
                                            : ADM01
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-12 py-4 text-lg font-medium text-white whitespace-nowrap">
                                            Admin's Name
                                        </td>
                                        <td className="px-6 py-4 text-lg text-white whitespace-nowrap">
                                            : Anita Sabah
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-12 py-4 text-lg font-medium text-white whitespace-nowrap">
                                            Admin's Tel No
                                        </td>
                                        <td className="px-6 py-4 text-lg text-white whitespace-nowrap">
                                            : 010-2098768
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
      
      

      


    </section>
    
  );
};

export default Home;