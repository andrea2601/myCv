import styles from './styles.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai';
import { CgWorkAlt } from 'react-icons/cg';
import { BsPencil } from 'react-icons/bs';
import { VscPieChart } from 'react-icons/vsc';
import { BsShare } from 'react-icons/bs';
import { useState } from 'react'
import Link from "next/link";
import { useCVContext } from "../../Context/Provider";

export const SideBar = ({ openSideBar }) => {
  const {
    state: { sidebarIsActive },
    editSidebarActive
  } = useCVContext();

  const [isActive, setIsActive] = useState("about");
  const [urlCopied, setUrlCopied] = useState(false);
  const selectMenu = (section) => {
    setIsActive(section);
  };
  const copied = () => {
    navigator.clipboard.writeText("https://andrealogiudice.vercel.app/");
    setUrlCopied(true);

    setTimeout(() => { setUrlCopied(false) }, 5000);
  };
  return (
    <div className={styles.sideBar}>
      <div className={styles.hamburger} onClick={() => { openSideBar(true) }}><GiHamburgerMenu /></div>
      <div className={styles.sectionContainer}>
        <Link href={`/`}>
          <div className={`${styles.about} ${sidebarIsActive == "about" ? styles.selected : null}`} onClick={() => editSidebarActive("about")}><MdOutlinePersonOutline /></div>
        </Link>
        <Link href={`/contacts`}>
          <div className={`${styles.contact} ${sidebarIsActive == "contact" ? styles.selected : null}`} onClick={() => editSidebarActive("contact")}><AiOutlinePhone /></div>
        </Link>
        <Link href={`/experience`}>
          <div className={`${styles.experience} ${sidebarIsActive == "experience" ? styles.selected : null}`} onClick={() => editSidebarActive("experience")}><CgWorkAlt /></div>
        </Link>
        <Link href={`/`}>
          <div className={`${styles.education} ${sidebarIsActive == "education" ? styles.selected : null}`} onClick={() => editSidebarActive("education")}><BsPencil /></div>
        </Link>
        <Link href={`/`}>
          <div className={`${styles.skills} ${sidebarIsActive == "skills" ? styles.selected : null}`} onClick={() => editSidebarActive("skills")}><VscPieChart /></div>
        </Link>
        <Link href={`/`}>
          <div className={`${styles.hobbies} ${sidebarIsActive == "hobbies" ? styles.selected : null}`} onClick={() => editSidebarActive("hobbies")}><MdOutlinePhotoCamera /></div>
        </Link>
      </div>
      <div className={styles.share} onClick={copied}><BsShare /></div>
      <div className={urlCopied ? styles.urlCopied : styles.urlNotCopied}>Url copied on the clipboard</div>
    </div>
  )
}