// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action)=>{
    switch(action.type){
        case "sample":
            console.log(action.payload);
            return {
                ...state
            }
        case "register-user":
            const _data = action.payload;
            state.fullName = _data.fullName;
            state.orgName = _data.orgName;
            state.empId = _data.empId;
            state.mblNo = _data.mblNo;
            state.emailId = _data.emailId;
            state.imgFile = _data.imgFile
            state.registered = _data.registered;
            console.log(_data);
            return {
                ...state
            }
        default : 
            return {
                ...state
            }
    }
}