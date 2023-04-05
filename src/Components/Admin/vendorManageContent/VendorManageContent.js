import { Notify } from 'notiflix';
import React, { useContext } from 'react'


import { useState } from "react";
import axios from '../../Axios/axios';
import { AuthContext } from "../../context/AuthProvider";
import SallerDetailcontent from '../SallerDetailcontent/SallerDetailcontent';


const VendorManageContent = () => {

  const [modal, setModal] = useState(false);

  const { allVendors } = useContext(AuthContext);
  console.log(allVendors);


  const handleApproval = async (id) => {
    try {
      await axios.put(`/users/updateRole/${id}`,{status:"Approved"}, {
        headers: {
          "content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
         Notify.success("status changed successfully");

      window.location.reload(true);
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`users/delete/${id}`, {
        headers: {
          "content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
Notify.success("vendor removed successfully");

      window.location.reload(true);
    } catch (error) {
      console.log(error.response);
    }
  };


  return (
    <>

      <div>
        <div className="user-boxx">
          <table className="table">
            <tr>
              <th>Profile</th>
              <th>Names</th> <th>E-mail</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>

            {allVendors?.map((user) => {
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
                    <td className="status">
                      <h1
                        className="approve"
                        onClick={() => {
                          handleApproval();
                        }}
                      >
                        Approve
                      </h1>
                      <h1
                        className="delete"
                        onClick={() => {
                          if (window.confirm("are you sure to delete this?")) {
                            handleDelete(user._id);
                          }
                        }}
                      >
                        Delete
                      </h1>
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
    </>
  );
}

export default VendorManageContent;