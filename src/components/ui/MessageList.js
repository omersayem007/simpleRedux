import React from 'react';


const MessageList = (props) =>(
    <div>
    <h1>MessageView</h1>
    {
     props.messages.map((message,index)=>(
                <div key={message.id} style={{border:'1px solid red'}}>
                <p> 
                {message.message}
                </p>
                <span>@{message.time}</span><br/>
                <button onClick={() =>props.onClick(message.id)}>Delete</button>
                </div>
            ))
    }
    </div>


)


export default MessageList;