import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    loading: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createUser: (state, action) => {
            state.loading = true
        },
        fetchDataSucess: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        fetchDataFailure: (state, action) => {
            console.log("failure")
            console.log(action.payload)
            state.loading = false
        }

    }
})

export const { createUser, fetchDataSucess, fetchDataFailure } = userSlice.actions;


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