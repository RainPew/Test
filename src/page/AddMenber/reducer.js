import * as ActionType from "./constants"
const initialState={
    loading:false,
    data:null,
    err:null
}
const createHomeReducer=(state=initialState,action)=>{
    switch (action.type){
        case ActionType.CREATE_HOME_REQUEST:
            state.loading=true;
            state.data=null;
            state.err=null;
            return {...state}
            case ActionType.CREATE_HOME_SUCCESS:
            state.loading=false;
            state.data=action.payload;
            state.err=null;
            return {...state}
            case ActionType.CREATE_HOME_FAIL:
            state.loading=false;
            state.data=null;
            state.err=action.payload;
            return {...state}
            default:
                return {...state}

    }
}
export default createHomeReducer