import React, { useState } from "react";
import { inputLabelClasses, MenuItem, Radio, TextField } from "@mui/material";
import "./choseAddress.css";
import codeOptions from "../../data/codes";
const ChoseAddress = () => {
  let e = [1, 2];
  const [selectedValue, setSelectedValue] = useState("Delivery");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const [tickValue, settickValue] = useState(false);
  const tickFn = (i: any) => {
    settickValue(!tickValue);
  };
  const options = codeOptions;

  const [code, setCode] = useState("india");

  const handleChangeMui = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };
  return (
    <>
      <div className="choseAddressContainer">
        <div className="topDliveryFormatDiv">
          <span className="deliveryDubHead">
            How would you like us to get your meal to you?
          </span>
          <div className="deliveryMethodsDiv">
            <div className="deliveryBox">
              <img
                src={require("../../assets/deliver_icon@3x.png")}
                alt="icn"
                className="deliveryBoxImg"
              />
              <div className="optionOne">
                <Radio
                  checked={selectedValue === "Delivery"}
                  onChange={handleChange}
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
                <span className="optionTextStyling">Deliver to me</span>
              </div>
            </div>
            <div className="PickUpBox">
              <img
                src={require("../../assets/pick_up_icon@3x.png")}
                alt="icn"
                className="pickUpBoxImg"
              />
              <div className="optionTwo">
                <Radio
                  checked={selectedValue === "PickUp"}
                  onChange={handleChange}
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
                <span className="optionTextStyling">Pick Up</span>
              </div>
            </div>
          </div>
        </div>
        <div className="myAdressDiv">
          <div className="myAdreesTop">
            <span className="myAdressText">My Addresses ({e.length})</span>
            <div className="AddNewAddressButton">ADD NEW</div>
          </div>
          <div className="adressBoxesDiv">
            {e.map((e: any, i: any) => {
              return (
                <div className="addressBoxes" key={i}>
                  <div className="tickBox">
                    <div className="unticked" onClick={() => tickFn(i)}>
                      {tickValue && (
                        <img
                          src={require("../../assets/icn_check-black.png")}
                          alt="tick"
                          className="tickedImage"
                        />
                      )}
                    </div>
                  </div>
                  <div className="details">
                    <span className="addressType">Home</span>
                    <span className="addressPlaceText">
                      Downtown Burj Khalifa, Dubai, UAE
                    </span>
                  </div>
                  <div className="buttonsEditDelete">
                    <span className="editButtonAddress">Edit</span>
                    <span className="deleteButtonAddress">Delete</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="contactDetailsFormDiv">
          <span className="ContactDetailsHead">Contact Details</span>
          <div className="formLine1">
            <TextField
              name="Pname"
              id="standard-basic"
              label="Name"
              variant="standard"
              sx={{
                width: 0.6,
                minWidth: 250,
                "& .MuiInput-underline:before": { borderBottomColor: "black" },
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
                  color: "black",
                  [`&.${inputLabelClasses.shrink}`]: {
                    // set the color of the label when shrinked (usually when the TextField is focused)
                    color: "#0000008a",
                  },
                },
              }}
            />
          </div>
          <div className="formLine2">
            <span className="mobileNumberLabel">Mobile No.</span>
            <div className="formLine2inputDivs">
              <TextField
                id="standard-select-code"
                select
                value={code}
                onChange={handleChangeMui}
                helperText=""
                variant="standard"
                sx={{
                  width: 100,
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "black",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#0000007f",
                  },
                  "& .MuiFormLabel-root.Mui-disabled": {
                    color: "red",
                  },
                  textAlign: "left",
                }}
                InputLabelProps={{
                  sx: {
                    textAlign: "left",
                    // set the color of the label when not shrinked
                    color: "black",
                    [`&.${inputLabelClasses.shrink}`]: {
                      // set the color of the label when shrinked (usually when the TextField is focused)
                      color: "#0000008a",
                    },
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                name="Pname"
                id="standard-basic"
                variant="standard"
                sx={{
                  width: 0.4,
                  minWidth: 250,
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
                    color: "black",
                    [`&.${inputLabelClasses.shrink}`]: {
                      // set the color of the label when shrinked (usually when the TextField is focused)
                      color: "#0000008a",
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="formLine3">
            <TextField
              name="deliveryInstruction"
              id="standard-basic"
              label="Delivery Instructions"
              variant="standard"
              placeholder="Mnetion Here..."
              sx={{
                width: 1,
                minWidth: 250,
                "& .MuiInput-underline:before": { borderBottomColor: "black" },
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
                  color: "black",
                  [`&.${inputLabelClasses.shrink}`]: {
                    // set the color of the label when shrinked (usually when the TextField is focused)
                    color: "#0000008a",
                  },
                },
              }}
            />
          </div>
          <div className="buttonLine">
            <button className="backButton">BACK</button>
            <button className="choseAdressButton">CHOSE PAYMENT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChoseAddress;
