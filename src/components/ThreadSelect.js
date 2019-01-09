import React  from 'react';
import Select from '../ui/Select';



class FlavorForm extends React.Component {

  
    handleChange= (id) => {
      const store = this.props.store;
      store.dispatch({
        type:"OpenThread",
        id:id
      })
    }
  
    render() {

      return (

        <Select
        tabInfos={this.props.tabInfos}
        handleChange={this.handleChange}
        />
        
      );
    }
  }

  export default FlavorForm;