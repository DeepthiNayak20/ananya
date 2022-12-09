import { TextField } from '@mui/material'
import { inputLabelClasses } from '@mui/material/InputLabel'
import React, { useEffect, useState } from 'react'
import './emailBox.css'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import forgotPasswordEmailSlice, {
  FPemailAsyncThunk,
  storeEmailForgot,
} from '../../redux/reducers/forgotPasswordEmailSlice'
import { storeEmail } from '../../redux/reducers/loginEmailSlice'
import axios from 'axios'

const EmailBox = () => {
  const [emailResp, setsmailResp] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const loginEmailResp = useSelector((state: any) => state.FPverifyEmail.data);
  // console.log("loginEmailResp", loginEmailResp);

  //yup
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Please enter a valid Email')
      .required('Please enter your Email'),
  })

  const initialValues = { email: '' }

  const onSubmit = (values: any) => {
    console.log(values.email)

    // dispatch(FPemailAsyncThunk(values.email));
    dispatch(storeEmailForgot(values.email))

    axios(
      `http://lorem-env.eba-vjfwziew.ap-northeast-1.elasticbeanstalk.com/Lorem/forgotPassword/email`,
      {
        method: 'post',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        data: { emailId: values.email },
      },
    )
      .then((res) => {
        if (res) {
          alert(res.data)
          console.log('res.data', res.data)

          if (res.status === 200) {
            navigate('/login/forgotpassword')
          }
        }
      })
      .catch((err) => {
        alert(err && err.response && err.response.data)
      })
  }

  const formik = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  })
  console.log(formik.errors)
  const handleSubmites = (e: any) => {
    e.preventDefault()
  }
  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   setsmailResp(true);
  //   dispatch(FPemailAsyncThunk(e.target.email.value));
  //   dispatch(storeEmailForgot(e.target.email.value));
  //   // if()
  // };

  // const emailBoxSubmitHandler = () => {
  //   console.log("hghghh1", loginEmailResp && loginEmailResp.data);
  //   console.log(
  //     "hghghh2",
  //     loginEmailResp && loginEmailResp.data && loginEmailResp.data.data
  //   );
  //   if (
  //     loginEmailResp &&
  //     loginEmailResp.data &&
  //     loginEmailResp.data.data === "OTP sent to your email"
  //   ) {
  //     alert(loginEmailResp && loginEmailResp.data.data);
  //     navigate("/login/forgotpassword");
  //   } else {
  //     JSON.stringify(loginEmailResp.data) !== "{}" &&
  //       alert(loginEmailResp.data);
  //   }
  // };
  // useEffect(() => {
  //   emailResp && emailBoxSubmitHandler();
  // }, [loginEmailResp, emailResp]);

  return (
    <>
      <form
        className="emailBoxContainer"
        onSubmit={(e: any) => {
          formik.handleSubmit()
          handleSubmites(e)
        }}
      >
        <div className="relativi">
          <TextField
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            id="standard-basic"
            label="Email"
            variant="standard"
            sx={{
              width: 1,
              '& .MuiInput-underline:before': { borderBottomColor: 'black' },
              '& .MuiInput-underline:after': { borderBottomColor: '#0000007f' },
              '& .MuiFormLabel-root.Mui-disabled': {
                color: 'red',
              },
            }}
            InputLabelProps={{
              sx: {
                // set the color of the label when not shrinked
                color: 'black',
                [`&.${inputLabelClasses.shrink}`]: {
                  // set the color of the label when shrinked (usually when the TextField is focused)
                  color: '#0000008a',
                },
              },
            }}
          />
          <div className="emailErrorMessage">
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ''}
          </div>
        </div>
        <button
          className="sendOtpButton"
          type="submit"
          onSubmit={() => navigate('/login/forgotpassword')}
        >
          SEND OTP
        </button>
      </form>
    </>
  )
}

export default EmailBox
