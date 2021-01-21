// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action)=>{
    switch(action.type){
        case "sample":
            console.log(action.payload);
            return {
                ...state
            }
        case "register-user":
            let _data = action.payload;
            state.fullName = _data.fullName;
            state.orgName = _data.orgName;
            state.empId = _data.empId;
            state.mblNo = _data.mblNo;
            state.emailId = _data.emailId;
            state.imgFile = _data.imgFile
            state.registered = _data.registered;
            state.registerId = _data.registerId;
            console.log(_data);
            return {
                ...state
            }
        case "local-set":
            const _datalcl = action.payload;
            state.fullName = _datalcl.fullName;
            state.orgName = _datalcl.orgName;
            state.empId = _datalcl.empId;
            state.mblNo = _datalcl.mblNo;
            state.emailId = _datalcl.emailId;
            state.registerId = _datalcl.registerId;
            return{
                ...state
            }
        default : 
            return {
                ...state
            }
    }
}