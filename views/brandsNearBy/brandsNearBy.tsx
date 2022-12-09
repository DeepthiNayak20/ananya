import { Radio, RadioGroup } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeaderLogin from "../../components/headerLogin/headerLogin";
import "../../components/homeTwo/homeTwo.css";
import RestaurantSubHeader from "../../components/restaurantSubHeader/restaurantSubHeader";
import { allBrandsAsyncThunk } from "../../redux/reducers/restaurantListSlice";
import "./brandsNearby.css";

const BrandsNearBy = () => {
  const arr: any = [1];


  const navigate = useNavigate();
  const dispatch = useDispatch();
  let data = useSelector((state: any) => state.restaurantList);
  let restDetails = data?.restaurants?.pageResults;
  let brandDetails = data?.brands[5];
  console.log(brandDetails);

  useEffect(() => {
    dispatch(allBrandsAsyncThunk());
    console.log(restDetails);
  }, []);
  return (
    <>
      <HeaderLogin />
      <RestaurantSubHeader />
      <div className="brandsNearByContainer">
        <div className="brandsNearByContents">
          {/* <div className="brandsNewPath">
            Home {">"} UAE {">"} Explore {">"} All Brands
          </div> */}
          <div className="popularHotel">
            {arr.length === 0 ? (
              <div className="noPopularBrands">
                <div className="noPopularBrandsImg">
                  <img
                    src={require("../../assets/icn_no_restaurants.jpg")}
                    alt=""
                  />
                </div>
                <div className="oops">OOPS!</div>
                <div className="noPopularBrandsText">
                  No brands nearby change to other locations and try.
                </div>
              </div>
            ) : (
              <div className="brandsNewConatiner">
                {brandDetails?.map((ele: any, i: any) => {
                  return (
                    <div className="brandsPopularHotelDetails" key={i}>
                      <div className="popularPresent">
                        <div className="popularHotelImg">
                          <img
                            src={ele.profilePic}
                            alt="img"
                            className="popularHeartPhoto"
                          />
                        </div>
                        <div className="popularDetails popularDetailsinBrandsscreen">
                          <div className="popularNames">
                            <div className="popularNameImg">
                              <img
                                src={ele.logo}
                                alt="img"
                                className="logoBrandLogo"
                              />
                            </div>{" "}
                            <div className="popularBrandsLoc">
                              {" "}
                              <div className="popularBrand">{ele.brandName}</div>
                              <div className="popularNameLocation">
                                {ele.brandOrigin}
                              </div>
                            </div>
                          </div>
                          <div className="popularNameDetails">
                            {ele.description}{" "}
                          </div>
                        </div>
                      </div>
                      <div className="brandsNearByOutlets">
                        <div className="outLetsContainer">
                          <div className="outletsImgMenu">
                            <img
                              src={require("../../assets/icn_fav_menu.png")}
                              alt=""
                              className="brandsNewFavImg"
                            />
                          </div>
                          <div className="outletsText">Outlets</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandsNearBy;
