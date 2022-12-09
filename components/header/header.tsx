import "./header.css";
import { useDispatch } from "react-redux";
import { showModal } from "../../redux/reducers/modalSlice";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const jwttokenLogin = localStorage.getItem("jwtToken")
  console.log(jwttokenLogin);
  return (
    <>
      {jwttokenLogin === '' ? (
        <div className="headerContainer">
          <div className="headerLeft">
            <div className="logoText">LOREM</div>
          </div>
          <div className="headerRight">
            <div className="webMenu">
              <div className="language">
                <select name="language" className="languageSelect">
                  <option className="lang">English</option>
                  <option className="lang">Hindi</option>
                </select>
              </div>
              <div className="login" onClick={() => {
                navigate("/login")
                dispatch(showModal())
              }}>LOGIN</div>
              <div
                className="createAccount"
                onClick={() => {
                  navigate("/Signup")
                  dispatch(showModal())
                }}
              >
                CREATE AN ACCOUNT
              </div>

            </div>
            <div className="mobileMenu">

              <img src={require('../../assets/pngwing.com.png')} alt="" className="loginMoginIcon" onClick={() => {
                navigate("/login")
                dispatch(showModal())
              }} />
              <img src={require('../../assets/letter-c-icon-22.jpg')} alt="" className="loginCreateAccIcon" onClick={() => {
                navigate("/Signup")
                dispatch(showModal())
              }} />

            </div>
            <div className="cartDetails">
              <img
                src={require("../../assets/icn_cart.png")}
                alt=""
                className="cartItems"
              />
              <div className="cartText">CART</div>
            </div>
          </div>
        </div>
      ) :
        (<div className="headerContainers">
          <div className="headerLeft">
            <div className="logoText">LOREM</div>
          </div>
          <div className="headerRight">
            <div className="webMenu">
              <div className="language">
                <select name="language" className="languageSelect">
                  <option className="lang">English</option>
                  <option className="lang">Hindi</option>
                </select>
              </div>
              <div className="login" onClick={() => {
                navigate("/login")
                dispatch(showModal())
              }}>LOGIN</div>
              <div
                className="createAccount"
                onClick={() => {
                  navigate("/Signup")
                  dispatch(showModal())
                }}
              >
                CREATE AN ACCOUNT
              </div>

            </div>
            <div className="mobileMenu">

              <img src={require('../../assets/pngwing.com.png')} alt="" className="loginMoginIcon" onClick={() => {
                navigate("/login")
                dispatch(showModal())
              }} />
              <img src={require('../../assets/letter-c-icon-22.jpg')} alt="" className="loginCreateAccIcon" onClick={() => {
                navigate("/Signup")
                dispatch(showModal())
              }} />

            </div>
            <div className="cartDetails">
              <img
                src={require("../../assets/icn_cart.png")}
                alt=""
                className="cartItems"
              />
              <div className="cartText">CART</div>
            </div>
          </div>
        </div>)}
      
    </>
  );
};

export default Header;
