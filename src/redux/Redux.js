import {createStore} from 'redux';
  
  function reducer(state,action){
  
  
    if( action.type === "AddMessage" ){

        let threadIndex = state.threads.findIndex((t) => t.id === action.activeId);
        let oldThread = state.threads[threadIndex];

        let newMessage = {
            id:action.id,
            time:action.time,
            message:action.message
        }

        let newThread={
            ...oldThread,
            messages:oldThread.messages.concat(newMessage)
        }
  
        return {
            ...state,
            threads:[
                ...state.threads.slice(0,threadIndex),
                newThread,
                ...state.threads.slice(threadIndex+1,state.threads.length)
            ]
        };
  
    }
    else if( action.type === "DeleteMessage" ){

        const threadIndex = state.threads.findIndex(
            (t) => t.messages.find((m) => (
              m.id === action.id
            ))
          );
          const oldThread = state.threads[threadIndex];
      
          const newThread = {
            ...oldThread,
            messages: oldThread.messages.filter((m) => (
              m.id !== action.id
            )),
          };
      
          return {
            ...state,
            threads: [
              ...state.threads.slice(0, threadIndex),
              newThread,
              ...state.threads.slice(
                threadIndex + 1, state.threads.length
              ),
            ],
          };
    }
    else if(action.type === "OpenThread"){
        return{
            ...state,
           activeThreadId: action.id
        }
    }
    else {
  
      return state;
  
    }
  }

  
  let initialState={
    activeThreadId :'ajsdhajs',
    threads:[
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
    ]
}
  
  
  const redux  = { createStore , reducer , initialState} ;
  
  
  export default redux;
  