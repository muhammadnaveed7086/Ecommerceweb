import React, { useState, useEffect } from "react";
import CatogData from "./CatogData";
import Tooltip from "@mui/material/Tooltip";
import { NavLink } from "react-router-dom";
function Categories(props) {
  const [item, setItem] = useState(CatogData);
  const [cat, setCat] = useState([]);
  // const [viewId, setView] = useState([]);

  useEffect(() => {
    const allValues = ["All", ...new Set(CatogData.map((val) => val.category))];
    setCat(allValues);
  }, [CatogData]);
  const sameData = (cat) => {
    if (cat === "All") {
      setItem(CatogData);
    } else {
      const updatedValues = CatogData.filter((currVal) => {
        return cat === currVal.category;
      });
      setItem(updatedValues);
    }
  };
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg category">
        <div className="container-fluid">
          <a
            className="navbar-brand d-block d-sm-block d-md-none d-lg-none"
            href="#"
          >
            Naveed's Shop
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navcss">
              {cat.map((val) => {
                return (
                  <li
                    className="nav-item"
                    key={val}
                    onClick={() => sameData(val)}
                  >
                    <a className="nav-link" href="#">
                      {val}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="social-media">
              <Tooltip title="Facebook">
                <a href="">
                  <i className="fa fa-facebook mx-3 text-white"></i>
                </a>
              </Tooltip>
              <Tooltip title="Twitter">
                <a href="">
                  <i className="fa fa-twitter mx-3 text-white"></i>
                </a>
              </Tooltip>
              <Tooltip title="Instagram">
                <a href="">
                  <i className="fa fa-instagram mx-3 text-white"></i>
                </a>
              </Tooltip>
              <Tooltip title="Youtube">
                <a href="">
                  <i className="fa fa-youtube mx-3 text-white"></i>
                </a>
              </Tooltip>
            </div>
          </div>
        </div>
      </nav>
      {/* category */}
      <div className="py-3 py-md-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="mb-4 text-center productheading">My Shop</h1>
            </div>
            {item.map((currVal, index) => {
              const { imgsrc, main, category } = currVal;
              return (
                <div className="col-md-3" key={index}>
                  <div className="product-card maincard">
                    <div className="product-card-img">
                      <label className="stock bg-success">In Stock</label>
                      <img src={imgsrc} alt="Laptop" />
                    </div>
                    <div className="product-card-body">
                      <p className="product-brand">{category}</p>
                      <h5 className="product-name">
                        <a href="#">{main}</a>
                      </h5>
                      <div>
                        <span className="selling-price">$500 </span>
                        <span className="original-price">$799</span>
                      </div>
                      <div className="mt-2">
                        <NavLink to={'/addcart'} className="hoverbtn btn btn1">
                          Add To Cart
                        </NavLink>
                        <a href="#" className="btn btn1">
                          <i className="fa fa-heart"></i>
                        </a>
                        <NavLink
                          to={"/viewproduct"}
                          className="hoverbtn btn btn1"
                        >
                          View
                        </NavLink>
                        ;
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Categories;
