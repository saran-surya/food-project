import React,{useState} from 'react'
import cookingLogo from "../assets/cooking.gif"
import {Convert} from "mongo-image-converter"

export const RegistrationForm = () => {
    const [nameInput, setName] = useState("");
    const [orgName, setOrgName] = useState("");
    const [empId, setEmpId] = useState("");
    const [mblNo, setMblno] = useState("");
    const [emailId, setEmail] = useState("");
    const [popup, setpopup] = useState(false);
    const [inpFile, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [ConvInpFile, setConvInp] = useState("");

    

    const HandleInputMbl = (_input)=>{
        console.log(_input.length);
        if(_input.length > 10){
            document.getElementById("mobile-number").className = "inputError"
        } else {
            document.getElementById("mobile-number").className = ""
        }
    }
    const ChangeInpState = ()=>{
        document.getElementById("input-file-button").className = "yes file button file-success";
    }
    const HandleFileInput = async ()=>{
        setFileName(document.getElementById("get-file").files[0].name);
        let _file = await(Convert(document.getElementById("get-file").files[0]));
        if(_file.length > 0 && _file !== false){
            ChangeInpState();
            console.log(_file);
            console.log(fileName);
        }
    }
    
    const HandleSubmit = ()=>{
        // check if all inputs are valid, if yes, then send to setPopup else we click the form buttin that will take of the form validation
        document.getElementById("form-submit").click();
        console.log("Submitted");
        setpopup(true);
    }

    // ----------------------> !!!!!!!!!!!!  need to take care of ID card input
    return (
        <div className="main-page-container">
            {(popup)?
            <div className = "popup-wrapper" id="wrap">
                <div className = "popup">
                    <h2>Are you sure to continue ?</h2>
                    <button type = "submit" className = "yes button">YES</button>
                    <button type = "submit" className = "error button" onClick={(e)=>{e.preventDefault(); setpopup(false)}}>NO</button>
                </div>
            </div>
            :null}
            <div className = "flex-container">
                <div className = "form-main-container">
                    <div className = "form-title">
                        <h2 className = "title">Register...</h2>
                    </div>
                    <form id="main-form-input">
                        <div className = "form-group">
                            {/* <label>Name</label> */}
                            <input required="true" type = "text" value = {nameInput} onChange = {(e)=>setName(e.target.value)} placeholder = "Your Name"></input>
                        </div>
                        <div className = "form-group">
                            {/* <label>Organisation Name</label> */}
                            <input required="true" type = "text" value = {orgName} onChange = {(e)=>setOrgName(e.target.value)} placeholder = "Organisation name"></input>
                        </div>
                        <div className = "form-group">
                            {/* <label>Employee ID</label> */}
                            <input required="true" type = "text" value = {empId} onChange = {(e)=>setEmpId(e.target.value)} placeholder = "Employee ID"></input>
                        </div>
                        <div className = "form-group">
                            {/* <label>Mobile Number</label> */}
                            <input required="true" type = "number" id = "mobile-number" value = {mblNo} onChange = {(e)=>{setMblno(e.target.value);HandleInputMbl(e.target.value);}} placeholder ="Mobile Number"></input>
                        </div>  
                        <div className = "form-group">
                            {/* <label>Email ID</label> */}
                            <input required="true" type = "email" value = {emailId} onChange = {(e)=>setEmail(e.target.value)} placeholder = "Email ID"></input>
                        </div>          
                        <div className= "form-group">
                            {/* <label>ID CARD upload</label>  */}
                            <button id="input-file-button" onClick = {(e)=>{e.preventDefault();document.getElementById("get-file").click()}} className = "file button">{(fileName.length > 0)?fileName:"picture of ID Card"}</button>
                            <input required="true" type = "file" id="get-file" onInput={(e)=>{e.preventDefault(); HandleFileInput(); setFile(e.target.value)}} value = {inpFile}  accept = ".jpeg, .jpg, .png"></input>
                        </div>   
                        <button type = "submit" id="form-submit">Submit</button>        
                    </form>
                    <div className = "form-group">
                            <button className = "submit button" onClick = {(e)=>{e.preventDefault(); HandleSubmit();}}>Submit</button>
                    </div>
                </div>
                <div className = "main-image-container">
                    <img src = {cookingLogo} alt="cooking gif"></img>
                </div>
            </div>
        </div>
    )
}
