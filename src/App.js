import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Addtask from './components/Addtask'

 function App() {

    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Online React tutorial',
        day: 'Feb 7th at 8:30am',
        reminder: true,
      },
      {
        id: 3,
        text: 'Worship Practice',
        day: 'Feb 7th at 7:30pm',
        reminder: false,
      }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    
  }

  // Delete Task
  const deleteTask = (id) => {
     setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header title="My Todolist" onBtnAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <Addtask onAdd={addTask} />}  {/* shorthand for iternary operator without an else statement-->If showAddTask is true display Addtask */}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Todos to show'}
    </div>
  );
}

export default App;