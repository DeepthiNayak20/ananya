import { Accordion, AccordionDetails, AccordionSummary, inputLabelClasses, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import RestaurantSubHeader from '../../components/restaurantSubHeader/restaurantSubHeader'
import "./restaurantMenu.css"
const RestaurantMenu = () => {
    // const [searchBarValue, setsearchBarValue] = useState("");

    let e = [1, 2, 3, 4];
    let rec = [1, 2, 3];
    let soup = [1, 2, 3, 4];
    let appet = [1, 2];

    // let restaurantMenuArray = useSelector((state: any) => state?.restaurantDetailsList?.restaurantMenu?.menuItem);
    let restaurantMenuArray = useSelector((state: any) => state && state.restaurantDetailsList && state.restaurantDetailsList.restaurantMenu && state.restaurantDetailsList.restaurantMenu.menuItem)
    console.log(restaurantMenuArray);

    return (
        <>
            <div className="restaurantMenuContainer">

                <div className="restaurantMenuContent">
                    <div className="rcMenuLeftSide">
                        <div className='searchBarDivMenu'>
                            <input type="text" className='searchBarMenu' />
                            <img src={require("../../assets/icn_search_home copy.png")} alt="glass" className='searchIcnMenu' />
                        </div>
                        <div className="eachCatogery">
                            {/* <span>Recomended({rec.length})</span>
                            {
                                rec.map((e: any, i: any) => {
                                    return (
                                        <div className="eachItemOnMenu">
                                            <div className="dishImageDiv">
                                                <img src={require("../../assets/Bitmap (2).png")} alt="dishImage" className='eachdishImage' />
                                                <img src={require("../../assets/Group 8 Copy 2.png")} alt="vegNonVeg" className='vegNonVegIcn' />
                                            </div>
                                            <div className="dishDetailsDiv">
                                                <div className="topNameDetailsDiv">
                                                    <span className='DishNameText'>Chili Cheese Meal</span>
                                                    <span className='DishPriceText'>AED27.00</span>
                                                    <img src={require("../../assets/Best seller.png")} alt="bestseller" className='bestsellerIcn' />
                                                </div>
                                                <div className="customisableDiv">Customisable</div>
                                                <div className="descriptionAndAddDiv">
                                                    <div className="leftSideDesc">
                                                        Panko breaded mac and cheese balls fried until golden brown and served with our homemade marinara sauce.
                                                    </div>
                                                    <div className="rightSideButtons">
                                                        ADD
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                            <span>Soups({soup.length})</span>
                            {
                                soup.map((e: any, i: any) => {
                                    return (
                                        <div className="eachItemOnMenu">
                                            <div className="dishImageDiv">
                                                <img src={require("../../assets/Bitmap (2).png")} alt="dishImage" className='eachdishImage' />
                                                <img src={require("../../assets/Group 8 Copy 2.png")} alt="vegNonVeg" className='vegNonVegIcn' />
                                            </div>
                                            <div className="dishDetailsDiv">
                                                <div className="topNameDetailsDiv">
                                                    <span className='DishNameText'>Chili Cheese Meal</span>
                                                    <span className='DishPriceText'>AED27.00</span>
                                                    <img src={require("../../assets/Best seller.png")} alt="bestseller" className='bestsellerIcn' />
                                                </div>
                                                <div className="customisableDiv">Customisable</div>
                                                <div className="descriptionAndAddDiv">
                                                    <div className="leftSideDesc">
                                                        Panko breaded mac and cheese balls fried until golden brown and served with our homemade marinara sauce.
                                                    </div>
                                                    <div className="rightSideButtons">
                                                        ADD
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            } */}
                            <span className='restaurantMenuArrayText'>{restaurantMenuArray && restaurantMenuArray[0] && restaurantMenuArray[0].dishType} ({restaurantMenuArray && restaurantMenuArray[0] && restaurantMenuArray[0].count})</span>
                            {
                                restaurantMenuArray && restaurantMenuArray[0] && restaurantMenuArray[0].menuDetailsList.map((e: any, i: any) => {
                                    return (
                                        <div className="eachItemOnMenu">
                                            <div className="dishImageDiv">
                                                <img src={e.dishPhoto ? e.dishPhoto : "https://www.zoopindia.com/blog/wp-content/uploads/2022/09/satvik-food-for-navratri.webp"} alt="dishImage" className='eachdishImage' />
                                                {e.veg ? <img src={require("../../assets/icon_veg.png")} alt="vegNonVeg" className='vegNonVegIcn' /> :
                                                    <img src={require("../../assets/Group 8 Copy 2.png")} alt="vegNonVeg" className='vegNonVegIcn' />}
                                            </div>
                                            <div className="dishDetailsDiv">
                                                <div className="topNameDetailsDiv">
                                                    <span className='DishNameText'>{e.dishName}</span>
                                                    <span className='DishPriceText'>AED{e.price}</span>
                                                    {
                                                        e.bestSeller ? <img src={require("../../assets/Best seller.png")} alt="bestseller" className='bestsellerIcn' /> : <></>
                                                    }
                                                </div>
                                                {
                                                    e.customizable ? <div className="customisableDiv">Customisable</div> : <></>
                                                }
                                                <div className="descriptionAndAddDiv">
                                                    <div className="leftSideDesc">
                                                        {e.description}
                                                    </div>
                                                    <div className="rightSideButtons">
                                                        ADD
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="rcMenuRightSide">
                        <div className="orderSummaryHead">
                            <span className="OrderHead">My Order</span>
                            <span className="clearCart">Clear Cart</span>
                        </div>
                        <div className="orderList">
                            {
                                e.map((e: any, i: any) => {
                                    return (
                                        <div className="eachOrder">
                                            <div className="eachOrderTop">
                                                <div className="topLeftDiv">
                                                    <span className='dishName'><img src={require("../../assets/Group 8 Copy 2.png")} alt="nonVeg" /> Chili Cheese Meal</span>
                                                    <span className='dishPrice'>AED27.00</span>
                                                </div>
                                                <div className="topRightDiv">
                                                    <div className="quantityIncDec">
                                                        <img src={require("../../assets/my_order_minus_inactive.png")} alt="minus" className='minusSign' />
                                                        <span className="quantityValue">2</span>
                                                        <img src={require("../../assets/my_order_plus_active.png")} alt="plus" className='plusSign' />
                                                    </div>
                                                    <span className='totalQuantityPrice'>AED54.00</span>
                                                </div>
                                            </div>
                                            <div className="eachOrderDesc">
                                                <span className="descriptionText">Add On : Avacado, Seasoned Grilled Chicken, Grilled Salmon</span>
                                            </div>
                                            <div className="eachOrderAccordian">
                                                <Accordion sx={{
                                                    boxShadow: "none",
                                                    borderBottom: "none"
                                                }}>
                                                    <AccordionSummary
                                                        expandIcon={<span></span>}
                                                        aria-controls="panel2a-content"
                                                        id="panel2a-header"
                                                    >
                                                        <div className="accordianHeading">
                                                            <span className="leftSideAC">
                                                                customise
                                                            </span>
                                                            <span className='rightSide'>Remove</span>
                                                        </div>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <TextField id="standard-basic" label="Add Customisation" variant="standard" sx={
                                                            {
                                                                width: 1,
                                                                '& .MuiInput-underline:before': { borderBottomColor: '#f67e03' },
                                                                '& .MuiInput-underline:after': { borderBottomColor: '#f67e03' },
                                                                '& .MuiFormLabel-root.Mui-disabled': {
                                                                    color: 'red',
                                                                },
                                                            }

                                                        }
                                                            InputLabelProps={{
                                                                sx: {
                                                                    // set the color of the label when not shrinked
                                                                    color: "#f67e03",
                                                                    [`&.${inputLabelClasses.shrink}`]: {
                                                                        // set the color of the label when shrinked (usually when the TextField is focused)
                                                                        color: "#f67e03"
                                                                    }
                                                                }
                                                            }} />
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className="payMentAccordian">
                            <Accordion sx={{
                                boxShadow: " 0 2px 10px 0 rgba(198,198,198,0.5)",
                                borderBottom: "none",
                            }}>
                                <AccordionSummary
                                    expandIcon={<span></span>}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <div className="paymentaccordianHeading">
                                        <span className="leftSidePAC">
                                            To Pay
                                        </span>
                                        <span className='rightSidePAC'>AED85.76</span>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails sx={{
                                    bgcolor: "#FCFCFC"
                                }}>
                                    <div className="paymentDescriptionSplit">
                                        <div className="itemsTotalDiv"><span className="leftSide">Items total</span><span className="rightSide">AED118.00</span></div>
                                        <div className="itemsTotalDiv"><span className="leftSide">Fee/ charges</span><span className="rightSide">AED10.00</span></div>
                                        <div className="itemsTotalDiv"><span className="leftSide">Discount</span><span className="rightSide">AED42.24</span></div>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className="cookingInstructionDiv">
                            <span className="cookinInstructionHead">Cooking instructions?</span>
                            <TextField id="standard-basic" label="Mention it here ..." variant="standard" sx={
                                {
                                    width: 1,
                                    '& .MuiInput-underline:before': { borderBottomColor: '#000000' },
                                    '& .MuiInput-underline:after': { borderBottomColor: '#f67e03' },
                                    '& .MuiFormLabel-root.Mui-disabled': {
                                        color: 'red',
                                    },
                                }

                            }
                                InputLabelProps={{
                                    sx: {
                                        // set the color of the label when not shrinked
                                        color: "#000000",
                                        [`&.${inputLabelClasses.shrink}`]: {
                                            // set the color of the label when shrinked (usually when the TextField is focused)
                                            color: "#f67e03"
                                        }
                                    }
                                }} />
                        </div>
                        <div className='checkOutButton'>PROCEED TO CHECKOUT &#62;</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default RestaurantMenu