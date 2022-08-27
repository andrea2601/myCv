import styles from './styles.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai';
import { CgWorkAlt } from 'react-icons/cg';
import { BsPencil } from 'react-icons/bs';
import { VscPieChart } from 'react-icons/vsc';
import { BsShare } from 'react-icons/bs';
import { useEffect, useState } from 'react'
import Link from 'next/link';
import { useCVContext } from "../../Context/Provider";

export default function SideBarOpen(props) {
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

    setTimeout(()=>{setUrlCopied(false)},5000);
  };

  return (
    <div className={`${styles.sideBarOpen} ${props.isOpen ? null : styles.hideSideBar}`}>
      <div className={styles.bgLayer} onClick={()=>{props.setIsOpen(false)}}></div>
      <div className={styles.sideBarOpenContainer}>
        <div className={styles.hamburger} onClick={()=>{props.setIsOpen(false)}}><GiHamburgerMenu /></div>
        <div className={styles.sectionContainer}>
        <Link href={`/`}>
        <div className={`${styles.about} ${sidebarIsActive == "about" ? styles.selected : null}`} onClick={() => editSidebarActive("about")}>About Me<MdOutlinePersonOutline /></div>
        </Link>
        <Link href={`/contacts`}>
          <div className={`${styles.contact} ${sidebarIsActive == "contact" ? styles.selected : null}`} onClick={() => editSidebarActive("contact")}>Contatti<AiOutlinePhone /></div>
        </Link>
        <Link href={`/experience`}>
          <div className={`${styles.experience} ${sidebarIsActive == "experience" ? styles.selected : null}`} onClick={() => editSidebarActive("experience")}>Esperienze<CgWorkAlt /></div>
        </Link>
        <Link href={`/`}>
          <div className={`${styles.education} ${sidebarIsActive == "education" ? styles.selected : null}`} onClick={() => editSidebarActive("education")}>Educazione<BsPencil /></div>
        </Link>
        <Link href={`/skills`}>
          <div className={`${styles.skills} ${sidebarIsActive == "skills" ? styles.selected : null}`} onClick={() => editSidebarActive("skills")}>Skills<VscPieChart /></div>
        </Link>
        <Link href={`/`}>
          <div className={`${styles.hobbies} ${sidebarIsActive == "hobbies" ? styles.selected : null}`} onClick={() => editSidebarActive("hobbies")}>Hobby<MdOutlinePhotoCamera /></div>
        </Link>
        </div>
        <div className={styles.share} onClick={copied}><BsShare /></div>
        <div className={urlCopied ? styles.urlCopied : styles.urlNotCopied }>Url copied on the clipboard</div>
      </div>
    </div>
  )
}