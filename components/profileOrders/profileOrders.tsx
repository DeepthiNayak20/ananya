import { inputLabelClasses, Modal, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, showModal } from "../../redux/reducers/modalSlice";
import "./profileOrders.css";
import "../../views/home/home.css";
import { receiveMessageOnPort } from "worker_threads";
import '../../views/home/home.css'


const ProfileOrders = () => {
  const dispatch = useDispatch();
  let show: any = useSelector((state: any) => state.modalStatus.value);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const rec = [1, 2, 3];
  const e = [1, 2, 3];
  return (
    <>
      <div className="profileOrdersContainer">
        <div className="profileOrdersContents">
          <div className="profileOrdersStatusTitle">
            Active Orders &nbsp;
            <img
              src={require("../../assets/icn_arrow_drop.png")}
              alt=""
              className="statusDrop"
            />
          </div>
          <div className="profileOrderCardsContainer">
            {rec.map(() => {
              return (
                <div className="profileOrderCard">
                  <div className="orderCardContents">
                    <div className="profileOrderDetails">
                      <div className="profileOrderId">Order id: 1234567890</div>
                      <div className="profileOrderStatus">Out for Delivery</div>
                    </div>
                    <div className="profileOrderKitchenName">
                      The Boutique Kitchen
                    </div>
                    <div className="profileOrderKitchenAddress">
                      Shiekh Zayed Road, , Dubai, UAE
                    </div>
                    <div className="profileOrderItemsCount">
                      3 Items | AED85.76
                    </div>
                    <div className="profileOrderButtons">
                      <button
                        className="profileOrderDetailsButton"
                        onClick={() => dispatch(showModal())}
                      >
                        DETAILS
                      </button>
                      <button className="profileOrderStatusButton">
                        STATUS
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
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
            <div className="orderDetailsModalContainer">
              <div className="closeBtnContainer">
                <img
                  src={require("../../assets/dismiss button.png")}
                  className="closeModalButton"
                  onClick={() => dispatch(closeModal())}
                />
              </div>

              <div className="orderDetailsModalContent">
                <div className="orderDetailsModalTitle">Order Details</div>
                <div className="orderDetailsModalBody">
                  <div className="orderDetailsModalCardTitle">Items</div>
                  <div className="orderDetailsModalCard">
                    <div className="orderDetailsModalCardContent">
                      <div className="orderDetailsModalCardParts">
                        <div className="orderDetailsModalPartTitle">
                          <img
                            src={require("../../assets/Group 8 Copy 2.png")}
                            alt=""
                            className="nonVegMark"
                          />
                          <div className="orderDetailsModalPartTitleText">
                            Chili Cheese Meal
                          </div>
                        </div>
                        <div className="orderDetailsModalPartCost">
                          AED27.00
                        </div>
                        <div className="orderDetailsInfo">
                          <div className="orderDetailsInfoText">
                            Add On : Avacado, Seasoned Grilled Chicken, Grilled
                            Salmon
                          </div>
                          <div className="orderDetailsModalPartCurrency">
                            AED54.00
                          </div>
                        </div>
                      </div>

                      <div className="orderDetailsModalCardPart">
                        <div className="orderDetailsModalPartTitle">
                          <img
                            src={require("../../assets/Group 8 Copy 2.png")}
                            alt=""
                            className="nonVegMark"
                          />
                          <div className="orderDetailsModalPartTitleText">
                            Chili Cheese Meal
                          </div>
                        </div>
                        <div className="orderDetailsModalPartCost">
                          AED27.00
                        </div>
                        <div className="orderDetailsInfo">
                          <div className="orderDetailsInfoText">
                            Add On : Avacado, Seasoned Grilled Chicken, Grilled
                            Salmon
                          </div>
                          <div className="orderDetailsModalPartCurrency">
                            AED54.00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="orderDetailsModalBody">
                  <div className="orderDetailsModalCardTitle">Amount</div>
                  <div className="orderDetailsModalCard">
                    <div className="orderDetailsModalCardContent">
                      <div className="orderDetailsModalCardParts">
                        <div className="orderDetailsModalPartTitle">
                          <div className="orderPaymentPaid">Paid</div>
                          <div className="orderPaymentPaidCost">AED85.76</div>
                        </div>

                        <div className="orderAmountInfo">
                          <div className="orderAmountInfoText">Items total</div>
                          <div className="orderAmountModalPartCurrency">
                            AED118.00
                          </div>
                        </div>

                        <div className="orderAmountInfo">
                          <div className="orderAmountInfoText">
                            Fee/ charges
                          </div>
                          <div className="orderAmountModalPartCurrency">
                            AED10.00
                          </div>
                        </div>

                        <div className="orderAmountInfo">
                          <div className="orderAmountInfoText">Discount</div>
                          <div className="orderAmountModalPartCurrency">
                            AED42.24
                          </div>
                        </div>
                      </div>
                      <div className="orderAmountModalPartTitle">
                        <div className="orderPaymentPaid">Payment Mode</div>
                        <div className="orderPaymentPaidCost">
                          Credit/Debit Card
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="orderDetailsModalBody">
                  <div className="orderDetailsModalCardTitle">
                    Delivery Details
                  </div>
                  <div className="orderDeliveryModalCard">
                    <div className="orderDeliveryModalCardContents">
                      <div className="orderDeliveryModalCardParts">
                        <div className="orderDeliveryModalLocation">
                          Delivery Location
                        </div>
                        <div className="orderDeliveryModalAddress">
                          Downtown Burj Khalifa, Dubai, UAE
                        </div>
                      </div>

                      <div className="orderDeliveryModalCardPart">
                        <div className="orderDeliveryModalLocation">
                          Date & Time
                        </div>
                        <div className="orderDeliveryModalAddress">
                          Today at 11:30 AM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="orderDetailsModalFooter">
                <div className="orderDetailsModalFooterContainer">
                  <div className="orderDetailsModalToRate">
                    Rate your Delivery
                  </div>
                  <div className="orderDetailsModalFooterRatings">
                    <img
                      src={require("../../assets/Rating 1.png")}
                      alt=""
                      className="ModalFooterRatingsStar"
                    />
                    <img
                      src={require("../../assets/Rating 1.png")}
                      alt=""
                      className="ModalFooterRatingsStar"
                    />
                    <img
                      src={require("../../assets/Rating 1.png")}
                      alt=""
                      className="ModalFooterRatingsStar"
                    />
                    <img
                      src={require("../../assets/Rating 1.png")}
                      alt=""
                      className="ModalFooterRatingsStar"
                    />
                    <img
                      src={require("../../assets/Rating 1.png")}
                      alt=""
                      className="ModalFooterRatingsStar"
                    />
                  </div>

                  <form className="modalFooterReviewsForm">
                    <div className="modalFooterReviewsTextField">
                      <TextField
                        id="standard-basic"
                        name="reviewsText"
                        label="Write a review"
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

                      <div className="reviewsSubmitButton">
                        <input
                          type="submit"
                          value="SUBMIT"
                          className="reviewsText"
                        />
                      </div>
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

export default ProfileOrders;
