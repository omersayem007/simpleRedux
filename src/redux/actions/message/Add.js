const uuidv1 = require('uuid/v1');
var moment = require('moment');

function addMessage(text,activeId){

    return{

        type:'ADD_MESSAGE',
        activeId:activeId,
        id:uuidv1(),
        time:moment().format('MMMM Do YYYY, h:mm:ss a'),
        message:text    
  
    }

}

export default addMessage;