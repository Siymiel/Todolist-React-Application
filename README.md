# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### NOTES

#### The add todo button functionality

In App.js -- 

    const [showAddTask, setShowAddTask] = useState(false)
          -- <Header onBtnAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
In Header.js -- 

    <Button onClick={onBtnAdd} color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add Todo'} />

### Tasks functionality

#### Showing Tasks
In App.js -- 
    
         ```
            const[tasks, setTasks] = useState([ {}, {}, {}])
        ```
          -- 
          ```
          <Tasks tasks={tasks} />
          ```

In Tasks.js -- 

    ```
    const Tasks = ({tasks}) => {
                    return (
                        <>
                        {tasks.map((task) => (<h1 key={task.id}>{task.text}</h1>))}
                        </h1>
                    )
            }
    ```

#### Deleting Task
In App.js -- 
        
        ```
        const deleteTask = (id) => {
                setTasks(tasks.filter((task) => task.id !== id))
        }
        ```
            -- 
        
            `<Tasks onDelete={deleteTask}>`
        

In Task.js -- 

        ```
        onClick={() => onDelete(task.id)}
        ```

#### Adding Task
In App.js --
        ```
        const addTask = (task) => {
                        const id = Math.floor(Math.random() * 1000) + 1
                        const newTask = {id, ...task}
                        setTasks = {...task, newTask}
                }   
        ```
In App.js -- 

        ```
        <Addtask onAdd={addTask} />
        ```

In Addtask.js -- 

            ```
            <!-- onAdd is passed as a prop -->
            const [text, setText] = useState('')
            const [day, setDay] = useState('')
            const [reminder, setReminder] = useState(false)
            <!-- We have a form with the input -->
            const handleSubmit = (e) => {
                if(!text) {
                    alert('Please add a task')
                    return
                }

                onAdd({text, day, reminder})

                setText('')
                setDay('')
                setReminder(false)

            }

            <form onsubmit={handleSubmit}>
                <!-- Form code here -->
            </form>
            ```