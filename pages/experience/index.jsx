import styles from './styles.module.scss'
import { DefaultLayout } from '../../components/DefaultLayout'
import Card from '../../components/Card'
import Progress from '../../components/Progress'

export default function Experiences() {

  return (
    <DefaultLayout>
      <div className={styles.experienceContainer}>

        <h1 className={styles.title}>Esperienze</h1>
        <div className={styles.experiences}>
          <div className={styles.experience}>
            <Card foto={"/ferdast.png"} title={"Ferdast"} location={"(Edgemony)"} description={
              `Sito web di viaggi internazionali dedicato ad un target che va oltre i 55 anni di età,
        le possibili mete possono essere scelte tra: Stati Uniti d'America, Russia, Francia e Italia;
        in ognuna è possibile visitare le singole città e scoprire le varie attività che quella offre;
        aggiungendo al carrello, si possono vedere in tempo reale le attività e la quantità totale tramite
        un piccolo pop up sulla destra, tramite il quale si può raggiungere la pagina del carrello,
        dove è possibile vedere il prezzo totale che l'utente pagherà`
            } />
          </div>
          <div className={styles.experience}>
            <Card foto={"/moviex.jpg"}title={"Thriller Moviex"} location={"(Edgemony)"} description={
              `Clone di Netflix a tema film thriller realizzato in javascript vanille e completamente responsive`
            } />
          </div>
          <div className={styles.experience}>
            <Card foto={"/vuegram.png"} title={"Vuegram"} location={"(Progetto personale)"} description={
              `Restyling della versione desktop di Instagram realizzata in VueJS e Vuetify (WIP) (Non Responsive)`
            } />
          </div>
          <div className={styles.experience}>
            <Card foto={"/vuemap.png"} title={"Vuemap"} location={"(Progetto personale)"} description={
              `Progetto personale sviluppato in VueJS e utilizzando le Google Maps API che mostra la posizione di una lista di automobili nel mondo completamente responsive.`
            } />
          </div>
          
          <div className={styles.experience}>
            <Card foto={"/movieDB.png"} title={"MovieDb"} location={"(Edgemony)"} description={
              `Sito web responsive che permette di  mostrare, aggiungere, modificare ed eliminare diversi film da un database sviluppato in react`
            } />
          </div>
          <div className={styles.experience}>
            <Card foto={"/reactshop.png"} title={"React e-commerce"} location={"(Edgemony)"} description={
              `Un e-commerce con design simile ad Amazon sviluppato in react (Non responsive)`
            } />
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}