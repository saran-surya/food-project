import React, {useEffect, useContext, useState} from 'react'
import {GlobalContext} from '../context/GlobalState'
export const FoodMenu = () => {
    // eslint-disable-next-line no-unused-vars
    const [location, setLocation] = useState("/food")
    const {setWindowLocation} = useContext(GlobalContext)
    useEffect(()=>{
        const _localDB = JSON.parse(localStorage.getItem("userCafe"));
        console.log(_localDB);
        if(_localDB === null || _localDB.registered === false){
            setWindowLocation("/");
        }
        console.log("Hello from Initial state")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])
    return (
        <div>
            Hello
        </div>
    )
}
