import React,{useState} from 'react'
import cookingLogo from "../assets/cooking.gif"
import {Convert} from "mongo-image-converter"
import {MdPerson, MdEmail,MdPhone,MdAssignmentInd} from 'react-icons/md';
import {BsBuilding,BsCheckCircle} from 'react-icons/bs';
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
        if ((/[0-9]/.test(_input[_input.length - 1])) || _input.length === 0 ){
            setMblno(_input);
        }

        // if(_input.length > 10){
        //     document.getElementById("mobile-number").className = "inputError"
        // } else {
        //     // setMblno(_input);
        //     // document.getElementById("mobile-number").className = ""
        // }
    }
    const ChangeInpState = ()=>{
        document.getElementById("input-file-button").className = "yes file button file-success";
    }
    const HandleFileInput = async ()=>{
        // setFileName(document.getElementById("get-file").files[0].name.slice(0, 4));✔
        setFileName("Click to Change");
        let _file = await(Convert(document.getElementById("get-file").files[0]));
        if(_file.length > 0 && _file !== false){
            setConvInp(_file);
            ChangeInpState();
            console.log(_file);
            console.log(fileName);
        }
    }
    
    function ValidateEmail(mail) 
    {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
    {
        return (true)
    }
        return (false)
    }

    const HandleSubmit = ()=>{
        if(nameInput.length > 2 && 
            orgName.length > 1 && 
            empId.length > 3 && 
            mblNo.length === 10 &&
            ValidateEmail(emailId) &&
            fileName.length > 0
            ){
                setpopup(true);
                console.log("Valid Form");
            }else{ 
            document.getElementById("form-submit").click();
            if(ConvInpFile === false || ConvInpFile === null || fileName === "" || fileName === null){
                console.log("File Error");
                document.getElementById("input-file-button").className = "file button fail";
                setTimeout(() => {
                    document.getElementById("input-file-button").className = "file button";
                }, 500);
            }}
        // check if all inputs are valid, if yes, then send to setPopup else we click the form buttin that will take of the form validation
        console.log("Submitted");
    }

    // ----------------------> !!!!!!!!!!!!  need to take care of ID card input
    return (
        <div className="main-page-container">
            {(popup)?
            <div className = "popup-wrapper" id="wrap">
                <div className = "popup">
                    <div className = "form-group in-popup">
                            <label>Name : {nameInput}</label>
                    </div>
                    <div className = "form-group in-popup">
                            <label>Organisation Name : {orgName}</label>
                    </div>
                    <div className = "form-group in-popup">
                            <label>Employee ID : {empId}</label>
                    </div>
                    <div className = "form-group in-popup">
                            <label>Mobile Number : {mblNo}</label>
                    </div>
                    <div className = "form-group in-popup">
                            <label>Email ID : {emailId}</label>
                    </div>     
                    <div className = "form-group  in-popup">
                        <h3>ID Card :</h3>
                        <img src = {ConvInpFile} alt="something" id="popup-image"></img>
                    </div>   
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
                            <div className = "label-group">
                                <h2>
                                    <MdPerson/>
                                 </h2>
                            </div>
                            <input required="true" type = "text" value = {nameInput} onChange = {(e)=>setName(e.target.value)} placeholder = "Your Name"></input>
                        </div>
                        <div className = "form-group">
                            {/* <label>Organisation Name</label> */}
                            <div className = "label-group">
                                <h2>
                                    <BsBuilding/>
                                 </h2>
                            </div>
                            <input required="true" type = "text" value = {orgName} onChange = {(e)=>setOrgName(e.target.value)} placeholder = "Organisation name"></input>
                        </div>
                        <div className = "form-group">
                            <div className = "label-group">
                                <h2>
                                    <MdAssignmentInd/>
                                 </h2>
                            </div>
                            {/* <label>Employee ID</label> */}
                            <input required="true" type = "text" value = {empId} onChange = {(e)=>setEmpId(e.target.value)} placeholder = "Employee ID"></input>
                        </div>
                        <div className = "form-group">
                        <div className = "label-group">
                                <h2>
                                    <MdPhone/>
                                 </h2>
                            </div>
                            {/* <label>Mobile Number</label> */}
                            <input required="true" type = "text" id = "mobile-number" value = {mblNo} onChange = {(e)=>{HandleInputMbl(e.target.value);}} placeholder ="Mobile Number" maxLength = "10" minLength="10"></input>
                        </div>  
                        <div className = "form-group">
                        <div className = "label-group">
                                <h2>
                                    <MdEmail/>
                                 </h2>
                            </div>
                            {/* <label>Email ID</label> */}
                            <input required="true" type = "email" value = {emailId} onChange = {(e)=>setEmail(e.target.value)} placeholder = "Email ID"></input>
                        </div>          
                        <div className= "form-group">
                            {(ConvInpFile.length > 0)?
                            <div className = "label-group">
                                <h2>
                                    <BsCheckCircle/>
                                 </h2>
                            </div>
                                :null}
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
