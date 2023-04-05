import { BsTelephoneFill } from "react-icons/bs";
import "./venderBody.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const VenderBody = () => {
  const { allUsers } = useContext(AuthContext);
  console.log(allUsers);
  // let FilteredUser ;
  // const filteredVendor = allUsers?.filter((P) => P.vendorId === roleId);
  // try {
  //  const  FilteredUser = allUsers?.filter((U) => U.roleId == 2);
  // } catch (err) {
  // console.log(err.response);
  // }

  let FilteredUser = [];
  if (allUsers) {
    FilteredUser = allUsers?.filter((U) => U.roleId == 2);
  } else {
  }
  console.log(FilteredUser);

  return (
    <>
      <h1 className="vender-header">List of vendor </h1>

      <div className="vender-card-layout">
        {FilteredUser?.map((user) => {
          return (
            <>
              <div className="vender-card-layout__item">
                <div className="vender-card">
                  <div className="upper">
                    <div className="left">
                      <h5>{user.shopName}</h5>
                      <div className="wrapper">
                        <h6>{user.shopAddress}</h6>

                        <div className="icon">
                          <BsTelephoneFill />
                          {user.phone}
                        </div>
                      </div>
                    </div>
                    <div className="vender-pic">
                      <img src={user.profile} alt="" />
                    </div>
                  </div>
                  <div className="Vender-paragraph">
                    <p>{user.shopDescription}</p>
                    <button className="Vender-button">
                      <Link to="/OneVender">visit Shop</Link>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}

        <p className="vender-views"> view other vender</p>
      </div>
    </>
  );
};

export default VenderBody;
