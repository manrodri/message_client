export default (conversation =null, action) =>{
    const {type, payload} = action;
    if(type === 'FETCH_CONVERSATION'){
        return payload
    }
    return conversation
}