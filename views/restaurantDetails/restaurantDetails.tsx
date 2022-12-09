import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import HeaderLogin from '../../components/headerLogin/headerLogin';
import RestaurantsDetailsHeader from '../../components/restaurantDetailsHeader/restaurantsDetailsHeader';
import RestaurantSubHeader from '../../components/restaurantSubHeader/restaurantSubHeader';
import { restaurantListAsyncThunk } from '../../redux/reducers/restaurantListSlice';
import RestaurantMenu from '../restaurantMenu/restaurantMenu';

const RestaurantDetails = () => {
    // const dispatch = useDispatch();
    // let data = useSelector((state: any) => state.restaurantList)
    // let restDetails = data?.data?.pageResults;
    // let e = restDetails;

    // useEffect(() => {
    //     dispatch(restaurantListAsyncThunk())
    //     console.log(restDetails)
    // }, [])
    let i = localStorage.getItem("id");
    return (
        <>
            <HeaderLogin />
            <RestaurantSubHeader />
            <RestaurantsDetailsHeader />
            <Outlet />
        </>
    )
}

export default RestaurantDetails