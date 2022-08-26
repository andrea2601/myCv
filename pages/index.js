
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { DefaultLayout } from '../components/DefaultLayout'
import { useEffect, useState } from 'react'


export default function Home() {
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
    <DefaultLayout>

      {vw > vh
        ? <>
          <div className={styles.photo}>
            <Image className={styles.img} src="/IMG_7785foto.jpg" alt="foto" height={vh - 50} width={(vh - 50) / 4889 * 3456} />
            <h1 className={styles.name}>Andrea Maria</h1>
            <h1 className={styles.surname}>Lo Giudice</h1>
            <p className={styles.profession}>Front end developer</p>
          </div>
        </>
        :
        <>
          <h1 className={styles.name}>Andrea Maria</h1>
          <h1 className={styles.surname}>Lo Giudice</h1>
          <div className={styles.photo}>
            <Image className={styles.img} src="/IMG_7785foto11.jpg" alt="foto" height={vh - 50} width={(vh - 50)} />
          </div>
        </>
      }

      <div className={styles.aboutMe}>
        <h1 className={styles.title}>about me</h1>
        <p className={styles.info}>24 anni / Palermo / Web Developer</p>
        <p className={styles.parAboutMe}>
          {` Sono un perito informatico iscritto alla facoltà
          di ingegneria elettronica presso l'università
          di Palermo. Appassionato di tecnologia, ho
          intrapreso un percorso di sviluppo front-end
          frequentando un Coding Bootcamp che mi
          ha portato ad accrescere le mie capacità
          di problem solving e lavoro in team.`}
        </p>
      </div>
    </DefaultLayout>
  )
}
