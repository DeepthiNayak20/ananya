import { inputLabelClasses, TextField } from "@mui/material";
import React, { useEffect } from "react";
import "./loginOne.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/reducers/modalSlice";
import { useFormik } from "formik";
import * as yup from "yup";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import ForgotPassword from "../forgotPassword/forgotPassword";
import loginEmailSlice, {
  loginEmailAsyncThunk,
} from "../../redux/reducers/loginEmailSlice";
import RestaurantList from "../../views/restaurantList/restaurantList";
import axios from "axios";
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const validationSchema = yup.object({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Please enter a Email"),
  password: yup
    .string()
    //.matches(PASSWORD_REGEX, "Please enter strong password")
    .required("Please enter password"),
});

const LoginOne = () => {
  const [response, setResponse] = useState(false);
  const loginDetails = useSelector((state: any) => state.verifyLoginEmail.data);
  console.log("loginDetails", loginDetails);
  console.log(
    loginDetails && loginDetails.response && loginDetails.response.data
  );

  const navigate = useNavigate();
  const initialvalues = {
    email: "",
    password: "",
  };
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialvalues,
    onSubmit: (values) => {},
    validationSchema: validationSchema,
  });
  const [password, setPassword] = useState<boolean>(false);

  const togglePassword = () => {
    setPassword(!password);
  };
  const dispatch = useDispatch();

  const submitHandler = (e: any) => {
    e.preventDefault();
    setResponse(true);

    dispatch(
      loginEmailAsyncThunk({
        emailId: e.target.email.value,
        password: e.target.password.value,
      })
    );
  };

  const responseHandler = () => {
    if (loginDetails && loginDetails.status === 200) {
      alert("login success");

      localStorage.setItem(
        "jwtToken",
        loginDetails && loginDetails.data && loginDetails.data.jwttoken
      );
      navigate("/restaurantLists");
    } else {
      JSON.stringify(loginDetails) !== "{}" && alert(loginDetails);
    }
  };

  useEffect(() => {
    response && responseHandler();
  }, [loginDetails, response]);

  return (
    <>
      <div className="loginContainer">
        <div className="loginClose">
          <img
            src={require("../../assets/close_button.png")}
            alt=""
            onClick={() => {
              navigate("/");
              dispatch(closeModal());
            }}
          />
        </div>
        <div className="LoginOneContent">
          <div className="loginOneText">Lets get started!</div>
          <form
            className="loginOneFormM"
            onSubmit={(e: any) => {
              handleSubmit();
              submitHandler(e);
            }}
          >
            <div className="loginOneForm">
              <div className="loginOneFeild">
                <TextField
                  id="standard-basic"
                  label="Email"
                  name="email"
                  variant="standard"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{
                    width: 1,
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "black",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0000007f",
                    },
                    "& .MuiFormLabel-root.Mui-disabled": {
                      color: "red",
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: "#0000008a",
                      [`&.${inputLabelClasses.shrink}`]: {
                        // set the color of the label when shrinked (usually when the TextField is focused)
                        color: "#0000008a",
                      },
                    },
                  }}
                />
                <div className="loginOneError">{errors.email}</div>
              </div>
              <div className="loginTxtImg">
                <div className="loginOneFeild">
                  <TextField
                    id="standard-basic"
                    label="Password"
                    type={password ? "text" : "password"}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="standard"
                    sx={{
                      width: 1,
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "black",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#0000007f",
                      },
                      "& .MuiFormLabel-root.Mui-disabled": {
                        color: "red",
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        // set the color of the label when not shrinked
                        color: "#0000008a",
                        [`&.${inputLabelClasses.shrink}`]: {
                          // set the color of the label when shrinked (usually when the TextField is focused)
                          color: "#0000008a",
                        },
                      },
                    }}
                  />
                </div>
                <div className="loginOneError">{errors.password}</div>
                <img
                  src={require("../../assets/icn_view_inactive.png")}
                  alt=""
                  className="passwordImg"
                  onClick={togglePassword}
                />
              </div>
            </div>
            <NavLink to="/forgotpassword" className="forgetText">
              Forgot Password?
            </NavLink>
            <button className="loginOneLogin">LOGIN</button>
          </form>
          <div className="loginWhole">
            <div className="googleFace">
              <button className="facebookBtnLogin">Facebook</button>
              <button className="googleBtnLogin">Google+</button>
            </div>
            <div className="LoginAccount">
              <div className="noAccount">Dont have an account?</div>
              <NavLink to="/signup" className="getOne">
                Get one now!
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* <Routes>
        <Route path="/restaurantLists" element={<RestaurantList />} />
      </Routes> */}
    </>
  );
};

export default LoginOne;
