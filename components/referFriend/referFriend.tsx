import HeaderLogin from "../headerLogin/headerLogin";
import "./referFriend.css";

const ReferFriend = () => {
  return (
    <>
      <HeaderLogin/>
      <div className="referFriendWholeContainer">
        <div className="referFriendConatiner">
          <div className="referFriendHead">Refer friend</div>
          <div className="referFriendBody">
            <div className="referFriendBodyImg">
              <div className="referFriendImg">
                <img
                  src={require("../../assets/icn_refer_a_friend.png")}
                  alt=""
                  className="referImg"
                />
              </div>
              <div className="referFriendText">Refer friends & Earn!</div>
              <div className="referFriendTextCedit">
                Refer your friends and receive credits.
              </div>
            </div>
            <div className="referralCodeDetails">
              <div className="referCodeTxt">Your Code</div>
              <div className="referCode">12456</div>
            </div>
            <div className="referFriendBottom">
              <div className="referFriendLinks">
                <div className="referFb">
                  <img
                    src={require("../../assets/icn_facebook.png")}
                    alt=""
                    className="referFriendFB"
                  />
                </div>
                <div className="referFb">
                  <img
                    src={require("../../assets/icn_gmail.png")}
                    alt=""
                    className="referFriendGmail"
                  />
                </div>
              </div>
              <div className="backToOrders">BACK TO ORDERS</div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default ReferFriend;
