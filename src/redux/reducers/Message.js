 function messagesReducer(state, action) {
    switch (action.type) {
      case 'ADD_MESSAGE': {
        const newMessage = {
            id:action.id,
            time:action.time,
            message:action.message
        }
        return state.concat(newMessage);
      }
      case 'DELETE_MESSAGE': {
        return state.filter(m => m.id !== action.id);
      }
      default: {
        return state;
      }
    }
  }


  export default messagesReducer;