import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BbvaHeader from '../../components/react_components/BbvaHeader/BbvaHeader'
import styles from './Game.module.css'


function Game() {
  const AUTO_CLICK_BASE_COST = 10;
  const navigate = useNavigate();
  const [pullRequests, setPullRequests] = useState(0);
  const [numAutoClickers, setNumAutoClickers] = useState(0);
  const [autoClickerCost, setAutoClickerCost] = useState(AUTO_CLICK_BASE_COST);
  const [autoClickerInterval, setAutoClickerInterval] = useState(null);

  const onQuitGame = () => {
    console.log('Exit out...')
    clearInterval(autoClickerInterval);
    navigate('/');
  }

  return (
    <>
      <header className={styles.header}>
        <BbvaHeader username='Amine' onQuitGame={onQuitGame}/>
      </header>
      <p>Merged pull requests: {pullRequests}</p>
      {numAutoClickers > 0 && <p>Auto mergers: {numAutoClickers}</p>}
      <button className={styles.merge_button} onClick={() => setPullRequests(pullRequests + 1)}>
        Merge
      </button>
      {
        pullRequests >= autoClickerCost && (
          <button className={styles.buy_auto_clicker_button} onClick={() => {
            setPullRequests(pullRequests - autoClickerCost);
            setNumAutoClickers(numAutoClickers + 1);
            setAutoClickerCost(autoClickerCost + AUTO_CLICK_BASE_COST);
            clearInterval(autoClickerInterval);
            const intervalId = setInterval(() => {
              setPullRequests(pullRequests => pullRequests + numAutoClickers + 1);
            }, 100);
            setAutoClickerInterval(intervalId);
          }}>
            Buy Auto Merger ({autoClickerCost})
          </button>
        )
      }
    </>
  )
}

export default Game
