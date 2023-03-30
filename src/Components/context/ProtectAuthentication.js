import react, { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";

const ProtectAuthentication = ({ children }) => {
  const { loggedUser } = useContext(AuthContext);
  if (localStorage.getItem("token")) {
    if (!loggedUser) {
      return;
    } 
    else if (loggedUser?.roleId === 1) {
       console.log("pauline");
         window.location.href = "/AdminDashboard";
     } else if (loggedUser?.roleId == 2) {
         window.location.href = "/VendorDashboard";
     } else if (loggedUser?.roleId == 3) {
         window.location.href = "/";
     } else {
       // alert('role id not found');
     }
  }
  else{
  return <div>{children}</div>;
  }
  
};

export default ProtectAuthentication;
