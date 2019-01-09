import React  from 'react';


const Select = (props) =>(
  <div>
    {
      props.tabInfos.map((t)=>(
        <button onClick={()=>props.handleSubmit(t.id)} key={t.id}>{t.name}</button>
      ))
    }
  </div>

);

  export default Select;