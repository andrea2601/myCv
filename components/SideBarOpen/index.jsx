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
import { useDrag } from '@use-gesture/react';

export default function SideBarOpen(props) {
  const {
    state: { sidebarIsActive },
    editSidebarActive
  } = useCVContext();

  const [vh, setVh] = useState(0);
  const [vw, setVw] = useState(0);


  useEffect(() => {
    setVh(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0));
    setVw(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
    const resize = () => {
      setVh(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0));
      setVw(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
    }

    window.addEventListener('resize', resize)
  }, []);

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







  const [SBPos, setSBPos] = useState({ x: 0, y: 0 });

  const bindSideBar = useDrag((params) => {
    params.offset[0] > 350 ? params.offset[0] = 350 : params.offset[0]
    params.offset[0] < 0 ? params.offset[0] = 0 : params.offset[0]
    // console.log(params.dragging);
    // if(SBPos.x==0 && params.dragging==false) {params.offset[0]=0} else{ params.offset[0] }
    if (params.dragging) {
      setSBPos({
        x: params.offset[0],
        y: params.offset[1]
      }
      )
    } else if (!params.dragging) {
      if (SBPos.x > 175) {
        params.offset[0] = 350;
        setSBPos({ x: 350, y: 0 })

      } else if (SBPos.x == 0) {
        params.offset[0] = 0;

      } else {
        params.offset[0] = 0;
        setSBPos({ x: 0, y: 0 })

      }
    }
  }, { from: SBPos.x == 0 ? 0 : 350 });


  useEffect(() => {
    // console.log(SBPos.x);
    // console.log({ ...bindSideBar() });
console.log("isopen ", props.isOpen);
  }, [ props.isOpen]);




  return (<>
    {vh>vw
      ?
      <div  {...bindSideBar()}
        className={styles.handlerContainer}
        style={{
          left: SBPos.x,
        }}
        onMouseDown={() => {
          setSBPos({ ...SBPos, x: SBPos.x });
        }}
      // onMouseUp={()=>{
      //   SBPos.x > 175 ? setSBPos({ x: 350, y:0 }) : setSBPos({ x: 0, y:10 });
      //   console.log(SBPos);
      // }}
      >
        <div className={styles.handler} style={{
          left: SBPos.x,
        }}>Drag</div>
      </div>
      :
      null
    }
    <div className={`${styles.sideBarOpen} ${props.isOpen || SBPos.x > 100 ? null : styles.hideSideBar}`} >
      <div className={styles.bgLayer} onClick={() => { props.setIsOpen(false); setSBPos({ x: 0, y: 0 }) }}></div>
      <div
        className={styles.sideBarOpenContainer}
        style={{
          width: SBPos.x,
        }}
      >



        <div className={styles.hamburger} onClick={() => { props.setIsOpen(false); setSBPos({ x: 0, y: 0 }) }} style={{
          width: SBPos.x,
        }}><GiHamburgerMenu /></div>
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
          <Link href={`/hobby`}>
            <div className={`${styles.hobbies} ${sidebarIsActive == "hobby" ? styles.selected : null}`} onClick={() => editSidebarActive("hobbies")}>Hobby<MdOutlinePhotoCamera /></div>
          </Link>
        </div>
        <div className={styles.share} onClick={copied}><BsShare /></div>
        <div className={urlCopied ? styles.urlCopied : styles.urlNotCopied}>Url copied on the clipboard</div>
      </div>
    </div>
  </>
  )
}