import "./otpVerificationLogin.css";
import "../../components/signUp/signUp.css";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/reducers/modalSlice";
import {
  Navigate,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import SignUp from "../signUp/signUp";
import forgotPasswordEmailSlice, {
  storeOtp,
} from "../../redux/reducers/forgotPasswordEmailSlice";
import { registerOtpAsyncThunk } from "../../redux/reducers/registerOtpSlice";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
const validationSchema = yup.object({
  otp: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(4, "Must be exactly 4 digits")
    .max(4, "Must be exactly 4 digits"),
});

const OtpVerificationLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let showModal: any = useSelector((state: any) => state.modalStatus.value);
  const resRegOtp = useSelector((state: any) => state.verifyOtpReg);
  const enteredEmail = useSelector((state: any) => state.verifyEmail.email);
  const enteredEmailLogin = useSelector(
    (state: any) => state.FPverifyEmail.emailId
  );
  const initialvalues = {
    otp: "",
  };
  console.log("enteredEmailLoginfrftgb", enteredEmailLogin);
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
              emailId: enteredEmailLogin,
              emailOtp: values.otp,
            },
          }
        )
          .then((res) => {
            if (res) {
              alert(res.data);
              console.log("res.dataotp", res.data);

              if (res.status === 200) {
                navigate("/login/forgotpassword/verification");
              }
            }
          })
          .catch((err) => {
            alert(err.response.data);
          });
      },
      validationSchema: validationSchema,
    });
  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(storeOtp(e.target.otp.value));
    // dispatch(
    //   registerOtpAsyncThunk({
    //     email: enteredEmailLogin,
    //     otp: e.target.otp.value,
    //   })
    // );
    // if (resRegOtp && resRegOtp.data && resRegOtp.data.status === 200) {
    //   // console.log("200");
    //   alert(resRegOtp && resRegOtp.data && resRegOtp.data.data);
    //   navigate("/login/forgotpassword/verification");
    // } else {
    //   alert(resRegOtp && resRegOtp.message);
    // }onSubmit: (values) => {
  };
  return (
    <>
      <div className="otpVericationContainer">
        <div className="signUpClosess">
          <div>
            <img
              src={require("../../assets/Shape@2x.png")}
              alt=""
              className="backImg"
              onClick={() => navigate("/forgotPassword")}
            />
          </div>
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
                    label="Enter OTP"
                    variant="standard"
                    name="otp"
                    value={values.otp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={{ width: 1 }}
                  />
                </div>
                <div className="createAccBtn">
                  <button className="createAccountBtn">
                    <div
                      className="NavTxt"
                      // onSubmit={() =>
                      //   navigate("/login/forgotpassword/verification")
                      // }
                    >
                      Verify
                    </div>
                  </button>
                  {errors.otp && touched.otp ? (
                    <p className="form-error">{errors.otp}</p>
                  ) : null}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpVerificationLogin;
