import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobalContext } from './context'

const Home = () => {
  const {openSidebar, openModal} = useGlobalContext();

  return <main>
    <button className="sidebar-toggle" onClick={openSidebar}>
      <FaBars/>
    </button>
    <buttton className="btn" onClick={openModal}>show modal</buttton>
  </main>
}

export default Home
