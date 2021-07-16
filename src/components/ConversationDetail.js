import React from 'react'
import {fetchConversation} from "../actions";
import {connect} from "react-redux";

const ConversationDetail = ({selectedConversationId}) => {
    console.log(`selectedConversationId: ${selectedConversationId}`)
    if(!selectedConversationId){
        return (
            <div>Choose a conversation</div>
        )
    }

    return(
        <div>{selectedConversationId}</div>
    )
}



export default connect(null, fetchConversation) (ConversationDetail);