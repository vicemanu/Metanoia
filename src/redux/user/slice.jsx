import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {
        name: "",
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createUser: (state, action) => {
            
            return {
                ...state,
                user: {
                    name: action.payload.name
                }
            }
        }
    }
})

export const { createUser } = userSlice.actions;


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