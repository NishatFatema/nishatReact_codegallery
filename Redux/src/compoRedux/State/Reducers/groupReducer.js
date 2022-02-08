const initialState={
    group : [{name:"pdac", desc:"This is reducer group"},
     {name:"pdac", desc:"This is reducer group"}],
};

export const groupReducer=(state=initialState, action)=>{
    switch(action.type){
        case "ADD_GROUP":
            return {
                ...state,group:[action.group,...state.group],
            }
            default:
                return state;
    }
}