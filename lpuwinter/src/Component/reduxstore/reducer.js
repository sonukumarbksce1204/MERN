const countReducer=(state={count:0},action)=>{
    switch (action.type){
        case "INCERIMENT":
            return {count:state.count+1};
        case "DECERIMENT":
            return {count:state-1};
        default:
            return state;
    }
}

export default countReducer