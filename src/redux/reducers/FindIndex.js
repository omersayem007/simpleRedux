 function findThreadIndex(threads, action) {
    switch (action.type) {
      case 'ADD_MESSAGE': {
        return threads.findIndex(
          (t) => t.id === action.activeId
        );
      }
      case 'DELETE_MESSAGE': {
        return threads.findIndex(
          (t) => t.messages.find((m) => (
            m.id === action.id
          ))
        );
      }
      default:
      return threads;
    }
  }

  export default findThreadIndex;