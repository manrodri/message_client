import { combineReducers} from "redux";
import {act} from "@testing-library/react";

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

export const selectedConversationReducer = (selectedConversation = null, action) =>{
    const {type, payload} = action;
    if(type === 'FETCH_CONVERSATION'){
        return payload
    }
    return selectedConversation
}

export default combineReducers({
    conversations: conversationsReducer,
    currentUser: tempUserReducer,
    selectedConversation: selectedConversationReducer
})