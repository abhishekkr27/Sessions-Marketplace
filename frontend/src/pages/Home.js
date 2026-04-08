import { useEffect, useState } from "react";
import API from "../api";
import SessionCard from "../components/SessionCard";
import Loader from "../components/Loader";

export default function Home(){
  const [data,setData]=useState(null);

  useEffect(()=>{
    API.get("/sessions/")
      .then(res=>setData(res.data))
      .catch(()=>alert("Error fetching sessions"));
  },[]);

  if(!data) return <Loader/>;

  return (
    <div style={{
      padding:"20px",
      display:"grid",
      gridTemplateColumns:"repeat(3,1fr)",
      gap:"15px"
    }}>
      {data.map(s=> <SessionCard key={s.id} session={s}/>)}
    </div>
  );
}