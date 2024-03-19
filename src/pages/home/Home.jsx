import { useNavigate } from 'react-router-dom'
import logo from '../../../public/logo.svg'
import './App.css'
import BbvaJoinForm from '../../components/react_components/BbvaJoinForm/BbvaJoinForm'

function Home() {
  const navigate = useNavigate();

  const onJoined = () => {
    navigate('/game');
  }

  return (
    <>
      <div>
        <a href="https://www.linkedin.com/in/maghous/" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h2>Create mew player</h2>
      <BbvaJoinForm onJoinClick={onJoined}/>
    </>
  )
}

export default Home
