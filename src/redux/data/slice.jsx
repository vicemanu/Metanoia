import { createSlice } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"



const initialState = {
    data: [],
    loading: false,
    destaque: [],
    setDestaque: true,
}

export const userSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        createData: (state, action) => {
            state.loading = true
            if(state.setDestaque) {
                
            }
        },
        fetchDataSucess: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        fetchDataFailure: (state, action) => {
            console.log("failure")
            console.log(action.payload)
            state.loading = false
        },
        fetchDestaqueSucess: (state, action) => {
            state.destaque = action.payload
        }

    }
})

export const { createData, fetchDataSucess, fetchDataFailure, fetchDestaqueSucess } = userSlice.actions;


export default userSlice.reducer;


/**  
 * consumir dados
 * const {} = useSelector(rootReducer => rootReducer.user)
 * 
 * 
 */

/**
 * consumir ação
 * 
 * importa a ação
 * 
 * const dispatch = useDispatch();
 * chama dispatch(ação({
 * stato: mudança de status
 * }))
 */