import React from 'react'

const Task = (props) => {
    const { task, index, list, setList } = props;

    const onClick = () => {
        setList( () => {
            return list.filter(task => list.indexOf(task) !== index )
        });
    }

    const onChange = () => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    };
    return (
        <div>
            {
                !task.isComplete ? 
                <h3> {task.name} </h3>
                :
                <strike ><h3> {task.name} </h3> </strike>
            }

            {/* // <h3> {task.name} </h3> */}

            <label htmlFor="checkbox"> Completed? </label>
            <input onChange={onChange} type="checkbox" name="" checked ={task.isComplete}/> <br/>

            <button onClick={onClick}> Delete </button>
        </div>
    )
}

export default Task
