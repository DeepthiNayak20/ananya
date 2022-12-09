import { inputLabelClasses, Modal, TextField } from "@mui/material";
import { IncomingMessage } from 'http'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { closeModal, showModal } from "../../redux/reducers/modalSlice";
import './profileHeader.css'
import '../profileOrders/profileOrders.css'
import '../../views/home/home.css'
import { useFormik } from "formik";
const ProfileHeader = () => {
    const [profileEditmodal, setprofileEditModal] = useState(false);
    const handleClose = () => {
        setprofileEditModal(false);
    };
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [orange, setorange] = useState({
        orangeo: true,
        orangea: false,
        orangep: false,
        oranger: false,
        orangeg: false,

    });
    const orderFn = () => {
        setorange({
            orangeo: true,
            orangea: false,
            orangep: false,
            oranger: false,
            orangeg: false,

        })
        navigate("")
    }

    const addressFn = () => {
        setorange({
            orangeo: false,
            orangea: true,
            orangep: false,
            oranger: false,
            orangeg: false,

        })
        navigate("profileaddress")
    }

    const paymentFn = () => {
        setorange({
            orangeo: false,
            orangea: false,
            orangep: true,
            oranger: false,
            orangeg: false,

        })
        navigate("profilepayment")
    }

    let show: any = useSelector((state: any) => state.modalStatus.value);

    const initialvalues = {
        userName: "",
        Name: "",
        ContactNumber: ''
    };
    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialvalues,
        onSubmit: (values) => { },
        // validationSchema: validationSchema,
    });
    return (
        <>
            <div className='profileHeaderMain'>
                <div className='profileHeaderContainer'>
                    <div className='profileHeader1'>
                        <div className='profileHeaderPic'>
                            <img src={require('../../assets/customerReview.jpg')} alt="" className='profileHeaderImg' />
                        </div>
                        <div className='profileHeaderRight'>
                            <div className='profileHeaderHead'>
                                <div className="profileHeaderHead1">
                                    <div className='profileHeaderHeadName'>
                                        Chandan
                                    </div>
                                    <div className='profileHeaderEdit' onClick={() => {
                                        setprofileEditModal(true)
                                    }}>
                                        Edit
                                    </div>
                                </div>
                                <div className="profileHeaderHead2">
                                    <div className="profileHeaderReferRect" onClick={()=>navigate('/referfriend')}>
                                        <div className="profileHeaderReferTxt">
                                            REFER A FRIEND
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='profileHeaderName'>
                                Chandan Gunaga
                            </div>
                            <div className='profileHeaderMobEmail'>
                                <div className='profileHeaderMobile'>
                                    <div className='profileHederMobImg'>
                                        <img src={require('../../assets/phone_icn.png')} alt="" className='profileHederMobImage' />
                                    </div>
                                    <div className='profileHerderMobileNum'>
                                        +971 87656 43217
                                    </div>
                                </div>
                                <div className='profileHeaderEmail'>
                                    <div className='profileHeaderEmailImg'>
                                        <img src={require('../../assets/mail_icn.png')} alt="" className='profileHeaderEmailImage' />
                                    </div>
                                    <div className='profileHeaderEmailTxt'>
                                        Abdulla@foodie.com
                                    </div>
                                </div>
                                <div className='profileHeaderCredit'>
                                    <div className='profileHedaerCreditEarned'>
                                        Credits Earned -
                                    </div>
                                    <div className='profileHeaderCreditPoint'>
                                        234
                                    </div>
                                    <div className='profileHeaderCreditImg'>
                                        <img src={require('../../assets/icn_info_small.png')} alt="" className='profileHeaderCreditImage' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='profileHeaderBottom'>
                        <div className='profileHeaderOrderComp'>
                            <div className='profileHeaderOrder' onClick={orderFn}>
                                ORDERS {orange.orangeo && <div className="orangeLine"></div>}
                            </div>
                            <div className='profileHeaderOrderNum'>
                                (2)
                            </div>
                        </div>
                        <div className='profileHeaderAddress' onClick={addressFn}>
                            ADDRESS {orange.orangea && <div className="orangeLine"></div>}
                        </div>
                        <div className='profileHeaderPayment' onClick={paymentFn}>
                            PAYMENT METHODS {orange.orangep && <div className="orangeLine"></div>}
                        </div>
                        <div className='profileHedaerReview'>
                            REEVIEW {orange.oranger && <div className="orangeLine"></div>}
                        </div>
                        <div className='profileHeaderGallery'>
                            GALLERY {orange.orangeg && <div className="orangeLine"></div>}
                        </div>

                    </div>
                </div>
            </div>
            <div className="modalHolder">
                {" "}
                <Modal
                    open={profileEditmodal}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description" >
                    <div className="modalDiv style">
                        <div className="orderDetailsModalContainerEdit">
                            <div className="profileEditContainer">
                                <div className="profileEditLeft">
                                    <div className="profileEditImageDiv">
                                        <img src={require('../../assets/customerReview.jpg')} alt="" className="profileEditImg" />
                                        <img src={require('../../assets/icn_add_photo.png')} alt="" className="profileEditAddImg" />
                                    </div>
                                    <div className="profileEditTxtFeild">
                                        <TextField name="userName" id="standard-basic" label="Username" variant="standard" value={values.userName} onChange={handleChange}
                                            onBlur={handleBlur} sx={{
                                                width: 1,
                                                '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                                                '& .MuiInput-underline:after': { borderBottomColor: '#0000007f' },
                                                '& .MuiFormLabel-root.Mui-disabled': {
                                                    color: 'red',
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    // set the color of the label when not shrinked
                                                    color: "#0000008a",
                                                    [`&.${inputLabelClasses.shrink}`]: {
                                                        // set the color of the label when shrinked (usually when the TextField is focused)
                                                        color: "#0000008a"
                                                    }
                                                }
                                            }} />
                                        <TextField name="Name" id="standard-basic" label="Name" variant="standard" value={values.Name} onChange={handleChange}
                                            onBlur={handleBlur} sx={{
                                                width: 1,
                                                '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                                                '& .MuiInput-underline:after': { borderBottomColor: '#0000007f' },
                                                '& .MuiFormLabel-root.Mui-disabled': {
                                                    color: 'red',
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    // set the color of the label when not shrinked
                                                    color: "#0000008a",
                                                    [`&.${inputLabelClasses.shrink}`]: {
                                                        // set the color of the label when shrinked (usually when the TextField is focused)
                                                        color: "#0000008a"
                                                    }
                                                }
                                            }} />
                                        <TextField name="ContactNumber" id="standard-basic" label="Phone Number" onChange={handleChange}
                                            onBlur={handleBlur} variant="standard" value={values.ContactNumber} sx={{
                                                width: 1,
                                                '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                                                '& .MuiInput-underline:after': { borderBottomColor: '#0000007f' },
                                                '& .MuiFormLabel-root.Mui-disabled': {
                                                    color: 'red',
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    // set the color of the label when not shrinked
                                                    color: "#0000008a",
                                                    [`&.${inputLabelClasses.shrink}`]: {
                                                        // set the color of the label when shrinked (usually when the TextField is focused)
                                                        color: "#0000008a"
                                                    }
                                                }
                                            }} />
                                    </div>
                                </div>
                                <div className="profileEditRight">
                                    <div className="profileEditRight1Txt">
                                        Choose a user avatar
                                    </div>
                                    <div className="profileEditAvatar">
                                        <img src={require('../../assets/icn_icecream.png')} alt="" className="profileEditAvatarImg" />
                                        <img src={require('../../assets/icn_cupcake.png')} alt="" className="profileEditAvatarImg" />
                                        <img src={require('../../assets/icn_frenchfries.png')} alt="" className="profileEditAvatarImg" />
                                        <img src={require('../../assets/icn_burger.png')} alt="" className="profileEditAvatarImg" />
                                        <img src={require('../../assets/icn_chicken.png')} alt="" className="profileEditAvatarImg" />
                                        <img src={require('../../assets/icn_bread.png')} alt="" className="profileEditAvatarImg" />
                                        <img src={require('../../assets/icn_donut.png')} alt="" className="profileEditAvatarImg" />
                                        <img src={require('../../assets/icn_beer.png')} alt="" className="profileEditAvatarImg" />
                                        <img src={require('../../assets/icn_pizza.png')} alt="" className="profileEditAvatarImg" />
                                    </div>
                                    <div className="profileEditBottomBtn">
                                        <div className="profileEditRectangle">
                                            <div className="profileEditRectangleTxt">
                                                SAVE
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>

        </>
    )
}

export default ProfileHeader
