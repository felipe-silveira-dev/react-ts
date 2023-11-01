import './Home.css'
import homeImage from '../../assets/971.jpg'
import { useState, useEffect } from "react"

interface myProps {
    title: string,
    description: string,
}

const Home = (props : myProps) => {
  const [completed, setCompleted] = useState(false);
  const [task, setTask] = useState('');
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (completed) {
        setTask('Congratulations on completing your task!');
    }
  }, [completed])

  return (
    <>
        {logged && <h1>Welcome to the website!</h1>} 
        {!logged && <h1>You are not logged in!</h1>}

        <button onClick={() => setLogged(!logged)}>LogIn</button>

        <h1>Todo List</h1>
        <h3>{task}</h3>
        <button onClick={() => setCompleted(true)}>Concluir tarefa!</button>

        <h1 className='title'>{props.title}</h1>
        <p className='description'>{props.description}</p>
        <img src={homeImage} alt="home" className='img' />

    </>
  )
}

export default Home