import React, { useContext } from "react";
import SallerDetailcontent from "../SallerDetailcontent/SallerDetailcontent";
import "./UserManageConent.css";
import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { AiFillDelete } from "react-icons/ai";
import axios from "../../Axios/axios";
import { Notify } from "notiflix";
const UserManageConent = () => {
  const [modal, setModal] = useState(false);

  const { allUsers } = useContext(AuthContext);
  console.log(allUsers);

  const filteredUsers = allUsers?.filter(U=>U.roleId==3)

  // console.log("PPO")

   const handleDelete = async (id) => {
     try {
       await axios.delete(`users/delete/${id}`, {
         headers: {
           "content-Type": "multipart/form-data",
           Authorization: `Bearer ${localStorage.getItem("token")}`,
         },
       });
         Notify.success("user removed successfully");
       
       window.location.reload(true);
     } catch (error) {
       console.log(error.response);
     }
   };

  return (
    <div>
      <div className="user-boxx">
        <table className="table">
          <tr>
            <th>Profile</th>
            <th>Names</th> <th>E-mail</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

          {filteredUsers?.map((user) => {
            return (
              <>
                <tr>
                  <td
                    onClick={() => {
                      setModal(true);
                    }}
                  >
                    {user.firstName}
                  </td>
                  <td>{user.lastName}</td> <td>{user.email}</td>
                  <td>{user.status}</td>
                  <td>
                    <AiFillDelete
                      className="delete-icn"
                      onClick={() => {
                        if (window.confirm("are you sure to delete this?")) {
                          handleDelete(user._id);
                        }
                      }}
                    />
                  </td>
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
