import React from 'react'
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div>
      <div className="text-center">
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
          <NavLink
            to="/dashboard/user/lab"
            className="list-group-item list-group-item-action"
          >
            LabTests
          </NavLink>
          <NavLink
            to="/dashboard/user/app"
            className="list-group-item list-group-item-action"
          >
            Doctors-app
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default UserMenu
