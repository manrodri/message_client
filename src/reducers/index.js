import { combineReducers} from "redux";

export const conversationsReducer = (conversations=[], action) => {
    const {type, payload} = action;
    switch (type){
        case 'FETCH_CONVERSATIONS':
            return payload
        default:
            return conversations
    }
}

export const selectedUserReducer = (selectedUser = null, action) => {
    const {type, payload} = action;
    switch (type){
        case 'SELECT_USER':
            return payload
        default:
            return selectedUser
    }
}

export const tempUserReducer = () => {
    return {
        id: 1,
        name: "Student"
    }
}



export default combineReducers({
    conversations: conversationsReducer,
    currentUser: tempUserReducer,
    selectedConversationId: selectedConversationReducer
})