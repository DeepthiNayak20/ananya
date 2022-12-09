import { inputLabelClasses, Modal, TextField } from "@mui/material";
import "../../views/home/home.css";
import "./restaurantSubHeader.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, showModal } from "../../redux/reducers/modalSlice";
import "../../views/restaurantList/restaurantList.css";
const RestaurantSubHeader = () => {
  const dispatch = useDispatch();
  let show: any = useSelector((state: any) => state.modalStatus.value);
  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <div className="searchBarDiv">
        <form className="placeDate">
          <img
            src={require("../../assets/icn_pin.png")}
            className="pinImage"
            alt="pin"
          />
          <input type="text" placeholder="" className="placeName" />
          <img
            src={require("../../assets/icn_gps_indicator.png")}
            alt=""
            className="gps"
          />
        </form>
        <form className="foodForm">
          <img
            src={require("../../assets/icn_search_home copy.png")}
            className="searchIcon"
            alt="glass"
          />
          <input
            type="text"
            placeholder="Search your restaurant or cuisines"
            className="searchFeild"
          />
        </form>
        <div className="datePicker">
          <img
            src={require("../../assets/now_button.png")}
            alt=""
            className="dateNow"
            onClick={() => dispatch(showModal())}
          />
        </div>
      </div>
      {/* routeDIV */}
      <div className="routeDiv">
        Home &#62; UAE &#62; Explore &#62; Great breakfasts
      </div>
      <div className="modalHolder">
        {" "}
        <Modal
          open={show}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="modalDiv style">
            <div className="scheduleBodyy">
              <div className="backBtnConatiner">
                <img
                  src={require("../../assets/dismiss button.png")}
                  className="addAddressBackButton"
                  onClick={() => dispatch(closeModal())}
                />
              </div>
              <div className="scheduleBodyHold">
                {" "}
                <div className="scheduleHeader">
                  <div className="scheduleHeading">Schedule</div>
                  <div className="scheduleBody">
                    Busy at work now, schedule it for later!
                  </div>
                </div>
                <div className="scheduleFormContainer">
                  <form className="shceduleForm">
                    <div className="scheduleEmail">
                      <TextField
                        id="standard-basic"
                        label="Date"
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
                    <div className="scheduleEmail">
                      <TextField
                        id="standard-basic"
                        label="Time"
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
                    <div className="scheduleBttn">
                      <button className="scheduleDateTime">
                        SCHEDULE DATE AND TIME
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default RestaurantSubHeader;
