import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {
        name: "",
    },
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
        fetchUserSucess: (state, action) => {
            // console.log(action.payload)
            state.data = action.payload
            state.loading = false
        },
        fetchUserFailure: (state, action) => {
            console.log("failure")
            console.log(action.payload)
            state.loading = false
        }

    }
})

export const { createUser, fetchUserSucess, fetchUserFailure } = userSlice.actions;


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