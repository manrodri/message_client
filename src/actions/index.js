import axios from "axios";
import chatsAPI from "../api/chatsAPI";

export const selectSong = (song) => {
    // return an action
    return {
        type: "SONG_SELECTED",
        payload: song
    }
};

export const fetchConversations = () => async dispatch => {
    const response = await chatsAPI.get('/conversations')
    dispatch({type: 'FETCH_CONVERSATIONS', payload: response.data})
}

export const fetchConversation = (conversationId) => async dispatch => {
    const response = await chatsAPI.get(`/conversation/${conversationId}`)
    dispatch({type: 'FETCH_CONVERSATION', payload: response.data})
}

