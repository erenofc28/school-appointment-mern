import React, { useEffect, useState } from "react";
import Header from "../pages/Header";
import "../App.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const AppointmentDisplay = () => {
  const [userId, setUserId] = useState([]);
  const [student, setStudent] = useState([]);
  const [arr, setArr] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleBtns = async (data, status) => {
    let d = { status: status };
    axios.put(`http://localhost:5000/book/${data._id}`, d).then((r) => {
      setArr(
        arr.filter((a) => {
          return a;
        })
      );
    });
  };

  useEffect(() => {
    axios
      .post("http://localhost:5000/bookGet", {
        id: location.state.id,
        type: location.state.type,
      })
      .then((res) => {
        setArr(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [arr]);
  return (
    <>
      <Header />

      <div className="div_book flex justify-center items-center flex-col">
        {arr.length === 0 && (
          <>
            <p className="no_appointments">No Appointments Found!</p>{" "}
          </>
        )}
        {arr.map((data, ind) => (
          <>
            <div key={ind} className="one">
              {location.state.type === "student" ? (
                <p className="from-display">To {data.teacherName}</p>
              ) : (
                ""
              )}
              {location.state.type === "teacher" ? (
                <p className="from-display">From {data.studentName}</p>
              ) : (
                ""
              )}
              <div
                className="small_box_book items-center bg-white-500 text-white text-sm font-bold px-4 py-3"
                role="alert"
              >
                <p className="text-emerald-950 text-base text-bold">
                  {data.message}
                </p>
              </div>

              <div className="flex parent_display">
                <div className="child_display">Status : {data.status}</div>
                {location.state.type === "teacher" && (
                  <>
                    <button
                      onClick={() => {
                        handleBtns(data, "Approved");
                      }}
                      className="child_display bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => {
                        handleBtns(data, "Rejected");
                      }}
                      className=" child_display bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                    >
                      Reject
                    </button>
                  </>
                )}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default AppointmentDisplay;
