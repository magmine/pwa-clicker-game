import { useState } from 'react'
import BbvaHeader from '../../components/react_components/BbvaHeader/BbvaHeader'
import styles from './Game.module.css'


function Game() {
  return (
    <header className={styles.header}>
      <BbvaHeader/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </header>
  )
}

export default Game
