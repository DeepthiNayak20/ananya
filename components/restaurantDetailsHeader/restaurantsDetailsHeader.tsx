import { NavLink, useNavigate } from "react-router-dom";
import "./restaurantDetailsHeader.css";
import { useState } from 'react';
import { set } from "immer/dist/internal";
import { useSelector } from "react-redux";

const RestaurantsDetailsHeader = () => {
  let ratingsCases = [4, 4, 3, 4, 2];
  let ratingImg: any;
  const navigate = useNavigate()
  const [orange, setorange] = useState({
    orangem: true,
    orangeo: false,
    orangeg: false,
    oranger: false

  });
  const menuFn = () => {
    setorange({
      orangem: true,
      orangeo: false,
      orangeg: false,
      oranger: false

    })
    navigate("")
  }

  const OvFn = () => {
    setorange({
      orangem: false,
      orangeo: true,
      orangeg: false,
      oranger: false

    })
    navigate("restaurantOverview")
  }

  const rrFn = () => {
    setorange({
      orangem: false,
      orangeo: false,
      orangeg: false,
      oranger: true

    })
    navigate("restReview")
  }

  const glryFn = () => {
    setorange({
      orangem: false,
      orangeo: false,
      orangeg: true,
      oranger: false

    })
    navigate("restGallery")
  }

  let restaurantHeaderDetails = useSelector((state: any) => state?.restaurantDetailsList?.restaurantHeader);
  console.log("restaurantHeaderDetails", restaurantHeaderDetails)
  return (
    <>
      <div className="HotelDetailsHead">
        <div className="hotelDetailContainer">
          <div className="hotelDetailHeadImg">
            <img
              src={require("../../assets/restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle.png")}
              alt="img"
              className="restaurantLogoIcn"
            />
          </div>
          <div className="hotelNameLocation">
            <div className="hotleName">{restaurantHeaderDetails.restaurantName}</div>
            <div className="hotelLocation">{restaurantHeaderDetails.restaurantType}</div>
          </div>
          <div className="hotelRatingsTime">
            <div className="hotelRatingContinaer">
              <div className="hotelRating">{restaurantHeaderDetails.overAllRating}</div>{" "}
              <span className="dots"></span>
              <div className="hotelMins">{restaurantHeaderDetails.duration} mins</div>
              <span className="dots"></span>
              <div className="hotelMinOrder">AED{restaurantHeaderDetails.minimumCost} min order</div>
            </div>
            <div className="hotelTimingsConatiner">
              <div className="timeImg">
                <img
                  src={require("../../assets/time_icon.png")}
                  alt=""
                  className="timeIcon"
                />
              </div>
              <div className="HotelWorkingtimings">{restaurantHeaderDetails.workingHours}</div>
            </div>
          </div>
          <div className="hotelLastRatings">
            <div className="hotelLastRatingText">
              Delivery rating for last 5 orders
            </div>
            <div className="hotelRatingsDiv">
              {ratingsCases.map((ele: any, i: any) => {
                console.log();

                switch (ele) {
                  case 1:
                    ratingImg = "Rating 1.png";
                    break;
                  case 2:
                    ratingImg = "Rating 1.png";
                    break;
                  case 3:
                    ratingImg = "Rating 3.png";
                    break;
                  case 4:
                    ratingImg = "Rating 5.png";
                    break;
                  case 5:
                    ratingImg = "Rating 1.png";
                    break;
                  default:
                    ratingImg = "Rating 1.png";
                    break;
                }
                return (
                  <div className="lastRating">
                    <img src={require(`../../assets/${ratingImg}`)} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="hotelsDetailsHeader">
          {/* <div className="hotelDetailMenu" ><NavLink to='' className='navDiv'> Menu</NavLink></div>
          <div className="hotelDetailMenu"><NavLink to='restaurantOverview' className='navDiv'>OverViews</NavLink></div>
          <div className="hotelDetailMenu"><NavLink to='restReview' className='navDiv'>Reviews & Ratings</NavLink></div>
          <div className="hotelDetailMenu"><NavLink to='restGallery' className='navDiv'>Gallery</NavLink></div> */}
          <div className="hotelDetailMenu" onClick={menuFn} > Menu {orange.orangem && <div className="orangeLine"></div>} </div>
          <div className="hotelDetailMenu" onClick={OvFn}>OverViews {orange.orangeo && <div className="orangeLine"></div>} </div>
          <div className="hotelDetailMenu" onClick={rrFn}>Reviews & Ratings {orange.oranger && <div className="orangeLine"></div>} </div>
          <div className="hotelDetailMenu" onClick={glryFn}>Gallery {orange.orangeg && <div className="orangeLine"></div>}</div>
        </div>
      </div>
    </>
  );
};

export default RestaurantsDetailsHeader;
