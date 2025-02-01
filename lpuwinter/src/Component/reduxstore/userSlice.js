import React from 'react'

const userSlice=createSlice({
    name:'user',
    initialState:{name:" ",age:0},
    reducers:{
        setUser:(state,action)=>{
            state.name=action.payload.name;
            state.age
        }
    }

})