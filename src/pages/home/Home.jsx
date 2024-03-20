import { useNavigate } from 'react-router-dom'
import logo from '../../../public/logo.svg'
import './App.css'
import BbvaJoinForm from '../../components/react_components/BbvaJoinForm/BbvaJoinForm'
import useUserStore from '../../state/useUserStore'
import { getUserData } from '../../services/indexedDB/dbUtility'

function Home() {
  const navigate = useNavigate();
  const userStore = useUserStore();

  const onJoined = async ({detail}) => {
    try {
      const userData = await getUserData(detail.username);
      if (userData) {
        console.log('User exists:', userData);
        userStore.setUserData({ userData });
      } else {
        console.log('User does not exist:', detail.username);
        userStore.setUserData({ userData: { id: detail.username, score: 0, boughtItems: 0, highestScore: 0 } });
      }
      navigate('/game');
    } catch (error) {
      console.error('Error getting user data:', error);
    }
  }

  return (
    <>
      <div>
        <a href="https://www.linkedin.com/in/maghous/" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h2>Create new player</h2>
      <BbvaJoinForm onJoinClick={onJoined}/>
    </>
  )
}

export default Home
