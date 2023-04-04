import React, { useContext } from "react";
import SallerDetailcontent from "../SallerDetailcontent/SallerDetailcontent";
import "./UserManageConent.css";
import { useState} from "react";
import { AuthContext } from "../../context/AuthProvider";
const UserManageConent = () => {
  const[modal, setModal] = useState(false);

   const { allUsers } = useContext(AuthContext);
   console.log(allUsers);


    // const filteredUsers = allUser?.filter(U=>U.roleId==1 ||U.roleId == 2)

// console.log("PPO")
    
  return (
    <div>
      <div className="user-boxx">
        <table className="table">
          <tr>
            <th>
              Profile
            </th>
            <th>Names</th> <th>E-mail</th>
            <th>Joined</th>
            <th>Actions</th>
          </tr>
         
            {allUsers?.map((user) => {
              return (
                <>
                 <tr>
                  <td
                    onClick={() => {
                      setModal(true);
                    }}
                  >
                   {user.profile}
                  </td>
                  <td>{user.firstName}</td> <td>{user.email}</td>
                  
                 <td>{user.createdAt}</td> <td>...</td>
                
                </tr>

                </>
              );
            })}
         
        </table>
      </div>
      <div className="user-next-cont">
        <ul>
          <li className="next1">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
        <p>Next</p>
      </div>
      <div className="modal" style={{ display: !modal ? "none" : "flex" }}>
        <div className="background-between">
          <SallerDetailcontent modal={modal} setModal={setModal} />
        </div>
      </div>
    </div>
  );
};

export default UserManageConent;
