 function messagesReducer(state, action) {
    switch (action.type) {
      case 'AddMessage': {
        const newMessage = {
            id:action.id,
            time:action.time,
            message:action.message
        }
        return state.concat(newMessage);
      }
      case 'DeleteMessage': {
        return state.filter(m => m.id !== action.id);
      }
      default: {
        return state;
      }
    }
  }


  export default messagesReducer;