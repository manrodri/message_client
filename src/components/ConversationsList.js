import React from 'react'
import { connect } from "react-redux";
import {fetchConversations} from "../actions";

class ConversationsList extends React.Component {

    componentDidMount() {
        this.props.fetchConversations()
    }

    renderParticipants = (participants) => {
        return participants.map( (participant, index) => {
            return (
                <div className={`content`} key={index}>
                    {participant}
                </div>
            )
        })
    }

     renderConversations(){
        return this.props.conversations.map(convo => {
            return(
                <div className={`item`} key={convo.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>{convo.id}</h2>
                            {this.renderParticipants(convo.participants)}
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return(
            <div className={`ui relaxed divided list`}>
                {/*ConversationsList*/}
                {this.renderConversations()}
            </div>
    )
    }
}

const mapStateToProps = state => {
    return { conversations: state.conversations }
}

export default connect(mapStateToProps, {fetchConversations: fetchConversations}) (ConversationsList);