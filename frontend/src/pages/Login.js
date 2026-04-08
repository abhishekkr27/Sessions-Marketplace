import { GoogleLogin } from "@react-oauth/google";
import API from "../api";

export default function Login(){

  const handleSuccess = async (res)=>{
    const data = await API.post("/auth/google/", {
      access_token: res.credential
    });

    localStorage.setItem("token", data.data.access);
    window.location = "/";
  };

  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      marginTop:"100px"
    }}>
      <GoogleLogin onSuccess={handleSuccess}/>
    </div>
  );
}