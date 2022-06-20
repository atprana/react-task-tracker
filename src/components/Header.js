import Proptypes from 'prop-types';
import Button from './Button'

const Header = ({title, onShowAddTask, showAdd}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button 
        color= { showAdd ? 'blue':'green'} 
        text=  { showAdd ? 'CLose':' Add'}
        onClick={onShowAddTask}/>       
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}
Header.propTypes = {
    title: Proptypes.string,
}
export default Header