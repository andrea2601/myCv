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
          <a rel="noreferrer" href='/' target="_blank" className={styles.experience}>
            <EduCard data={" (Giugno 2022)"} title={"Ferdast"} location={"(Edgemony)"} description={
              `Sito web di viaggi internazionali dedicato ad un target che va oltre i 55 anni di età,
        le possibili mete possono essere scelte tra: Stati Uniti d'America, Russia, Francia e Italia;
        in ognuna è possibile visitare le singole città e scoprire le varie attività che quella offre;
        aggiungendo al carrello, si possono vedere in tempo reale le attività e la quantità totale tramite
        un piccolo pop up sulla destra, tramite il quale si può raggiungere la pagina del carrello,
        dove è possibile vedere il prezzo totale che l'utente pagherà`
            } />
          </a>
          
        </div>
      </div>
    </DefaultLayout>
  )
}