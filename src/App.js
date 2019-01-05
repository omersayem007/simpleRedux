import React, { Component } from 'react';
import MessagView from './components/MessageView';
import MessageInput from './components/MessageInput';
import ThreadSelect from './components/ThreadSelect';
import Redux from './redux/Redux';
const Store = Redux.createStore(Redux.reducer,Redux.initialState);

class App extends Component {

 componentDidMount (){
  Store.subscribe(() => this.forceUpdate());
  }

  render() {
    const state = Store.getState();
    const threads =state.threads;
    const activeThreadId = state.activeThreadId ;
    const activeThreads = state.threads.filter( (thread) => thread.id === activeThreadId );

    const tabs = threads.map((t)=> (
    {
      active: t.id === activeThreadId,
      name:t.name
    }) );
   // console.log(activeThreads)
    //console.log(state);
    //console.log(activeThreadId)
    return (
      <div className="App">
      <ThreadSelect
      tabInfos = {tabs}
      />
        <MessagView
        messages={activeThreads[0].messages}
        store={Store}
        />
        <MessageInput
        store={Store}
        />
        
      </div>
    );
  }
}

export default App;
