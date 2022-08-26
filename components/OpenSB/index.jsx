import styles from './styles.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react'
import Link from "next/link";
import { useCVContext } from "../../Context/Provider";

export const OpenSB = ({ openSideBar }) => {
  const {
    state: { sidebarIsActive },
    editSidebarActive
  } = useCVContext();
  
  return (
    
      <div className={styles.hamburger} onClick={() => { openSideBar(true) }}><GiHamburgerMenu /></div>
 
  )
}