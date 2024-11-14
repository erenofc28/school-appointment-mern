import axios from "axios";

export async function getType(){ 

    const r = await axios
      .post("http://localhost:5000/typeFind",{},{
        withCredentials:true
      }) 
      .then((res) => {
        // setId(res.data.data.id);
        // console.log(res.data)
        return (res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };