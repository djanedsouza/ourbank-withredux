import { add_logged_user, add_registered_user, remove_logged_user } from "./action-constants";

const initialState = {
    registered_users: [],
    logged_user: {}
}

const userReducer = (state = initialState, action) => {
    console.log(action.type, action.payload);
    switch(action.type) {
        case add_registered_user: return {
            ...state,
            registered_users: [...state.registered_users, action.payload]
        }
        case add_logged_user: return {
            ...state,
            logged_user: {...action.payload}
        }
        case remove_logged_user: return {
            ...state,
            logged_user: {}
        }
        default: return state;
    }
}

export default userReducer;