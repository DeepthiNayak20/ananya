import "./otpVerification.css";
import "../../components/signUp/signUp.css";
import { inputLabelClasses, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/reducers/modalSlice";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import SignUp from "../signUp/signUp";
import { useFormik } from "formik";
import * as yup from "yup";
import { storeEmail } from "../../redux/reducers/registerSlice";
import { registerOtpAsyncThunk } from "../../redux/reducers/registerOtpSlice";
import { useEffect, useState } from "react";
import axios from "axios";

const validationSchema = yup.object({
  otp: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(4, "Must be exactly 4 digits")
    .max(4, "Must be exactly 4 digits"),
});

const OtpVerification = () => {
  const [respData, setRespData] = useState(false);
  const enteredEmail = useSelector((state: any) => state.verifyEmail.email);
  console.log("enteredEmailotp", enteredEmail);
  const resRegOtp = useSelector((state: any) => state.verifyOtpReg);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const initialvalues = {
    otp: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialvalues,
      onSubmit: (values) => {
        alert(JSON.stringify(values.otp));
        axios(
          `http://lorem-env.eba-vjfwziew.ap-northeast-1.elasticbeanstalk.com/Lorem/verifyEMail2fa`,
          {
            method: "put",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            data: {
              emailId: enteredEmail,
              emailOtp: values.otp,
            },
          }
        )
          .then((res) => {
            if (res) {
              alert(res.data);
              console.log("res.dataotp", res.data);

              if (res.status === 200) {
                navigate("/signup/verifyotp/verified");
              }
            }
          })
          .catch((err) => {
            alert(err.response.data);
          });
      },
      validationSchema: validationSchema,
    });

  let showModal: any = useSelector((state: any) => state.modalStatus.value);

  const submitHandler = (e: any) => {
    e.preventDefault();
    // setRespData(true);
    // dispatch(
    //   registerOtpAsyncThunk({ email: enteredEmail, otp: e.target.otp.value })
    // );
  };
  // const otpHandler = () => {
  //   console.log("200", resRegOtp.data);
  //   if (resRegOtp && resRegOtp.data && resRegOtp.data.status === 200) {
  //     alert(resRegOtp && resRegOtp.data && resRegOtp.data.data);
  //     navigate("/signup/verifyotp/verified");
  //   } else {
  //     JSON.stringify(resRegOtp.data) !== "{}" &&
  //       alert(resRegOtp && resRegOtp.message);
  //   }
  // };
  // useEffect(() => {
  //   respData && otpHandler();
  // }, [resRegOtp, respData]);

  return (
    <>
      <div className="otpVericationContainer">
        <div className="signUpClose">
          <div>
            <img
              src={require("../../assets/close_button.png")}
              alt=""
              onClick={() => dispatch(closeModal())}
            />
          </div>
          {/* <div className="otpVerificationBack">
            {" "}
            <img
              src={require("../../assets/back.png")}
              alt=""
              onClick={() => {
                navigate("/signup");
              }}
            />
          </div> */}
        </div>
        <div className="otpVerificationBody">
          {" "}
          <div className="otpVericationHead">
            <div className="otpVericationImg">
              <img src={require("../../assets/icn_verify_icon.png")} alt="" />
            </div>
            <div className="otpVerificationHEading">Verification</div>
            <div className="otpVericationContents">
              We just sent you the OTP via SMS to your email address/mobile no.
              You should get it soon!
            </div>
          </div>
          <div className="otpVericationForm">
            <form
              className="otpFormContainer"
              onSubmit={(e: any) => {
                handleSubmit();
                submitHandler(e);
              }}
            >
              <div className="otpVerificationFormContents">
                <div className="otpTxtField">
                  <TextField
                    id="standard-basic"
                    label="OTP"
                    variant="standard"
                    name="otp"
                    value={values.otp}
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
                </div>
                <div className="createAccBtn">
                  <button className="createAccountBtn">Verify</button>
                </div>
                {errors.otp && touched.otp ? (
                  <p className="form-error">{errors.otp}</p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpVerification;
