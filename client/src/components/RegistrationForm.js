import React,{useState} from 'react'
import cookingLogo from "../assets/cooking.gif"


export const RegistrationForm = () => {
    const [nameInput, setName] = useState("");
    const [orgName, setOrgName] = useState("");
    const [empId, setEmpId] = useState("");
    const [mblNo, setMblno] = useState("");
    const [emailId, setEmail] = useState("");
    // ----------------------> !!!!!!!!!!!!  need to take care of ID card input
    return (
        <div className = "flex-container">
            <div className = "form-main-container">
            <div className = "form-title">
                <h2 className = "title">Register...</h2>
            </div>
            <form>
                <div className = "form-group">
                    {/* <label>Name</label> */}
                    <input type = "text" value = {nameInput} onChange = {(e)=>setName(e.target.value)} placeholder = "Your Name"></input>
                </div>
                <div className = "form-group">
                    {/* <label>Organisation Name</label> */}
                    <input type = "text" value = {orgName} onChange = {(e)=>setOrgName(e.target.value)} placeholder = "Organisation name"></input>
                </div>
                <div className = "form-group">
                    {/* <label>Employee ID</label> */}
                    <input type = "text" value = {empId} onChange = {(e)=>setEmpId(e.target.value)} placeholder = "Employee ID"></input>
                </div>
                <div className = "form-group">
                    {/* <label>Mobile Number</label> */}
                    <input type = "text" value = {mblNo} onChange = {(e)=>setMblno(e.target.value)} placeholder ="Mobile Number"></input>
                </div>  
                <div className = "form-group">
                    {/* <label>Email ID</label> */}
                    <input type = "text" value = {emailId} onChange = {(e)=>setEmail(e.target.value)} placeholder = "Email ID"></input>
                </div>          
                {/* <div className= "form-group">
                    {/* <label>ID CARD upload</label> 
                    <input type = "file"></input>
                </div>            */}
            </form>
            </div>
            <div className = "main-image-container">
                <img src = {cookingLogo} alt="cooking gif"></img>
            </div>
        </div>
    )
}
