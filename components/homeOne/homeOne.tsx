import React from 'react'
import './homeOne.css'
const HomeOne = () => {
    return (
        <>
            <div className='homeOneContainer'>
                <div className="oneConatiner">
                    <div className="ordeDiv">
                        <div className="order">Order your food <br />
                            from the best restaurants</div>
                    </div>
                    <form className='foodFormOne'>
                        <div className='foodSearch'>
                            <img src={require("../../assets/icn_search_home copy.png")} className='searchIcon' alt="glass" />
                        </div>
                        <div className='foodInput'>
                            <input type='text' placeholder='Search your restaurant or cuisines' className='searchFeildOne' />
                        </div>
                    </form>
                    <form className='placeDateOne'>
                        <div className='placeDiv'>
                            <img src={require("../../assets/icn_pin.png")} className='pinImage' alt='pin' />
                            <input type='text' placeholder='' className='placeNameOne' />
                            <img src={require('../../assets/icn_gps_indicator.png')} alt="" className='gps' />
                        </div>
                        <div className="datePicker">
                            <div className="dateTime">
                                Today, 28 April, 2018
                            </div>
                            <img src={require("../../assets/now_button.png")} alt="" className='dateNowHome' />
                        </div>
                    </form>
                    <div className="scroll">
                        <div className="srollIcon">
                            <img src={require('../../assets/mouse.png')} alt="" />
                        </div>
                        <div className='scrollText'>
                            Scroll
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeOne