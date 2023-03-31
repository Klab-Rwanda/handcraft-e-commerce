import react, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const ProtectAuthentication = ({ children }) => {
  const { loggedUser } = useContext(AuthContext);
  const navigate = useNavigate()
  if (localStorage.getItem("token")) {
    if (!loggedUser) {
      return;
    } 
    else if (loggedUser?.roleId === 1) {
       console.log("pauline");
        navigate( "/AdminDashboard");
     } else if (loggedUser?.roleId == 2) {
        navigate( "/VendorDashboard");
     } else if (loggedUser?.roleId == 3) {
        navigate( "/");
     } else {
       // alert('role id not found');
     }
  }
  else{
  return <div>{children}</div>;
  }
  
};

export default ProtectAuthentication;
