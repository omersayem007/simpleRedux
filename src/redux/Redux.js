import {createStore} from 'redux';
  
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

  
  let initialState={messages:[]}
  
  
  const redux  = { createStore , reducer , initialState} ;
  
  
  export default redux;
  