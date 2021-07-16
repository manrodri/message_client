import chatsAPI from "../api/chatsAPI";
import _ from "lodash";

export const currentUser = (user) => {
    return {
        type: 'SELECT_USER',
        payload: user
    }
}

export const fetchConversations = () => async dispatch => {
    const response = await chatsAPI.get('/conversations')
    dispatch({type: 'FETCH_CONVERSATIONS', payload: response.data})
}

export const fetchConversation = (conversationId) => async dispatch => {
    const response = await chatsAPI.get(`/conversation/${conversationId}`)
    dispatch({type: 'FETCH_CONVERSATION', payload: response.data})
}


export const fetchConversationsAndConversation = () => async (dispatch, getState) => {
    console.log('about to fetch posts')
     const conversations = await dispatch(fetchConversations())
     _.chain(getState().conversations)
        .map('id')
        .uniq()
        .forEach(id => dispatch(fetchConversation(id)))
        .value()


}