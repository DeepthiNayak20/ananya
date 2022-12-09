import React from 'react'
import "./promoCodeImgCard.css"
const PromoCodeImgCard = () => {
    return (
        <>
            <div className="promoCodeImgCardContainer">
                <div className="promoCodeImgCardContent">
                    <img src={require("../../assets/img_coupon@3x.png")} alt="img" className='promoCodeCouponImg' />
                    <div className='offerTextTopDiv'>
                        <span className='offerText'>Flat 33% Off</span>
                        <span className='offerCodeText'> CDB33 </span>
                    </div>
                    <span className='offerTextBottomDiv'>
                        <span>
                            • 	Get flat 33% Off
                        </span>
                        <span>
                            • 	Max discount AED10
                        </span>
                        <span>
                            • 	Valid for 10days
                        </span>
                    </span>
                </div>
            </div>
        </>
    )
}

export default PromoCodeImgCard;