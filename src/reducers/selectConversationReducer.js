export default (selectedConversation = null, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'SELECT_CONVERSATION':
            return payload
        default:
            return selectedConversation;
    }
}