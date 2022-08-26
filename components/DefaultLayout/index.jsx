import { SideBar } from "../../components/SideBar";
import { OpenSB } from "../../components/OpenSB";
import SideBarOpen from "../SideBarOpen";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
export const DefaultLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [vh, setVh] = useState(0);
  const [vw, setVw] = useState(0);


  useEffect(() => {
    setVh(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0));
    setVw(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
    const imgResponsive = () => {
      setVh(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0));
      setVw(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
    }

    window.addEventListener('resize', imgResponsive)
  }, []);
  return (
    <div className={styles.PageContainer}>
      <div className={styles.container}>
        {
          vw>vh
          ?<SideBar openSideBar={setIsOpen} />
          :<OpenSB openSideBar={setIsOpen} />
        }
        
        <SideBarOpen isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className={styles.children}>{children}</div>


      </div>
    </div>
  );
};