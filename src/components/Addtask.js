import { useState } from 'react'

const Addtask = ({onAdd}) => {

    const[text, setText] = useState('')
    const[day, setDay] = useState('')
    const[reminder, setReminder] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a todo') 
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false) 
    }

    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder="Add Todo" value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <div className='form-control'>
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>

            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" value="Save Todo" className='btn btn-block'/> 
        </form> 
    )
}

export default Addtask
