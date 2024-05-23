import { add_logged_user, add_registered_user, remove_logged_user } from "./action-constants";
export const action_add_registered_user = (user) => {
    return {
        type: add_registered_user,
        payload: user
    }
}

export const action_add_logged_user = (user) => {
    return {
        type: add_logged_user,
        payload: user
    }
}

export const action_remove_logged_user = () => {
    return {
        type: remove_logged_user
    }
}

// export default action_add_registered_user;