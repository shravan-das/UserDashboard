import React from 'react';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import UserDetails from './UserDetails'
import UserRegister from './UserRegister'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const LeftSidebar = () => {
  const [selectedItem, setSelectedItem] = useState('users');

  const handleNavItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div id="app" style={{ display: "flex", height: "100vh" }}>
      <Sidebar>
        <Menu>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/" />}>
            Home
          </MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />} onClick={() => handleNavItemClick('users')}>
            Users
          </MenuItem>
          <MenuItem icon={<PersonAddOutlinedIcon />} onClick={() => handleNavItemClick('register')}>
            Register
          </MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ flex: 1, overflowY: 'auto' }}>
        {selectedItem === 'users' && <UserDetails />}
        {selectedItem === 'register' && <UserRegister />}
      </main>
    </div>
  );
};

export default LeftSidebar;
