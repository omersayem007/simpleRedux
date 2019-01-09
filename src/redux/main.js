import {createStore} from 'redux';
import activeThreadIdReducer from './reducers/ActiveThreadId';
import threadsReducer from './reducers/Threads';


function reducer(state,action){
  return {
    activeThreadId: activeThreadIdReducer(state.activeThreadId,action),
    threads:threadsReducer(state.threads,action)
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
  