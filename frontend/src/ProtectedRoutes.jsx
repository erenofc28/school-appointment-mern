import axios from "axios";
import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const getType = async () => {
  const res = await axios.post("http://localhost:5000/typeFind",{},{
    withCredentials:true
  });

  return res;
};
const ProtectedRoutes = () => {
  const [id, setId] = useState([]);

  let user = getType();

  user
    .then((r) => {
      setId(true);
    })
    .catch((err) => {
      setId(false);
    });

  return id ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedRoutes;
