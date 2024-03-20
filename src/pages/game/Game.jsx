import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import BbvaHeader from '../../components/react_components/BbvaHeader/BbvaHeader'
import styles from './Game.module.css'
import useUserStore from '../../state/useUserStore'
import { storeUserData } from '../../services/indexedDB/dbUtility'


function Game() {
  const AUTO_CLICK_BASE_COST = 10;
  const navigate = useNavigate();
  const { userData, updateUserScore, updateBoughtItems } = useUserStore((state) => ({
    userData: state.userData,
    updateUserScore: state.updateUserScore,
    updateBoughtItems: state.updateBoughtItems,
  }));
  const pullRequests = userData?.score || 0;
  const numAutoClickers = userData?.boughtItems || 0;
  const [autoClickerCost, setAutoClickerCost] = useState(AUTO_CLICK_BASE_COST);
  const autoClickerInterval = useRef(null);

  useEffect(() => {
    if (numAutoClickers > 0) {
      clearInterval(autoClickerInterval.current); // Clear any existing interval
      autoClickerInterval.current = setInterval(() => {
        let currentScore = userData ? userData.score : 0;
        updateUserScore(currentScore + numAutoClickers);
      }, 100);
    }
    return () => {
      clearInterval(autoClickerInterval.current);
    };
  }, [numAutoClickers, userData?.score]);

  const onQuitGame = () => {
    console.log('Exit out...', userData);
    clearInterval(autoClickerInterval.current);
    storeUserData({ userData: userData});
    navigate('/');
  };

  const onPullRequest = () => {
    updateUserScore(pullRequests + 1);
  };

  const onBoughtAutoClicker = () => {
    updateBoughtItems(numAutoClickers + 1);
    let currentScore = userData ? userData.score : 0;
    updateUserScore(currentScore - autoClickerCost);
    const newCost = AUTO_CLICK_BASE_COST + AUTO_CLICK_BASE_COST * numAutoClickers;
    setAutoClickerCost(newCost);
  };

  return (
    <>
      <header className={styles.header}>
        <BbvaHeader username={userData?.id || 'Squid'} onQuitGame={onQuitGame}/>
      </header>
      <p>Merged pull requests: {pullRequests}</p>
      {numAutoClickers > 0 && <p>Auto mergers: {numAutoClickers}</p>}
      <button className={styles.merge_button} onClick={onPullRequest}>
        Merge
      </button>
      {
        pullRequests >= autoClickerCost && (
          <button className={styles.buy_auto_clicker_button} onClick={onBoughtAutoClicker}>
            Buy Auto Merger ({autoClickerCost})
          </button>
        )
      }
    </>
  )
}

export default Game
