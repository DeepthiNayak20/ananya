import "./homeThree.css";
import "../homeTwo/homeTwo.css";

const HomeThree = () => {
  return (
    <>
      <div className="homeThreeConatiner">
        <div className="homeThreecontents">
          <div className="bestDealsOffers">
            <div className="bestOffersHead">Best Deals & Offers</div>
            <div className="offerListText">
              Endless deals near you! Grab the best deals and offers.
            </div>
          </div>
          <div className="offerListsContainer">
            <div className="offersList">
              <div className="percentOffer">
                <img
                  src={require("../../assests/Card2.png")}
                  alt=""
                  className="offerCardImg"
                />
              </div>{" "}
              <div className="offerCards">
                <img
                  src={require("../../assests/Card1.png")}
                  alt=""
                  className="offerCard"
                />
              </div>
            </div>
            <div className="allOffersDeals">
              <div className="allOffersText">All offers & deals</div>
              <div className="arrowNext">
                {" "}
                <i className="fa-solid fa-angle-right angleRight"></i>
              </div>
            </div>
            <div className="nextBrands">
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeThree;
