import './Home.css'
import homeImage from '../../assets/971.jpg'

interface myProps {
    title: string,
    description: string,
}

const Home = (props : myProps) => {
  return (
    <>
        <h1 className='title'>{props.title}</h1>
        <p className='description'>{props.description}</p>
        <img src={homeImage} alt="home" className='img' />
    </>
  )
}

export default Home