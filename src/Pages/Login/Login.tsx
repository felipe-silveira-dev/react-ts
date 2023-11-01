import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    let navigate = useNavigate();

  return (
    <div>
        Login
        <Link to="/home">Home</Link>
        <button onClick={() => navigate('/home')}>Home</button>
    </div>
  )
}

export default Login