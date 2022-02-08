const initialState={
    empData:[
        {
            Name:"salman",
            img:"Logo192.png",
            desc: "he is backend trianer",
        },
        {
            Name:"Aamer",
            img:"Logo192.png",
            desc: "he is UI trianer",
        },
    ]
}
export const empReducer=(state=initialState,action)=>{
switch(action.type){
    case"ADD_EMP":
    return{...state,empData:[action.empData, ...state.empData]};
    default:
        return state;
}
}