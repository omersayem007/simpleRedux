  function activeThreadIdReducer(state,action){
    if(action.type === "OpenThread"){
     return action.id;
   }
   else{
     return state;
   }
 }

 export default activeThreadIdReducer;