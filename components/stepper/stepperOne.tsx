import React from 'react'
import "./stepperOne.css"
const StepperOne = () => {
  return (
    <>
      <div className="stepperOneContainer">
        <img src={require("../../assets/order_status_order_accepted_illustration.png")} alt="img" className='stepperTopImg' />
        <div className="stepperstages">
          <div className="stage1">
            <span className="topStage1">View More</span>
            <img src={require("../../assets/check_green copy 2.png")} alt="time icon" className='timeIcon' />
            <span className='bottomText1'>Order waiting to accept</span>
            <span className='bottomText2'>Cancel Order</span>
          </div>
          <img src={require("../../assets/track_line@3x.png")} alt="trackline" className='trackLine1' />
          <div className="stage2 stage1">
            <span className="topStage1"></span>
            <img src={require("../../assets/grey_time_icon_status@3x.png")} alt="time icon" className='timeIcon' />
            <span className='bottomText1'>Order In kitchen</span>
            <span className='bottomText2'></span>
          </div>
          <div className="stage3 stage1">
            <span className="topStage1"></span>
            <img src={require("../../assets/grey_time_icon_status@3x.png")} alt="time icon" className='timeIcon' />
            <span className='bottomText1'>Order ready for pick-up</span>
            <span className='bottomText2'></span>
          </div>
          <div className="stage4 stage1">
            <span className="topStage1"></span>
            <img src={require("../../assets/grey_time_icon_status@3x.png")} alt="time icon" className='timeIcon' />
            <span className='bottomText1'>Waiting for delivery</span>
            <span className='bottomText2'></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default StepperOne;