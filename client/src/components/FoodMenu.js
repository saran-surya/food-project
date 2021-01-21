/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useContext, useState} from 'react'
import {GlobalContext} from '../context/GlobalState'
import sambarIdli from '../assets/images/breakfast/idli-sambar-1.jpg';
import gheeDosa from '../assets/images/breakfast/ghee-dosa.jpg'
import masalDosa from '../assets/images/breakfast/masala-dosa.jpg'
import poori from '../assets/images/breakfast/poori.jpg'
import roti from '../assets/images/breakfast/roti.jpg'
import briyani from '../assets/images/lunch/briyani.jpg';
import curdRice from '../assets/images/lunch/curdRice.jpg';
import friedRice from '../assets/images/lunch/friedRice.jpg';
import rotiLunch from '../assets/images/lunch/rotiLunch.jpg';
import southMeals from '../assets/images/lunch/southMeals.jpg';

export const FoodMenu = () => {
    // eslint-disable-next-line no-unused-vars
    const [location, setLocation] = useState("/food")
    const {setWindowLocation, localSetter, fullName, empId, registerId} = useContext(GlobalContext)
    useEffect(()=>{
        const _localDB = JSON.parse(localStorage.getItem("userCafe"));
        console.log(_localDB);   
        if(_localDB === null || _localDB.registered === false || _localDB.registered === undefined || _localDB.registered === null){
            setWindowLocation("/");
        }
        console.log("Hello from Initial state")
        const payload = {
            fullName : _localDB.fullName,
            orgName : _localDB.orgName,
            empId : _localDB.empId,
            mblNo : _localDB.mblNo,
            emailId : _localDB.emailId,
            registerId : _localDB.registerId,
        }
        // lclRegistration(payload);
        localSetter(payload);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    

    const imagesListBrk = [sambarIdli, masalDosa, gheeDosa, poori, roti]
    const menuCostBrk = [20, 35, 40, 35, 20]
    const brkNames = ["Idli(3pcs)", "Masala Dosa(2pcs)", "Ghee Dosa(2pcs)", "Poori(3pcs)", "Roti(2pcs)"]

    const imagesListLunch = [briyani, curdRice, friedRice, rotiLunch, southMeals]
    const menuCostLunch = [100, 20, 40, 20, 80]
    const lunchNames = ["Briyani", "Curd Rice", "Fried Rice", "Roti(2pcs)", "South Indian Meals"]

    return (
        <div className = "main-grid-wrapper">
            <div className = "nav-bar">
                <h2>Hello &nbsp; &nbsp; {fullName}</h2>
                <h2>Registration ID : {registerId}</h2>
            </div>
            <div className = "menu-wrapper">
                <div className = "breakfast">
                    <h3>Breakfast</h3>
                        {imagesListBrk.map((element, i)=>{
                            // console.log(menuCostBrk[i])
                            return(
                                <div className = "breakfast-ingroup">
                                <img src ={element}></img>
                                <div className = "meals-ingroup-rate">
                                    {brkNames[i]}<br/>
                                    {menuCostBrk[i]}/-
                                </div>
                            </div>
                            )
                        })}
                </div>
                {/* MEals items */}
                <div className = "breakfast lunch">
                    <h3>Lunch</h3>
                    {imagesListLunch.map((element, i)=>{
                            // console.log(menuCostBrk[i])
                            return(
                                <div className = "breakfast-ingroup">
                                <img src ={element}></img>
                                <div className = "meals-ingroup-rate">
                                    {lunchNames[i]}<br/>
                                    {menuCostLunch[i]}/-
                                </div>
                            </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}
