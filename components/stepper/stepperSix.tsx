import React from 'react'
import "./stepperOne.css"
import "./stepperTwo.css"
import "./stepperThree.css"
import "./stepperFour.css"
import "./stepperFive.css"
import './stepperSix.css'
const StepperSix = () => {
    return (
        <>
            <div className="stepperOneContainer">
                <span className="stageSixRatingDIV">Driver can’t find the delivery address</span>
                <img src={require("../../assets/order_cancelled@3x.png")} alt="img" className='stepperTopImg' />
                <div className="stepperstages">
                    <div className="stageOne stage1">
                        <span className="topStage1">View More</span>
                        <img src={require("../../assets/check_green copy 2.png")} alt="time icon" className='timeIcon' />
                        <span className='bottomText1'>Order Accepted</span>
                        <span className='bottomText2'>March 23 2022 6:19 PM</span>
                    </div>
                    <img src={require("../../assets/track_line@3x.png")} alt="trackline" className='trackLine1' />
                    <div className="stage2 stage1">
                        <span className="topStage1"></span>
                        <img src={require("../../assets/check_green copy 2.png")} alt="time icon" className='timeIcon' />
                        <span className='bottomText1'>Order In kitchen</span>
                        <span className='bottomText2'>March 23 2022 6:19 PM</span>
                    </div>
                    <div className="stage3 stage1">
                        <span className="topStage1">View info</span>
                        <img src={require("../../assets/check_green copy 2.png")} alt="time icon" className='timeIcon' />
                        <span className='bottomText1'>Order out for Delivery</span>
                        <span className='bottomText2'>March 23 2022 6:19 PM</span>
                    </div>
                    <div className="stage4 stage1">
                        <span className="topStage1">View Info</span>
                        <img src={require("../../assets/order_cancel_icon@3x.png")} alt="time icon" className='timeIcon' />
                        <span className='bottomText1'>Order has Delivered</span>
                        <span className='bottomText2'>March 23 2022 6:19 PM</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepperSix;