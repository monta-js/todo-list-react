import React  from 'react'

const Todos= ({addTodo,onChangeValue,onSubmit,value} ) => {
    return (
      <>  
        <div className ="input-group mb-3">
          <div class="input-group-prepend">
             <span class="input-group-text" id="basic-addon1"><i class="fas fa-keyboard"></i></span>
          </div>
        <input
          className ="form-control" 
          placeholder="Add a new item" 
          aria-describedby="basic-addon1"
          type="text"
          value={value}
          onChange={e => onChangeValue(e.target.value)}
        />
        </div>
        <button 
        type="button"
        onClick= {onSubmit} 
        className="btn btn-primary btn-lg btn-block">Add</button>
       </> 
    );
  }

export default Todos

