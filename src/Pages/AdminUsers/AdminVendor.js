import React from 'react'
import UserManageHeader from '../../Components/Admin/UserManageHeader/UserManageHeader';
import VendorManageContent from '../../Components/Admin/vendorManageContent/VendorManageContent';
import "./users.css";

const AdminVendor = () => {
  return (
    <div>
      <UserManageHeader />
      <VendorManageContent className="vendormanage" />
    </div>
  );
}

export default AdminVendor;