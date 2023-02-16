import React from 'react'
import styles from '../styles'
import Navbar from './Navbar'
import Tweet from './Tweet'

const Main = () => {
  return (
    <div className={`sb ss:overflow-auto ss:h-screen ${styles.borderRight}`}>
        <Navbar />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
  )
}

export default Main