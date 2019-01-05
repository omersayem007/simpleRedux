import {createStore} from 'redux';
  
  function reducer(state,action){
  
  
    if( action.type === "AddMessage" ){

        let newMessage = {
            id:action.id,
            time:action.time,
            text:action.message
        }
  
        return {messages : state.messages.concat(newMessage)};
  
    }
    else if( action.type === "DeleteMessage" ){
        return {
            messages: state.messages.filter((message) => message.id !== action.id )
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
  