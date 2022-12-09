import React, { useEffect, useState } from 'react'
import StepperFive from './stepperFive';
import StepperFour from './stepperFour';
import "./stepperMain.css"
import StepperOne from './stepperOne';
import StepperSix from './stepperSix';
import StepperThree from './stepperThree';
import StepperTwo from './stepperTwo';
const StepperMain = () => {

    const [count, setCount] = useState(1);
    useEffect(() => {
        if (count <= 6) {
            const id = setInterval(() => setCount((oldCount) => oldCount + 1), 5000);
            return () => {
                clearInterval(id);
            };
        }
    }, []);
    console.log(count);
    localStorage.setItem("STAGE", "1");
    let value = localStorage.getItem("STAGE");
    return (
        <>
            <div className="stepperContainer">
                <div className="stepperMainContent">
                    <span className='orderId'>Order ID:694206940</span>
                    <div className="stepperMainBox">
                        {(() => {
                            switch (value) {
                                case "1": return (<StepperOne />);
                                case "2": return (<StepperTwo />);
                                case "3": return (<StepperThree />);
                                case "4": return (<StepperFour />);
                                case "5": return (<StepperFive />);
                                case "6": return (<StepperSix />);
                            }
                        })()}
                        {/* <StepperOne /> */}
                        {/* <StepperTwo /> */}
                        {/* <StepperThree /> */}
                        {/* <StepperFour /> */}
                        {/* <StepperFive /> */}
                        {/* <StepperSix /> */}

                        <div className="stepperBottomButtons">
                            <div className="backToOrderButton">BACK TO ORDERS</div>
                            <div className="rightSideButtonDivs">
                                <div className="chatButton">CHAT</div>
                                <div className="orderDetailsButton">ORDER DETAILS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepperMain;