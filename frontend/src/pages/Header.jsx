import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [hidden, setHidden] = useState("hidden");
  const [user,setUser] = useState(false)
  //check user logged in or not
  useEffect(() => {
getType()
  }, [user]);


  const getType = async()=>{ await axios
  .post(
    "http://localhost:5000/typeFind",
    {},
    {
      withCredentials: true,
    }
  )
  .then((res) => {
    if(res.data.type === "admin")
    {
      setUser(true)
      return;
    }
   setUser(res.data.data.status)
  })
  .catch((err) => {
    console.log(err);
  });

}
  //handle navbar toggle
  const handleHidden = () => {
    if (hidden != "hidden") {
      setHidden("hidden");
    } else {
      setHidden("");
    }
  };

  const handleLogout = () => {
    axios.get("http://localhost:5000/logout",{
      withCredentials:true,
    })
    const d = getType()
    console.log("logged out",user)
    navigate("/");
  };
  useEffect(() => {
    setHidden("hidden");
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <h1 className="h1-header text-4xl font-boldleading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
              Snippetz{" "}
              <span className="text-blue-500 dark:text-blue-500">
                Institute
              </span>
            </h1>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {user ? (
              <>
                <button
                  onClick={handleLogout}
                  type="button"
                  className="m-btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Log Out
                </button>
              </>
            ) : (
              ""
            )}
            <button
              onClick={handleHidden}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${hidden}`}
            id="navbar-sticky"
          >
            <ul className=" flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={user ? "/home2" : "/"}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={user ? "/teachers" : "/"}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Teachers
                </Link>
              </li>
              <li>
                <Link
                  to={user ? "/students" : "/"}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Students
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              {hidden != "hidden" && (
                <>
                  {user ? (
                    <>
                      <button
                        onClick={handleLogout}
                        type="button"
                        className="s-btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Log Out
                      </button>
                    </>
                  ) : (
                    ""
                  )}
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
