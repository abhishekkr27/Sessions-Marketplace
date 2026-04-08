import { Link, useNavigate } from "react-router-dom";

export default function Navbar(){
  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{
      background:"#2563eb",
      color:"white",
      padding:"12px",
      display:"flex",
      justifyContent:"space-between"
    }}>
      <h2>Ahoum</h2>

      <div>
        <Link to="/" style={{marginRight:"10px",color:"white"}}>Home</Link>
        <Link to="/dashboard" style={{marginRight:"10px",color:"white"}}>Dashboard</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}