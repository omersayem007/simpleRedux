 function findThreadIndex(threads, action) {
    switch (action.type) {
      case 'AddMessage': {
        return threads.findIndex(
          (t) => t.id === action.activeId
        );
      }
      case 'DeleteMessage': {
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