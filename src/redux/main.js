import {createStore,combineReducers} from 'redux';
import activeThreadIdReducer from './reducers/ActiveThreadId';
import threadsReducer from './reducers/Threads';;



const reducer = combineReducers({
  activeThreadId: activeThreadIdReducer,
  threads:threadsReducer,
});

  
//   let initialState={
//     activeThreadId :'ajsdhajs',
//     threads:[
//     {
//         id:"ajsdhajs",
//         name:"Omer Sayem",
//         messages:[{

//         id:"hashbdsa",
//         time:'January 6th 2019, 1:54:13 am',
//         message:"Hey whatsUP !"

//         }]

//     },
//     {
//         id:"uyuhajfkndkj",
//         name:"Ehtesham SIr",
//         messages:[]
//     }
//     ]
// }
  
  
  const redux  = { createStore , reducer } ;
  
  
  export default redux;
  