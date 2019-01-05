function createStore(reducer,initialState) {


    let state = initialState;
    let listeners =[];
  
    const getState = () => (state);
  
    const subscribe = (listener) =>{
  
        listeners.push(listener);
  
    }
  
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach((l) => l());
    };
  
    return {
      subscribe,
      getState,
      dispatch,
    };
  }
  
  function reducer(state,action){
  
  
    if( action.type === "AddMessage" ){
  
        return {messages : state.messages.concat(action.message)};
  
    }
    else if( action.type === "DeleteMessage" ){
        return {
            messages: [
                ...state.messages.slice(0, action.index),
                ...state.messages.slice(action.index+1, state.messages.length), 
            ]
        }
    }
    else {
  
      return state;
  
    }
  }
  
  let initialState={messages:["hello","how are you ?"]}
  
  
  const redux  = { createStore , reducer , initialState} ;
  
  
  export default redux;
  