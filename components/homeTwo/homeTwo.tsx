import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { popularBrandsAsyncThunk } from "../../redux/reducers/homePageslice";
import "./homeTwo.css";

const HomeTwo = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(popularBrandsAsyncThunk(4));
  // }, [dispatch]);
  let a: any = [1, 2];
  const viewNextPopularBrands = (count: any) => {
    dispatch(popularBrandsAsyncThunk(count));
  };

  const popularBrandsResp = useSelector((state: any) => state.popularBrands);
  console.log(
    "popularBarnds",
    typeof popularBrandsResp &&
      popularBrandsResp.data &&
      popularBrandsResp.data.data
  );
  const popularBrandsMapData: any =
    popularBrandsResp && popularBrandsResp.data && popularBrandsResp.data.data;
  return (
    <>
      <div className="homeTwoContainer">
        <div className="homeTwoContents">
          <div className="popularBrands">
            <div className="popularHead">Popular Brands</div>
            <div className="popularContent">
              Find out more about the world's top food brands are available all
              over the world today.
            </div>
          </div>
          <div className="popularHotel">
            {false ? (
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
              <>
                {" "}
                {a.map((brand: any, i: number) => {
                  return (
                    <div className="popularHotelDetails">
                      <div className="popularPresent">
                        <div className="popularHotelImg">
                          <img
                            src={require("../../assests/Bitmap.png")}
                            alt="img"
                            className="popularHeartPhoto"
                          />
                        </div>
                        <div className="popularDetails">
                          <div className="popularNames">
                            <div className="popularNameImg">
                              <img
                                src={require("../../assests/Oval 6.png")}
                                alt="img"
                              />
                            </div>{" "}
                            <div className="popularBrandsLoc">
                              {" "}
                              <div className="popularBrand">KFC</div>
                              <div className="popularNameLocation">
                                Latin American, Bakery
                              </div>
                            </div>
                          </div>
                          <div className="popularNameDetails">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus
                            <br /> consequat purus sit amet lectus bibendum
                            finbus vel.{" "}
                          </div>
                        </div>
                      </div>
                      <div>
                        {" "}
                        <div className="allBrands">
                          <div className="allBrandsText">All Brands</div>
                          <div className="nextBtn">
                            <i className="fa-solid fa-angle-right angleRight"></i>
                          </div>
                        </div>
                        <div className="nextBrands">
                          {" "}
                          <div className="previousBtn">
                            <img
                              src={require("../../assests/previous button.png")}
                              alt=""
                              className="previousRight"
                            />
                          </div>{" "}
                          <div className="nextBtn">
                            <img
                              src={require("../../assests/next button.png")}
                              alt=""
                              className="previousRight"
                              onClick={() => viewNextPopularBrands(i + 1)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTwo;
