import React, { useEffect, useState } from "react";
import Header from "../pages/Header";
import "../App.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const RequestTeacher = () => {
  const [details, setDetails] = useState([]);
  const [empty, setEmpty] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleApprove = async (id) => {
    const data = {
      status: true,
    };

    await axios
      .put(`http://localhost:5000/${location.state.reqType}/` + id, data)
      .then((r) => {
        setDetails(
          details.filter((arr) => {
            if (arr.id != id) {
              return arr;
            }
          })
        );
      });
  };
  const handleReject = async (id) => {
    await axios
      .delete(`http://localhost:5000/${location.state.reqType}/` + id)
      .then((res) => {
        setDetails(
          details.filter((arr) => {
            if (arr.id != id) {
              return arr;
            }
          })
        );
        checkEmpty();
      })
      .catch((err) => {
        console.log("error");
      });
  };
  useEffect(() => {
    let temp = location.state.reqType;
    if (temp === "student") {
      temp = "studentAll";
    }
    const c = axios
      .get(`http://localhost:5000/${temp}`)
      .then((res) => {
        setDetails(
          res.data.map((r) => {
            return {
              name: r.username,
              role: r.department,
              profile: r.profile,
              id: r._id,
              status: r.status,
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const checkEmpty = () => {
    let temp = location.state.reqType;
    if (temp === "student") {
      temp = "studentAll";
    }
    const c = axios
      .get(`http://localhost:5000/${temp}`)
      .then((res) => {
        res.data.map((arr) => {
          if (!arr.status) {
            setEmpty(false);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    checkEmpty();
  }, []);

  return (
    <>
      <Header />
      <div className=" border div_req flex justify-center items-center flex-col">
        <h1 class="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
          Pending Registrations
        </h1>
        {!empty ? (
          details.map((arr, ind) => {
            return !arr.status ? (
              <>
                <div
                  key={ind}
                  class="small_box items-center bg-white-500 text-white text-sm font-bold px-4 py-3"
                  role="alert"
                >
                  <p className="text-emerald-950 text-base text-bold">
                    {arr.name}
                  </p>
                  <div className="btns">
                    <button
                      onClick={(e) => {
                        handleReject(arr.id);
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-4"
                    >
                      Reject
                    </button>
                    <button
                      onClick={(e) => {
                        handleApprove(arr.id);
                      }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
                    >
                      Approve
                    </button>
                  </div>
                </div>
              </>
            ) : (
              ""
            );
          })
        ) : (
          <p className="text-emerald-950 text-base text-bold">
            No Pending Requests
          </p>
        )}
      </div>
    </>
  );
};

export default RequestTeacher;
