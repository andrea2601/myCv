import styles from "./styles.module.scss";
import Image from 'next/image'

export default function Card({foto, title, location, description}) {
  const formatMinText = (text) => text.split("").length>200 ? text.split("").slice(0, 200).join("") + "..." : text.split("").slice(0, 200).join("");
  return (
    <div className={styles.card}>
    <div className={styles.top}>
      <Image className={styles.img} src={foto} alt="foto" width={300} height={150} objectFit="cover"/>
    </div>
    <div className={styles.bottom}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <h3 className={styles.cardSub}>{location}</h3>
      <p className={styles.cardInfo}>
        {formatMinText(description)}
      </p>
    </div>
  </div>
  );
};