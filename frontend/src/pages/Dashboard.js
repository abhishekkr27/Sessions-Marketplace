import { useEffect, useState } from "react";
import API from "../api";
import Loader from "../components/Loader";

export default function Dashboard(){
  const [data,setData]=useState(null);

  useEffect(()=>{
    API.get("/my-bookings/")
      .then(res=>setData(res.data));
  },[]);

  if(!data) return <Loader/>;

  return (
    <div style={{padding:"20px"}}>
      <h2>My Bookings</h2>

      {data.map(b=>(
        <div key={b.id} style={{
          background:"white",
          margin:"10px 0",
          padding:"10px",
          borderRadius:"8px"
        }}>
          Booking ID: {b.id}
        </div>
      ))}
    </div>
  );
}