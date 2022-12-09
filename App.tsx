import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import React from "react";
import "./App.css";
import Home from "./views/home/home";
import { Routes, Route } from "react-router-dom";
import EmailBox from "./components/emailBoxForForgotPassword/emailBox";
import MobileBox from "./components/mobileNumberBoxFor/mobileBox";
import RestaurantList from "./views/restaurantList/restaurantList";
import RestaurantDetails from "./views/restaurantDetails/restaurantDetails";
import RestaurantsDetailsHeader from "./components/restaurantDetailsHeader/restaurantsDetailsHeader";
import RestaurantSubHeader from "./components/restaurantSubHeader/restaurantSubHeader";
import RestaurantGallery from "./components/restaurantGallery/restaurantGallery";
import ReviewsAndRatings from "./components/reviewsAndRatings/reviewsAndRatings";
import OverviewBody from "./components/overviewBody/overviewBody";
import ReferFriend from "./components/referFriend/referFriend";
import RestaurantMenu from "./views/restaurantMenu/restaurantMenu";
import StepperMain from "./components/stepper/stepperMain";
import ContactForm from "./views/contactForm/contactForm";
import ProfileOrders from "./components/profileOrders/profileOrders";
import ProfileAddress from "./components/profileAddress/profileAddress";
import ProfileHeader from "./components/profileHeader/profileHeader";
import ProfilePayment from "./components/profilePayment/profilePayment";
import BrandsNearBy from "./views/brandsNearBy/brandsNearBy";
import PrivacyPloicy from "./views/privacyPolicy/privacyPolicy";
import TermsAndCondition from "./views/termsAndCondition/termsAndCondition";
import DownloadAppSubHeader from "./components/downloadAppSubHeader/downloadAppSubHeader";
import LoremAbout from "./components/loremAbout/loremAbout";
import Error404 from "./components/error404/error404";
import MyCart from "./components/myCart/myCart";
import ProceedPayment from "./views/proceedPayment/proceedPayment";
import LoginOne from "./components/loginOne/loginOne";
import SignUp from "./components/signUp/signUp";
import ForgotPassword from "./components/forgotPassword/forgotPassword";
import OtpVerification from "./components/otpVerification/otpVerification";
import OtpVerified from "./components/otpVerified/otpVerified";
import OtpVerifiedSuccess from "./components/otpVerifiedSuccess/otpVerifiedSuccess";
import OtpVerificationLogin from "./components/otpVerificationLogin/otpVerificationLogin";
import MobileVerified from "./components/mobileVerified/mobileVerified";
import ForgotPasswordSuccess from "./components/forgotPasswordSuccess/forgotPasswordSuccess";
import HeaderLogin from "./components/headerLogin/headerLogin";
import Profile from "./views/Profile/profile";

function App() {
  const jwttokenLogin = localStorage.getItem("jwtToken");
  console.log(jwttokenLogin);

  return (
    <div className="App">
      {/* <RestaurantSubHeader /> */}

      {/* <RestaurantSubHeader />
      <RestaurantsDetailsHeader /> */}
      {/* <Home /> */}
      {/* <OverviewBody />
      <ReviewsAndRatings /> */}
      {/* <RestaurantGallery /> */}
      {/* <Footer /> */}
      {/* <BrandsNearBy /> */}
      {/* <RestaurantSubHeader /> */}
      {/* <RestaurantsDetailsHeader /> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="login" element={<LoginOne />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/signup/verifyotp" element={<OtpVerification />} />
          <Route path="/signup/verifyotp/verified" element={<OtpVerified />} />
          <Route
            path="/signup/verifyotp/verified/done"
            element={<OtpVerifiedSuccess />}
          />
          <Route
            path="/login/forgotpassword"
            element={<OtpVerificationLogin />}
          />
          <Route
            path="/login/forgotpassword/verification"
            element={<MobileVerified />}
          />
          <Route
            path="/login/forgotpassword/verification/verified"
            element={<ForgotPasswordSuccess />}
          />
        </Route>
        {jwttokenLogin === null ? (
          <Route path="*" element={<Home />} />
        ) : (
          <>
            <Route path="/restaurantLists" element={<RestaurantList />} />
            <Route path="/restaurantDetails" element={<RestaurantDetails />}>
              <Route path="" element={<RestaurantMenu />} />
              <Route path="restaurantOverview" element={<OverviewBody />} />
              <Route path="restReview" element={<ReviewsAndRatings />} />
              <Route path="restGallery" element={<RestaurantGallery />} />
            </Route>
            <Route path="/profileDetails" element={<Profile />}>
              <Route path="" element={<ProfileOrders />} />
              <Route path="profileaddress" element={<ProfileAddress />} />
              <Route path="profilepayment" element={<ProfilePayment />} />
            </Route>
            <Route path="/referfriend" element={<ReferFriend />} />
          </>
        )}
        {/* <Route path="/restaurantDetails" element={<RestaurantDetails />}>
          <Route path="" element={<RestaurantMenu />} />
          <Route path="restaurantOverview" element={<OverviewBody />} />
          <Route path="restReview" element={<ReviewsAndRatings />} />
          <Route path="restGallery" element={<RestaurantGallery />} />
        </Route>
        <Route path="/profileDetails" element={<Profile />}>
          <Route path="" element={<ProfileOrders />} />
          <Route path="profileaddress" element={<ProfileAddress />} />
          <Route path="profilepayment" element={<ProfilePayment />} />

          {/* <Route path="profilereview" element={<R />} />
          <Route path="profilegallery" element={<RestaurantGallery />} /> */}
        {/* </Route>
        <Route path="/referfriend" element={<ReferFriend />} />
        <Route path="/brandsNearby" element={<BrandsNearBy />} />
      </Routes> */}
      </Routes>
      {/* />
        </Route>
        {/* <Route path="/login" element={<LoginOne />} /> */}
      {/* <Route path="/restaurantLists" element={jwttokenLogin === null ? <Home /> : <RestaurantList />} /> */}
      {/* {jwttokenLogin === null ? (
          <Route path="/" element={<Home />} />
        ) :
          (
            <Route path="/restaurantLists" element={<RestaurantList />} />
          )
        } */}

      {/* <Home /> */}
      {/* <RestaurantList /> */}
      {/* <RestaurantMenu /> */}
      {/* <OverviewBody /> */}
      {/* <RestaurantGallery /> */}
      {/* <ReviewsAndRatings /> */}
      {/* <StepperMain /> */}
      {/* <ContactForm /> */}
      {/* <RestaurantSubHeader/> */}
      {/* <RestaurantsDetailsHeader/> */}
      {/* <RestaurantSubHeader /> */}
      {/* <RestaurantsDetailsHeader /> */}
      {/* <Home /> */}
      {/* <OverviewBody/> */}
      {/* <RestaurantGallery/> */}
      {/* <ReviewsAndRatings/> */}
      {/* <ProfileHeader /> */}
      {/* <ProfileOrders /> */}
      {/* <ProfileHeader/> */}
      {/* <ProfileHeader /> */}
      {/* <ProfileOrders /> */}
      {/* <ProfileAddress /> */}
      {/* <ProfilePayment /> */}
      {/* <MyCart /> */}
      {/* <ContactForm /> */}
      {/* <PrivacyPloicy /> */}
      {/* <TermsAndCondition /> */}
      {/* <DownloadAppSubHeader /> */}
      {/* <Error404 /> */}
      {/* <LoremAbout/> */}
      {/* <ProceedPayment /> */}
      {/* <ReferFriend /> */}
      <Footer />
    </div>
  );
}

export default App;
