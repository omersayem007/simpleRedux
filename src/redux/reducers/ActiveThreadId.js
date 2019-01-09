  function activeThreadIdReducer(state = 'ajsdhajs',action){
    if(action.type === "OPEN_THREAD"){
     return action.id;
   }
   else{
     return state;
   }
 }

 export default activeThreadIdReducer;