import React from 'react';
import AcUnitIcon from '@material-ui/icons/AcUnit';
const TodoList = ()=>{
    return(
        <>
            <div className="row my-5 py-5">
                <div className="col-4 mx-auto row bg-success rounded p-3">
                    <div>
                        <AcUnitIcon/>
                    </div>
                    <input style={{border:'0px',borderBottom:'2px solid black',background:'none'}} className="col-9 h3 mx-auto" type="text" placeholder="Add Items" />
                    <button style={{background:0}} className="col-2 border-0 h1 mx-auto"><i className="fa fa-plus-circle"></i></button>
                </div>
            </div>
        </>
    );
}

export default TodoList;