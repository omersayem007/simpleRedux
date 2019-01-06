import React  from 'react';



class FlavorForm extends React.Component {
    constructor(props) {

      super(props);
      this.state = {value: ''};
    }
  
    handleChange= (event) => {
      this.setState({value: event.target.value});
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      const store = this.props.store;
      store.dispatch({
        type:"OpenThread",
        id:this.state.value
      })
      
    }
  
    render() {


        const options = this.props.tabInfos.map((t)=>(
            <option value={t.id}>{t.name}</option>
        ))
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              {options}
            </select>
          </label>
          <input type="submit" value="select" />
        </form>
      );
    }
  }

  export default FlavorForm;