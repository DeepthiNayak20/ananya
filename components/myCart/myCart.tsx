import "./myCart.css";

const MyCart = () => {
  let e = [1, 2, 3];
  let rec = [1, 2, 3];
  return (
    <>
      <div className="myCartContainer">
        <div className="myCartContents">
          <div className="myCartTitle">My Cart (3)</div>
          <div className="myCartCardContainer">
            {rec.map((e: any, i: any) => {
              return (
                <div className="myCartCard">
                  <div className="myCartCardContents">
                    <div className="myCartCardTitle">
                      <div className="myCartHotelName">
                        The Boutique Kitchen
                      </div>
                      <div className="myCartRemoveOption">Remove</div>
                    </div>
                    <div className="myCartHotelAddress">
                      Shiekh Zayed Road, , Dubai, UAE
                    </div>
                    <div className="myCartHotelItemsCount">
                      3 Items | AED85.76
                    </div>
                    <div className="myCartItemsProceedButtons">
                      <button className="myCartProceedText">PROCEED</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCart;
