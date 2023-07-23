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
        fetchDestaque: (state, action) => {
            state.loadingDestaque = true
            console.log()
        },
        fetchDestaqueSucess: (state, action) => {
            state.destaque = action.payload
        },
        fetchDestaqueFailure: (state, action) => {
            console.log("failure")
            console.log(action.payload)
            state.loadingDestaque = false
        }

    }
})

export const { createData, fetchDataSucess, fetchDataFailure, fetchDestaque, fetchDestaqueSucess , fetchDestaqueFailure } = userSlice.actions;


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