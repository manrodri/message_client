export default (conversations = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case 'FETCH_POSTS':
            return [...conversations, action]
        default:
            return conversations;
    }
}