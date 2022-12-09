import { inputLabelClasses, Modal, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, showModal } from "../../redux/reducers/modalSlice";
import { closeScheduleModal } from "../../redux/reducers/scheduleModalSlice";
import "./profileAddress.css";
import "../../views/home/home.css";

import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  city: yup.string().required("Please enter a city name"),
  area: yup.string().required("Please enter an area"),
  address: yup.string().required("Please enter the correct address"),
  addressLabel: yup.string().required("Please enter an address label"),
});
const ProfileAddress = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => {
    setShow(false);
  };

  const initialvalues = {
    city: "",
    area: "",
    address: "",
    addressLabel: "",
  };
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialvalues,
    onSubmit: (values) => {},
    validationSchema: validationSchema,
  });
  const submitHandler = (e: any) => {
    e.preventDefault();
  };
  const e = [1, 2, 3];
  const rec = [1, 2];
  return (
    <>
      <div className="profileAddressContainer">
        <div className="profileAddressContents">
          <div className="profileAddressTitle">
            <div className="profileAddressLocation">My Addresses (2)</div>
            <img
              src={require("../../assets/Add-new.png")}
              className="addNewAddressImage"
              onClick={() => setShow(true)}
            />
          </div>
          <div className="profileAddressCardsContainer">

            {rec.map((e: any, i: any) => {
              return (
                <div className="profileAddressCard">
                  <div className="addressCardContents">
                    <div className="profileAddressDetails">
                      <div className="profileAddressLocation">Home</div>
                      <div className="profileAddressStatus">
                        <img
                          src={require("../../assets/icn_check-black.png")}
                          alt=""
                          className="icnCheckBlack"
                        />
                        <div className="addressStatusText">Primary</div>
                      </div>
                    </div>

                    <div className="profileAddressInfo">
                      Downtown Burj Khalifa, Sheikh Mohammed bin Rashid Blvd -
                      Dubai - United Arab EmiratesDubai, UAE
                    </div>
                    <div className="profileAddressButtons">
                      <button className="profileAddressEditButton">Edit</button>
                      <button className="profileAddressEditButton">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Modal
          open={show}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="modalDiv style">
            <div className="addNewAddressContainer ">
              <div className="addBackBtnConatiner">
                <img
                  src={require("../../assets/dismiss button.png")}
                  className="backButton"
                  onClick={() => setShow(false)}
                />
              </div>
              <div className="addAdressBodyHeader">
                <div className="addAddressHead">Add new address</div>
                <div className="addAddressCurrent">
                  <div className="addAddressLocConatiner">
                    <div className="addAddressLocation">
                      <img
                        src={require("../../assets/icn_pin.png")}
                        alt=""
                        className="addAddressLocationPin"
                      />
                    </div>
                    <div className="addAddressLocationName">
                      Downtown Burj Khalifa, Dubai.
                    </div>
                  </div>
                  <div className="addAddressGpsIcn">
                    <img
                      src={require("../../assets/icn_gps_indicator.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="addAddressBody">
                <form
                  className="addAddressFormContainer"
                  onSubmit={(e: any) => {
                    handleSubmit();
                    submitHandler(e);
                  }}
                >
                  <div className="addAddressFields">
                    {" "}
                    <TextField
                      id="standard-basic"
                      label="City"

                      name="city"
                      variant="standard"
                      value={values.city}
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

                    <div className="addNewAddressModalError">{errors.city}</div>
                  </div>
                  <div className="addAddressFields">
                    {" "}
                    <TextField
                      id="standard-basic"
                      label="Area"

                      name="area"
                      variant="standard"
                      value={values.area}
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
                    <div className="addNewAddressModalError">{errors.area}</div>
                  </div>
                  <div className="addAddressFields">
                    {" "}
                    <TextField
                      id="standard-basic"
                      label="Address"
                      name="address"
                      variant="standard"
                      value={values.address}
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
                    <div className="addNewAddressModalError">
                      {errors.address}
                    </div>
                  </div>
                  <div className="addAddressFields">
                    {" "}
                    <TextField
                      id="standard-basic"
                      label="Address label"
                      name="addressLabel"
                      variant="standard"
                      value={values.addressLabel}
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
                    <div className="addNewAddressModalError">
                      {errors.addressLabel}
                    </div>
                  </div>
                  <div className="addAddressSubmit">
                    <button className="addAddressSubBtn">SAVE ADDRESS</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ProfileAddress;
