import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function PrivateRoute({children}){
  return localStorage.getItem("token") ? children : <Navigate to="/login"/>;
}

function App(){
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/login" element={<Login/>}/>

        <Route path="/" element={
          <PrivateRoute><Home/></PrivateRoute>
        }/>

        <Route path="/dashboard" element={
          <PrivateRoute><Dashboard/></PrivateRoute>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;