import findThreadIndex from './FindIndex';
import messagesReducer from './Message';

function threadsReducer(state=[
  {
      id:"ajsdhajs",
      name:"Omer Sayem",
      messages:[{

      id:"hashbdsa",
      time:'January 6th 2019, 1:54:13 am',
      message:"Hey whatsUP !"

      }]

  },
  {
      id:"uyuhajfkndkj",
      name:"Ehtesham SIr",
      messages:[]
  }
  ], action) {
    switch (action.type) {
      case 'ADD_MESSAGE':
      case 'DELETE_MESSAGE': {
        const threadIndex = findThreadIndex(state, action);
  
        const oldThread = state[threadIndex];
        const newThread = {
          ...oldThread,
          messages: messagesReducer(oldThread.messages, action),
        };
  
        return [
          ...state.slice(0, threadIndex),
          newThread,
          ...state.slice(
            threadIndex + 1, state.length
          ),
        ];
      }
      default: {
        return state;
      }
    }
  }

  export default threadsReducer;