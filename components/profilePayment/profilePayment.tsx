import { inputLabelClasses, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import "../profileAddress/profileAddress.css";
import "./profilePayment.css";
import "../../views/home/home.css";
import "../profileAddress/profileAddress.css";
import * as yup from "yup";
import { useFormik } from "formik";
import PaymentModal from "../paymentModal/paymentModal";

const validationSchema = yup.object({
  cardNumber: yup
    .string()
    .required("Please enter a city name")
    .min(12, "Must be exactly 12 digits")
    .max(12, "Must be exactly 12 digits"),
  nameOncard: yup.string().required("Please enter a correct name"),
  securityCard: yup
    .string()
    .required(
      "Please enter the correct expiry details and security card number"
    )
    .min(3, "Must be exactly 3 digits")
    .max(3, "Must be exactly 3 digits"),
});

const ProfilePayment = () => {
  const [modal, setModal] = useState(false);
  const handleClose = () => {
    setModal(false);
  };

  const resp = [1, 2, 3];
  const e = [1, 2, 3];

  const initialvalues = {
    cardNumber: "",
    nameOncard: "",
    expiryMonth: "",
    expiryYear: "",
    securityCard: "",
  };
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialvalues,
    onSubmit: (values) => {},
    validationSchema: validationSchema,
  });
  const submitHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="profileAddressContainer">
        <div className="profileAddressContents">
          <div className="profileAddressTitle">
            <div className="profileAddressLocation">Payment Methods</div>
            <img
              src={require("../../assets/Add-new.png")}
              className="addNewAddressImage"
              onClick={() => setModal(true)}
            />
          </div>
          <div className="profileAddressCardsContainer">
            {resp.map((e: any, i: any) => {
              return (
                <div className="profileAddressPaymentCard">
                  <div className="addressCardContents">
                    <div className="paymentMethodPrimary">
                      <div className="profilePaymentStatus">
                        <img
                          src={require("../../assets/icn_check-black.png")}
                          alt=""
                          className="icnCheckBlack"
                        />
                        <div className="addressStatusText">Primary</div>
                      </div>
                    </div>
                    <div className="profilePaymentMethod">
                      <div className="profilePaymentImg">
                        <img
                          src={require("../../assets/Bitmapvisa.png")}
                          alt=""
                          className="profilePaymentImage"
                        />
                      </div>
                      <div className="profilePaymentDescription">
                        <div className="profilePaymentCardNum">
                          2345 XXXX XXXX 6574
                        </div>
                        <div className="profilePaymentCardBank">
                          American Experess
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="paymentEdDel">
                    <div className="paymentEditDelete">
                      <div className="paymentEdit">Edit</div>
                      <div className="paymentEdit">Delete</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Modal
          open={modal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="modalDiv style">
            <div className="addNewAddressContainer ">
              <div className="addBackBtnConatiner">
                <img
                  src={require("../../assets/dismiss button.png")}
                  className="addAddressBackButton"
                  onClick={() => setModal(false)}
                />
              </div>{" "}
              <div className="addAdressBodyHeader">
                <div className="addAddressHead">Add new address</div>
                <div className="addAddressLocConatinerCard">
                  Enter Credit/Debit card details
                </div>
              </div>
              {/* <PaymentModal /> */}
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
                      label="Card number"
                      name="cardNumber"
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
                    <div className="addNewCardModalError">
                      {errors.cardNumber}
                    </div>
                  </div>

                  <div className="addAddressFields">
                    {" "}
                    <TextField
                      id="standard-basic"
                      label="Name on card"
                      name="nameOncard"
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
                    <div className="addNewCardModalError">
                      {errors.nameOncard}
                    </div>
                  </div>
                  <div className="TotalParent">
                    <div className="ExpiryAndSecurityParent">
                      <div className="cardDetailsContainer">
                        <span className="expiryOfCard"> Expiry</span>
                        <div className="cardExpiryDetails">
                          {/* <div className="addAddressFields"> */}{" "}
                          <TextField
                            id="standard-basic"
                            variant="standard"
                            placeholder="MM"
                            name="expiryMonth"
                            sx={{
                              width: 0.15,
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
                          /{/* </div> */}
                          {/* <div className="addAddressFields"> */}{" "}
                          <TextField
                            id="standard-basic"
                            variant="standard"
                            placeholder="YYYY"
                            name="expiryYear"
                            sx={{
                              width: 0.25,
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
                          {/* </div> */}
                          <div className="cardSecurityCard">
                            {/* <div className="addAddressFields"> */}{" "}
                            {/* </div> */}
                          </div>
                        </div>
                      </div>

                      <div className="cardSecurityContainer">
                        <span className="expiryOfCard">Security card</span>
                        <div className="cardExpiryDetails">
                          {/* <div className="addAddressFields"> */}{" "}
                          {/* </div> */}
                          <div className="cardSecurityCard">
                            {/* <div className="addAddressFields"> */}{" "}
                            <TextField
                              id="standard-basic"
                              // label="Address label"
                              variant="standard"
                              name="securityCard"
                              sx={{
                                width: 0.8,
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
                            {/* </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="addNewCardModalError">
                      {errors.securityCard}
                    </div>
                  </div>

                  <div className="addAddressSubmit">
                    <button className="addAddressSubBtn">SAVE CARD</button>
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

export default ProfilePayment;
