import React from 'react';


class MessageView extends React.Component {

  render() {
      const messages = this.props.messages.map((m)=>(
          <span> {m} </span>
      ));
    return (
      <div>

          <h1>MessageView</h1>
          {messages}
        
       </div>
    );
  }
}


export default MessageView;