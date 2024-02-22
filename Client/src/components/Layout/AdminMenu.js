import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPills, faClipboardList, faUsers, faFileMedical, faUserMd, faComments } from '@fortawesome/free-solid-svg-icons';

const AdminMenu = () => {
  const style = {
    height: 'calc(100vh - 87px)',
    width: '360px',
    position: 'fixed',
    zIndex: '1',
    top: '85px',
    left: '0',
    backgroundColor: 'black',
    color: 'white',
    overflowX: 'hidden',
    paddingTop: '30px',
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    justifyContent: 'center',
    height: 'calc((100vh - 100px) / 7)', // Adjust based on the number of links
    textDecoration: 'none',
    transition: '0.3s',
  };

  const activeLinkStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  };

  return (
    <>
      <div className="text-center">
        <div className="list-group" style={style} >
          <h4>ADMIN'S DASHBOARD</h4>
          <NavLink className='nav-link'
            to="/dashboard/admin/create-product"
            style={linkStyle}
            activeStyle={activeLinkStyle}
          >
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: '10px' }} />
            Add-Medicine
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            style={linkStyle}
            activeStyle={activeLinkStyle}
          >
            <FontAwesomeIcon icon={faPills} style={{ marginRight: '10px' }} />
            Medicines
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            style={linkStyle}
            activeStyle={activeLinkStyle}
          >
            <FontAwesomeIcon icon={faClipboardList} style={{ marginRight: '10px' }} />
            All-Orders
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            style={linkStyle}
            activeStyle={activeLinkStyle}
          >
            <FontAwesomeIcon icon={faUsers} style={{ marginRight: '10px' }} />
            USERS
          </NavLink>
          <NavLink
            to="/dashboard/admin/labreport"
            style={linkStyle}
            activeStyle={activeLinkStyle}
          >
            <FontAwesomeIcon icon={faFileMedical} style={{ marginRight: '10px' }} />
            LabReports
          </NavLink>
          <NavLink
            to="/dashboard/admin/doctorfeed"
            style={linkStyle}
            activeStyle={activeLinkStyle}
          >
            <FontAwesomeIcon icon={faUserMd} style={{ marginRight: '10px' }} />
            Doctors
          </NavLink>
          <NavLink
            to="/dashboard/admin/chat"
            style={linkStyle}
            activeStyle={activeLinkStyle}
          >
            <FontAwesomeIcon icon={faComments} style={{ marginRight: '10px' }} />
            Chat
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
