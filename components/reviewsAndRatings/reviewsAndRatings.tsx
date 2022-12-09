import { inputLabelClasses, TextField } from "@mui/material";
// import HeaderCopy from "../header copy/headerCopy";
import "./reviewsAndRatings.css";

const ReviewsAndRatings = () => {
  return (
    <>
      <div className="reviewsAndRatingsContainer">
        <div className="reviewsAndRatingsContents">
          <div className="reviewsAndRatingsSubHead">
            <div className="reviewsTitle">Reviews</div>
            <div className="reviewsShow">
              Show :
              <span className="recentTitle">
                &nbsp;Recent{" "}
                <img
                  src={require("../../assets/long-arrow-pointing-down.png")}
                  alt=""
                />
              </span>
            </div>
          </div>

          <div className="reviewsBottom">
            <div className="reviewsLeftSide">
              <div className="reviewsLeftCard">
                <div className="customerReviewsRatings">
                  <div className="customerReviewsDetails">
                    <div className="customerReviewProfileImage">
                      <img
                        src={require("../../assets/customerReview.jpg")}
                        alt=""
                        className="reviewCustomerImage"
                      />
                    </div>
                    <div className="reviewCustomerNameWithDetails">
                      <div className="reviewCustomerName">John Doe</div>
                      <div className="reviewCustomerNameReviews">
                        2 reviews, 30 Ratings
                      </div>
                      <div className="reviewStarsImage">
                        <img
                          src={require("../../assets/Rating 1.png")}
                          alt=""
                          className="ratingStars"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="customerReviewExplanation">
                    Offers homely and delicious Indian food choices. The rajma
                    chawal, chana bhature, pav bhaaji, kheer and paan mint
                    shisha are all great. The service is good and staff are
                    friendly. We also liked their playlist, it was a mix of
                    Indian and Western songs.
                  </div>
                  <div className="customerReviewDate">
                    <div className="reviewRatingsDate">March 15, 2018</div>
                    <div className="reviewsLike">
                      <img
                        src={require("../../assets/like_inactive.png")}
                        alt=""
                        className="likeImageInactive"
                      />
                      <div className="numberOfRatings">45</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reviewsLeftCard">
                <div className="customerReviewsRatings">
                  <div className="customerReviewsDetails">
                    <div className="customerReviewProfileImage">
                      <img
                        src={require("../../assets/customerReview.jpg")}
                        alt=""
                        className="reviewCustomerImage"
                      />
                    </div>
                    <div className="reviewCustomerNameWithDetails">
                      <div className="reviewCustomerName">John Doe</div>
                      <div className="reviewCustomerNameReviews">
                        2 reviews, 30 Ratings
                      </div>
                      <div className="reviewStarsImage">
                        <img
                          src={require("../../assets/Rating 1.png")}
                          alt=""
                          className="ratingStars"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="customerReviewExplanation">
                    Offers homely and delicious Indian food choices. The rajma
                    chawal, chana bhature, pav bhaaji, kheer and paan mint
                    shisha are all great. The service is good and staff are
                    friendly. We also liked their playlist, it was a mix of
                    Indian and Western songs.
                  </div>
                  <div className="customerReviewDate">
                    <div className="reviewRatingsDate">March 15, 2018</div>
                    <div className="reviewsLike">
                      <img
                        src={require("../../assets/like_inactive.png")}
                        alt=""
                        className="likeImageInactive"
                      />
                      <div className="numberOfRatings">45</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reviewsLeftCard">
                <div className="customerReviewsRatings">
                  <div className="customerReviewsDetails">
                    <div className="customerReviewProfileImage">
                      <img
                        src={require("../../assets/customerReview.jpg")}
                        alt=""
                        className="reviewCustomerImage"
                      />
                    </div>
                    <div className="reviewCustomerNameWithDetails">
                      <div className="reviewCustomerName">John Doe</div>
                      <div className="reviewCustomerNameReviews">
                        2 reviews, 30 Ratings
                      </div>
                      <div className="reviewStarsImage">
                        <img
                          src={require("../../assets/Rating 1.png")}
                          alt=""
                          className="ratingStars"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="customerReviewExplanation">
                    Offers homely and delicious Indian food choices. The rajma
                    chawal, chana bhature, pav bhaaji, kheer and paan mint
                    shisha are all great. The service is good and staff are
                    friendly. We also liked their playlist, it was a mix of
                    Indian and Western songs.
                  </div>
                  <div className="customerReviewDate">
                    <div className="reviewRatingsDate">March 15, 2018</div>
                    <div className="reviewsLike">
                      <img
                        src={require("../../assets/like_inactive.png")}
                        alt=""
                        className="likeImageInactive"
                      />
                      <div className="numberOfRatings">45</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reviewsRightSide">
              <div className="reviewsRightSideCard">
                <div className="reviewsExperienceTitle">
                  Rate your experience
                </div>
                <div className="reviewsExperienceContainer">
                  <div className="reviewsExperienceCategory">Food</div>
                  <div className="experienceStarsContainer">
                    <img
                      src={require("../../assets/Rating 1.png")}
                      alt=""
                      className="experienceRatingStars"
                    />
                    <img
                      src={require("../../assets/Rating 2.png")}
                      alt=""
                      className="experienceRatingStars"
                    />
                    <img
                      src={require("../../assets/Rating 3.png")}
                      alt=""
                      className="experienceRatingStars"
                    />
                    <img
                      src={require("../../assets/Rating 4.png")}
                      alt=""
                      className="experienceRatingStars"
                    />
                    <img
                      src={require("../../assets/Rating 5.png")}
                      alt=""
                      className="experienceRatingStars"
                    />
                  </div>
                  <div className="experienceSaved">
                    <img
                      src={require("../../assets/icn_check.png")}
                      alt=""
                      className="savedCheck"
                    />
                    <div className="experienceText">Saved</div>
                  </div>
                </div>

                <div className="reviewsExperienceContainer">
                  <div className="reviewsExperienceCategory">Services</div>
                  <div className="experienceStarsContainer">
                    <img
                      src={require("../../assets/Rating 1.png")}
                      alt=""
                      className="experienceRatingStars"
                    />
                    <img
                      src={require("../../assets/Rating 2.png")}
                      alt=""
                      className="experienceRatingStars"
                    />
                    <img
                      src={require("../../assets/Rating 3.png")}
                      alt=""
                      className="experienceRatingStars"
                    />
                    <img
                      src={require("../../assets/Rating 4.png")}
                      alt=""
                      className="experienceRatingStars"
                    />
                    <img
                      src={require("../../assets/Rating 5.png")}
                      alt=""
                      className="experienceRatingStars"
                    />
                  </div>
                  <div className="experienceSaved">
                    <img
                      src={require("../../assets/icn_check.png")}
                      alt=""
                      className="savedCheck"
                    />
                    <div className="experienceText">Saved</div>
                  </div>
                </div>

                <div className="reviewsExperienceContainer">
                  <div className="titleToReview">Write a review</div>
                  <form className="optionToReview">
                    <TextField
                      id="standard-basic"
                      name="firstName"
                      label="Start writing your review"
                      variant="standard"
                      //   value =
                      sx={{
                        width: 1,
                        "& .MuiInput-underline:before": {
                          borderBottomColor: "#A4A4A4",
                        },
                        "& .MuiInput-underline:after": {
                          borderBottomColor: "#A4A4A4",
                        },
                        "& .MuiFormLabel-root.Mui-disabled": {
                          color: "red",
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          // set the color of the label when not shrinked
                          color: "#A4A4A4",
                          [`&.${inputLabelClasses.shrink}`]: {
                            // set the color of the label when shrinked (usually when the TextField is focused)
                            color: "#A4A4A4",
                          },
                        },
                      }}
                    />
                    <div className="optionToAddImage">+ Add image</div>
                    <button type="submit" className="reviewsSubmitButton">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsAndRatings;
