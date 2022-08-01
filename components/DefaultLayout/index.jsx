// import {SideBar} from "../Sidebar";
import SideBarOpen from "../SideBarOpen";
import styles from "./styles.module.scss";
import { useState } from "react";
export const DefaultLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.PageContainer}>
      <div className={styles.container}>
        {/* <SideBar openSideBar={setIsOpen} /> */}
        <SideBarOpen isOpen={isOpen} setIsOpen={setIsOpen} />


        {children}
        
      </div>
    </div>
  );
};