
import {useReducer,useState} from 'react'

const HookUseReducer = () => {
//1 comecando useReducer

const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
})

const initialTaks = [
  {id: 1, text:"fazer qualquer coisa"},
  {id: 2, text:"fazer outra coisa"},
]

const taskReducer = (state, action) =>{
  switch (action.type){
    case "ADD":
        const newTask = {
            id: Math.random(),
            text: taskText,
        };
        setTaskText("");

        return [...state, newTask];
    case "DELETE":
        return state.filter((task) => task.id !== action.id);
     default: return state;
  }
};

const [taskText, setTaskText] = useState("");
const [tasks, dispatchTasks] = useReducer(taskReducer, initialTaks);

const handleSubmit = (e) =>{
  e.preventDefault();

 dispatchTasks({type:"ADD"})
}
 
const removeTask = (id) => {
  dispatchTasks({ type:"DELETE", id: id });
}
  return (
    <div>
      <h2>useReducer</h2>
      <p>Numero: {number}</p>
      <button onClick={dispatch}>Alterar numero</button>
      <h3>Tarefas</h3>
      <form onSubmit={handleSubmit}>
        <input type="text"
        onChange={(e) => setTaskText(e.target.value)}
        value={taskText}
        />
      <input type="submit" value="Enviar"/>
      </form>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
      ))}
      <hr/>
    </div>
  )
}

export default HookUseReducer
