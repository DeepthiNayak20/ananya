import { Accordion, AccordionDetails, AccordionSummary, inputLabelClasses, Radio, TextField } from '@mui/material';
import PromoCodeImgCard from '../../components/promoCodeImgCard/promorCodeImgCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import "../../views/proceedPayment/proceedPayment.css"
const PaymentProcess = () => {
    let e = [1, 2, 3, 4, 5];
    return (
        <>
            <div className='paymentProcessContainer'>
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
                <div className="PaymentButtonDiv">
                    <button className="backButton">BACK</button>
                    <button className="choseAdressButton">CHOSE ADDRESS</button>
                </div>
            </div>
        </>
    )
}

export default PaymentProcess;
