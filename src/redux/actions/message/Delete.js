function deleteMessage(id){
    return{
        type:"DELETE_MESSAGE",
        id
    }
}

export default deleteMessage;