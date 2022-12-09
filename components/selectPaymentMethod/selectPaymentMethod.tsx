import { inputLabelClasses, Modal, Radio, TextField } from "@mui/material";
import React, { useState } from "react";
import "../choseAddress/choseAddress.css";
import PaymentModal from "../paymentModal/paymentModal";
import "./selectPaymentMethod.css";

import * as yup from "yup";
import { useFormik } from "formik";
import "../profilePayment/profilePayment.css";
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

const SelectPaymentMethod = () => {
  const [modal, setModal] = useState(false);
  const [primary, setPrimary] = useState(false);

  const handleClose = () => {
    setModal(false);
  };

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
  const submitHandler = (event: any) => {
    event.preventDefault();
  };
  let e = [1, 2, 3, 4, 5];
  //   const [selectedValue, setSelectedValue] = useState("Delivery");
  const [selectedValue, setSelectedValue] = useState({
    name: "Cash",
    saveCard: "",
  });

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue({ name: event.target.value, saveCard: "" });
  };
  const handleChanges2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue({ name: "", saveCard: event.target.value });
  };
  return (
    <>
      <div className="selectPaymentMethod">
        <div className="topDliveryFormatDiv">
          <span className="deliveryDubHead">
            Please select your preferred way to pay.
          </span>
          <div className="deliveryMethodsDiv">
            <div className="deliveryBoxPay">
              <div className="optionOnePay">
                <Radio
                  checked={selectedValue.name === "Cash"}
                  onChange={handleChanges}
                  value="Delivery"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "Best Offers" }}
                  sx={{
                    color: "#000",
                    "&.Mui-checked": {
                      color: "#000",
                    },
                  }}
                />
                <div className="imgCashContainer">
                  <img
                    src={require("../../assets/icn_wallet.png")}
                    alt="icn"
                    className="cashWalletIcn"
                  />
                  <span className="optionTextStyling">Cash</span>
                </div>
              </div>
            </div>
            <div className="PickUpBoxPay">
              <div className="optionTwoPay">
                <Radio
                  checked={selectedValue.name === "CreditCard"}
                  onChange={handleChanges}
                  value="PickUp"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "Best Offers" }}
                  sx={{
                    color: "#000",
                    "&.Mui-checked": {
                      color: "#000",
                    },
                  }}
                />
                <div className="imgCashContainer">
                  <img
                    src={require("../../assets/icn_credit_card.png")}
                    alt="icn"
                    className="cashWalletIcn"
                  />
                  <span className="optionTextStyling">Credit/Debit Card</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="addPaymentDetailsCard">
          <div className="addAdressBodyHeader">
            <div className="makePaymentLocConatinerCard">
              Enter Credit/Debit card details
            </div>
          </div>
          {/* <PaymentModal /> */}
          <div className="addAddressBody">
            <form
              className="addAddressFormContainer"
              onSubmit={(event: any) => {
                handleSubmit();
                submitHandler(event);
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
                <div className="addNewCardModalError">{errors.cardNumber}</div>
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
                <div className="addNewCardModalError">{errors.nameOncard}</div>
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
                      {/* <div className="addAddressFields"> */} {/* </div> */}
                    </div>
                  </div>

                  <div className="cardSecurityContainer">
                    <span className="expiryOfCard">Security card</span>
                    <div className="cardExpiryDetails">
                      {/* <div className="addAddressFields"> */} {/* </div> */}
                      <div className="cardSecurityCard">
                        {/* <div className="addAddressFields"> */}{" "}
                        <TextField
                          id="standard-basic"
                          // label="Address label"
                          variant="standard"
                          name="securityCard"
                          sx={{
                            width: 0.7,
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
              <div className="addCardtoSave">
                <div
                  className="addCardToSaveImg"
                  onClick={() => setPrimary(!primary)}
                >
                  {primary ? (
                    <img
                      src={require("../../assets/icn_check copy.png")}
                      alt=""
                      className="addCardToSaveIcn"
                    />
                  ) : (
                    <img
                      src={require("../../assets/icn_check-black.png")}
                      alt=""
                      className="addCardToSaveIcn"
                    />
                  )}
                </div>
                <div className="addCardToSaveText">
                  Add this card to saved cards
                </div>
              </div>
            </form>
          </div>
          <div className="addCardCreditScore">
            <div className="creditScoreLeft">
              <div className="yourCredits">Your credits</div>
              <div className="yourCreditScore">
                234<span className="aedCard">AED14.00</span>
              </div>
            </div>
            <div className="creditscoreRight">
              <div className="tickMarkCreditScore">
                <img
                  src={require("../../assets/icn_check-black.png")}
                  alt=""
                  className="tickCard"
                />
              </div>
              <div className="addCardRedeemItNow">Redeem it now</div>
            </div>
          </div>
        </div>
        <div className="paymentDeliveryDetails">
          <div className="paymentDeliveryHead">Delivery Details</div>
          <div className="paymentDeliveryLoc">
            <div className="paymentDeliveryLeft">
              <div className="deliveryLocPayHead">Delivery location</div>
              <div className="deliveryLocPay">
                Downtown Burj Khalifa, Dubai, UAE
              </div>
            </div>
            <div className="paymentDeliveryRight">Change</div>
          </div>
          <div className="paymentDeliveryLoc">
            <div className="paymentDeliveryLeft">
              <div className="deliveryLocPayHead">Date & Time</div>
              <div className="deliveryLocPay">Today at 11:30 AM</div>
            </div>
            <div className="paymentDeliveryRight">Change</div>
          </div>
        </div>
        <div className="itemsInYouOrder">
          {" "}
          <div className="paymentDeliveryHead">Items in your order from</div>
          <div className="addedHotelNameDetails">
            <div className="itemOrderLeft">
              <div className="addedHotelName">The Boutique Kitchen</div>
              <div className="addedHotelNamePlace">
                Shiekh Zayed Road, , Dubai, UAE
              </div>
            </div>
            <div className="itemOrderLeft">
              <div className="rightArrowBtn">
                <img
                  src={require("../../assets/arrow_choose_address.png")}
                  alt=""
                  className="rightArr"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="buttonsBottom">
          <div className="backButtonBottomDiv">
            <button className="backButtonBottom">BACK</button>
          </div>
          <div className="backButtonBottomDiv">
            <button className="payNowButtonBottom">PAY NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectPaymentMethod;
