import styles from "./styles.module.scss";
import Image from 'next/image'

export default function Card() {
  const formatMinText = (text) => text.split("").slice(0, 200).join("") + "...";
  return (
    <div className={styles.card}>
    <div className={styles.top}>
      <Image className={styles.img} src="/ferdast.png" alt="foto" width={300} height={150} objectFit="cover"/>
    </div>
    <div className={styles.bottom}>
      <h2 className={styles.cardTitle}>Ferdast</h2>
      <h3 className={styles.cardSub}>{"(Edgemony)"}</h3>
      <p className={styles.cardInfo}>
        {formatMinText(`Sito web di viaggi internazionali dedicato ad un target che va oltre i 55 anni di età,
        le possibili mete possono essere scelte tra: Stati Uniti d'America, Russia, Francia e Italia;
        in ognuna è possibile visitare le singole città e scoprire le varie attività che quella offre;
        aggiungendo al carrello, si possono vedere in tempo reale le attività e la quantità totale tramite
        un piccolo pop up sulla destra, tramite il quale si può raggiungere la pagina del carrello,
        dove è possibile vedere il prezzo totale che l'utente pagherà`)}

      </p>
    </div>
  </div>
  );
};