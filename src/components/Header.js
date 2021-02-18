import Button from './Button'

const Header = ({title, onBtnAdd, showAdd}) => {


    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onBtnAdd} color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add Todo'} />
        </header>
    )
}

export default Header

// NOTES
// The showAdd which is a placeholder for the showAddTask is set to false by default...
// color={showAdd ? 'red' : 'green'} -- if showAdd == true, color is red else if showAdd == false, color is green.
// value={showAdd ? 'Close' : 'Add Todo'} -- if showAdd == true, value is close else if showAdd == false, value is Add Todo.