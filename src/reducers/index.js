import { combineReducers} from "redux";

export const conversationsReducer = (conversations=[], action) => {
    const {type, payload} = action;
    if(type === 'FETCH_CONVERSATIONS'){
        return [...conversations, payload]
    }
    return conversations
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
})