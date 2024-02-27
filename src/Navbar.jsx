import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ChatIcon from '@mui/icons-material/Chat';
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="main-navbar shadow-sm sticky-top">
        <div className="top-navbar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                <h5 className="brand-name">Shop</h5>
              </div>
              <div className="col-md-5 my-auto">
                <form role="search">
                  <div>
                    <NavLink to={"/"}>
                      <Tooltip title="Home">
                        <button className="btn btn-close-white mx-1">
                          <HomeIcon />
                        </button>
                      </Tooltip>
                    </NavLink>
                    <NavLink to={"/about"}>
                      <Tooltip title="About Us">
                        <button className="btn  bg-black btn-close-white mx-1">
                          <InfoIcon />
                        </button>
                      </Tooltip>
                    </NavLink>
                    <NavLink to={"/category"}>
                      <Tooltip title="Category">
                        <button className="btn  bg-black btn-close-white mx-1">
                          <CategoryOutlinedIcon />
                        </button>
                      </Tooltip>
                    </NavLink>
                    <NavLink to={"/contact"}>
                      <Tooltip title="Contact">
                        <button className="btn  bg-black btn-close-white mx-1">
                          <PermContactCalendarOutlinedIcon />
                        </button>
                      </Tooltip>
                    </NavLink>
                    <Tooltip title='Chats'>
            <NavLink to={'/chat'}>
            <button  className="btn  bg-black btn-close-white mx-1">
              <ChatIcon/>
              </button>
            </NavLink>
            </Tooltip>
                  </div>
                </form>
              </div>
              <div className="col-md-5 my-auto">
                <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <NavLink className="nav-link" to={'/addcart'}>
                      <i className="fa fa-shopping-cart"></i> Cart (0)
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link">
                      <i className="fa fa-heart"></i> Wishlist (0)
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/login"}>
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
