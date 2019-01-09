import React from 'react';
import Thread from './Thread';
const uuidv1 = require('uuid/v1');
var moment = require('moment');


class ThreadDisplay extends React.Component {

  
  onMessageSubmit = (text) =>{
    
    const store = this.props.store;
    store.dispatch({

      type:'AddMessage',
      activeId:this.props.activeThreadId,
      id:uuidv1(),
      time:moment().format('MMMM Do YYYY, h:mm:ss a'),
      message:text    

  });

  }

  onMessageClick = (id) =>{

    const store = this.props.store;
        store.dispatch({
            type:"DeleteMessage",
            id
        })

  }
    
  
    render() {
  
      return (
        <Thread
          messages={this.props.messages}
          onMessageClick={this.onMessageClick}
          onMessageSubmit={this.onMessageSubmit}
        />
      );
    }
  }

  export default ThreadDisplay; 