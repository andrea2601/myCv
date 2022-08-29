import styles from './styles.module.scss'
import { DefaultLayout } from '../../components/DefaultLayout'
import EduCard from '../../components/EduCard'
import Progress from '../../components/Progress'
import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { useCVContext } from "../../Context/Provider";

export default function Hobby() {
  const [showScrollBar, setShowScrollBar] = useState(false);
  let myTimeout = () => { setTimeout(() => { setShowScrollBar(false) }, 1000) };

  const showScrollBarFun = () => {
    if (myTimeout) {
      // console.log("timer on");
      clearTimeout(myTimeout);
      myTimeout = null;
    }
    setShowScrollBar(true);
    // console.log("onmouseEnter", myTimeout);
  }
  const hideScrollBarFun = () => {
    myTimeout = () => {
      setTimeout(() => {
        if (myTimeout != null) setShowScrollBar(false)
      }, 1000)
    };
    myTimeout();
    // console.log("onmouseLeave");

  }

  const router = useRouter();
  const {
    state: { sidebarIsActive },
    editSidebarActive
  } = useCVContext();

  useEffect(() => {

    console.log(router.pathname.slice(1));
    editSidebarActive(router.pathname.slice(1));
  }, []);

  return (
    <DefaultLayout>
      <div className={styles.experienceContainer}>

        <h1 className={styles.title}>Esperienze</h1>
        <div className={`${styles.experiences} ${showScrollBar ? styles.showScrollBar : ""}`} onMouseOver={showScrollBarFun} onMouseLeave={hideScrollBarFun}>
          <a rel="noreferrer" href='https://www.credential.net/5331e577-a0ff-4f81-98d0-2bc183f8b0b9' target="_blank" className={styles.experience}>
            <EduCard data={" (Giugno 2022)"} title={"Front end Developer"} location={"(Edgemony)"} description={
              `Progetto web in team adottando la metodologia Agile e utilizzando tecnologie avanzate come NextJS, 
              SASS, Context, Figma e Git. (Click per vedere il certificato)`
            } />
          </a>
          <a rel="noreferrer" href='https://www.redbubble.com/people/ArtShots/' target="_blank" className={styles.experience}>
            <EduCard data={" (2015 - Presente)"} title={"Grafico"} location={"(Redbubble.com)"} description={
              `Fornitura, al sito redbubble.com, di grafiche 
              applicabili su vari gadgets. (Click per vedere il portfolio) `
            } />
          </a>
          <a rel="noreferrer" href='/' target="_blank" className={styles.experience}>
            <EduCard data={" (Giugno 2022 - Settembre 2023)"} title={"English B2 Level"} location={"(My English School)"} description={
              `Corso di inglese che prevede grammatica e 
conversazione con insegnanti madrelingua.
`
            } />
          </a>
          <a rel="noreferrer" href='/' target="_blank" className={styles.experience}>
            <EduCard data={" (2017 - Presente)"} title={"Ingegneria Elettronica"} location={"(Università degli studi di Palermo)"} description={
              `• Fondamenti di informatica (Programmazione C); \t• Reti internet. 
`
            } />
          </a>
          <a rel="noreferrer" href='/' target="_blank" className={styles.experience}>
            <EduCard data={" (2012 - 2017)"} title={"Perito  Informatico"} location={"(IISS Alessandro Volta)"} description={
              `• Informatica; 
• Telecomunicazioni, Sistemi e Reti.
`
            } />
          </a>
          <a rel="noreferrer" href='/' target="_blank" className={styles.experience}>
            <EduCard data={" (2017)"} title={"Nuova ECDL"} location={"()"} description={
              `• Modulo Spreadsheets; 
• Modulo Word Processing; 
• Modulo Presentation. 
`
            } />
          </a>

        </div>
      </div>
    </DefaultLayout>
  )
}