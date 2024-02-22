import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from "../../context/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClipboardList, faVial, faStethoscope, faComments } from '@fortawesome/free-solid-svg-icons';

const UserMenu = () => {
  const [auth] = useAuth(); 
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

  return (
    <div>
      <div className="text-center">
        <div className="list-group" style={style}>
          <h4>{auth.user.name}'s Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            style={linkStyle}
            
          >
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            style={linkStyle}
            
          >
            <FontAwesomeIcon icon={faClipboardList} style={{ marginRight: '10px' }} />
            Orders
          </NavLink>
          <NavLink
            to="/dashboard/user/lab"
            style={linkStyle}
            
          >
            <FontAwesomeIcon icon={faVial} style={{ marginRight: '10px' }} />
            LabTests
          </NavLink>
          <NavLink
            to="/dashboard/user/app"
            style={linkStyle}
            
          >
            <FontAwesomeIcon icon={faStethoscope} style={{ marginRight: '10px' }} />
            Doctors-app
          </NavLink>
          <NavLink
            to="/dashboard/user/chat"
            style={linkStyle}
            
          >
            <FontAwesomeIcon icon={faComments} style={{ marginRight: '10px' }} />
            Chat
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
