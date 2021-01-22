import React,{createContext, useReducer} from 'react'
import Appreducer from './Appreducer';
import axios from 'axios';

const initialState = {
    fullName : "",
    orgName : "",
    empId : "",
    mblNo : "",
    emailId : "",
    imgFile : "",
    registerId:'',
    registered : false,
    loading : false,
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

    function toggleLoad(){
        dispatch({
            type: "load",
            payload : {
                loader : !state.loading
            }
        })
    }

    function toggleError(){
        dispatch({
            type: "error",
            payload : {
                error:!state.error
            }
        })
    }

    async function registerToDb(pack){
        try {
            toggleLoad()
            const config = {
                headers:{
                    'ContentType': 'application/json'
                }
            }

            const packet = {
                userName : pack.fullName,
                orgName : pack.orgName,
                empId : pack.empId,
                mobileNumber : pack.mblNo,
                emailId : pack.emailId,
                userImg : pack.imgFile,
                regId : String(pack.registerId),
            }
            // const serverData = await axios.post('http://localhost:5000/register', packet, config)
            const serverData = await axios.post('/register', packet, config)
            console.log(serverData.data)
            if(serverData.data.success){
                toggleLoad()
                console.log(pack)
                lclRegistration(pack, true);
                localStorage.setItem("userCafe", JSON.stringify({
                    fullName : pack.fullName,
                    orgName : pack.orgName,
                    empId : pack.empId,
                    mblNo : pack.mblNo,
                    emailId : pack.emailId,
                    registerId: pack.registerId,
                    registered : true,
                }))
            }else{
                throw Error
            }
        } catch (err) {
            console.log(err.message)
            toggleError()
        }
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