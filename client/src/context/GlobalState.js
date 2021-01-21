import React,{createContext, useReducer} from 'react'
import Appreducer from './Appreducer';

const initialState = {
    fullName : "",
    orgName : "",
    empId : "",
    mblNo : "",
    emailId : "",
    imgFile : "",
    registerId:'',
    registered : false,
    loading : true,
    error: false 
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(Appreducer, initialState)

    function sample(){
        console.log(gblGet())
    }

    function localSetter(pack){
        dispatch({
            type: "local-set",
            payload : pack
        })
    }

    async function registerToDb(pack){
        console.log(pack)
        lclRegistration(pack, true);
    }

    function gblGet(){
        const packet = {
            fullName : state.fullName,
            orgName : state.orgName,
            empId : state.empId,
            mblNo : state.mblNo,
            emailId : state.emailId,
            registerId : state.registerId,
        } 
        return packet 
    }


    function setWindowLocation(location){
        window.location = location;
    }

    async function lclRegistration(pack, condition){
        console.log(pack);
        pack["registered"] = condition
        dispatch({
            type: "register-user",
            payload : pack
        })
        console.log(state.registered)
        // move this to GBL registration
        localStorage.setItem("userCafe", JSON.stringify({
            fullName : state.fullName,
            orgName : state.orgName,
            empId : state.empId,
            mblNo : state.mblNo,
            emailId : state.emailId,
            registerId: state.registerId,
            registered : state.registered,
        }))
    }
    return(
        <GlobalContext.Provider value = {{
            fullName : state.fullName,
            orgName : state.orgName,
            empId : state.empId,
            mblNo : state.mblNo,
            emailId : state.emailId,
            imgFile : state.imgFile,
            registerId : state.registerId,
            registered : state.registered,
            sample,
            lclRegistration,
            gblGet,
            registerToDb,
            setWindowLocation,
            localSetter,
            loading : state.loading,
            error: state.error
        }}>
            {children}
        </GlobalContext.Provider>
    );
}