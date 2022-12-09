import React, { useState } from "react";
import "./proceedPayment.css";
import "../restaurantMenu/restaurantMenu.css";
import RestaurantSubHeader from "../../components/restaurantSubHeader/restaurantSubHeader";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  inputLabelClasses,
  Radio,
  TextField,
} from "@mui/material";
import PromoCodeImgCard from "../../components/promoCodeImgCard/promorCodeImgCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import PaymentProcess from "../../components/paymentProcess/paymentProcess";
import ChoseAddress from "../../components/choseAddress/choseAddress";
import SelectPaymentMethod from "../../components/selectPaymentMethod/selectPaymentMethod";
const ProceedPayment = () => {
  let e = [1, 2, 3, 4, 5];
  const [selectedValue, setSelectedValue] = useState("Add your referral code");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div className="proceedPaymentContainer">
        <RestaurantSubHeader />
        <div className="proceedPaymentContent">
          <div className="paymentHead">
            <span className="headingText">The Boutique Kitchen</span>
            <span className="headingSubText">
              Estimated Delivery time - 60 - 80 min
            </span>
          </div>
          <div className="paymentContent">
            <div className="leftSidePayment">
              {/* <PaymentProcess /> */}
              {/* <ChoseAddress /> */}
              <SelectPaymentMethod />
            </div>
            <div className="rightSidePaymentSummary">
              <span className="offersHeadText">Offers</span>
              <Accordion
                sx={{
                  boxShadow: "none",
                  borderBottom: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<span></span>}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <div className="optionTwo">
                    <Radio
                      checked={selectedValue === "Add your referral code"}
                      onChange={handleChange}
                      value="Add your referral code"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "Add your referral code" }}
                      sx={{
                        color: "#000",
                        "&.Mui-checked": {
                          color: "#000",
                        },
                      }}
                    />
                    <span className="optionTextStyling">
                      Add your referral Code
                    </span>
                  </div>
                </AccordionSummary>
                <AccordionDetails sx={{ position: "relative" }}>
                  <div className="optionTextStylingDiv">
                    <span className="addDetailsText">Add your Promo code</span>
                  </div>
                  <TextField
                    id="standard-basic"
                    label="Promo code ..."
                    variant="standard"
                    sx={{
                      width: 1,
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#f67e03",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#f67e03",
                      },
                      "& .MuiFormLabel-root.Mui-disabled": {
                        color: "red",
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        // set the color of the label when not shrinked
                        color: " #4A4A4A",
                        [`&.${inputLabelClasses.shrink}`]: {
                          // set the color of the label when shrinked (usually when the TextField is focused)
                          color: " #fff",
                        },
                      },
                    }}
                  />
                  <button className="applyButton">Apply</button>
                  <span className="noCOD">
                    COD option will not available for this offer.
                  </span>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  boxShadow: "none",
                  borderBottom: "none",
                  width: 1,
                }}
              >
                <AccordionSummary
                  expandIcon={<span></span>}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <div className="optionTwo">
                    <Radio
                      checked={selectedValue === "Best Offers"}
                      onChange={handleChange}
                      value="Best Offers"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "Best Offers" }}
                      sx={{
                        color: "#000",
                        "&.Mui-checked": {
                          color: "#000",
                        },
                      }}
                    />
                    <span className="optionTextStyling">Best Offers</span>
                  </div>
                </AccordionSummary>
                <AccordionDetails sx={{ position: "relative" }}>
                  <div className="viewAllOffersButton">View all offers</div>
                  <Splide
                    aria-label="promoCodes"
                    options={{
                      type: "loop",
                      arrows: false,
                      drag: "free",
                      focus: "center",
                      autoScroll: {
                        speed: 1,
                      },
                    }}
                  >
                    {e.map((e: any, i: any) => {
                      return (
                        <SplideSlide>
                          <PromoCodeImgCard />
                        </SplideSlide>
                      );
                    })}
                  </Splide>
                </AccordionDetails>
              </Accordion>
              <div className="paymentSplitDiv">
                <span className="payText">To Pay</span>
                <span className="payValue">AED85.76</span>
              </div>
              <div className="paymentLine1">
                <span className="itemsTotalText">Items total</span>
                <span className="itemsTotalText">AED118.00</span>
              </div>
              <div className="paymentLine2">
                <span className="itemsTotalText">Fee/ charges</span>
                <span className="itemsTotalText">AED118.00</span>
              </div>
              <div className="paymentLine3">
                <span className="itemsTotalText">Discount</span>
                <span className="itemsTotalText">AED118.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProceedPayment;
