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

  useEffect(() => {
    if (completed) {
        setTask('Congratulations on completing your task!');
    }
  }, [completed])

  return (
    <>
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