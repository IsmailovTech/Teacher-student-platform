export const ReducerStore = (state={ studentdata:[], teacherdata:[] }, action ) =>{
    if ( action.type === "GET_STUDENT" ){
        return{
            ...state,
            ...action
        }
    } else if (action.type === "GET_TEACHER"){
        return{
            ...state,
            teacherdata: action.teacherdata,
        }
    }
}