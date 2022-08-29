import styles from "./styles.module.scss";
import Image from 'next/image'

export default function EduCard({foto, title, data, location, description}) {
  const formatMinText = (text) => text.split("").length>200 ? text.split("").slice(0, 200).join("") + "..." : text.split("").slice(0, 200).join("");
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}<span className={styles.span}>{data}</span></h2>
      <h3 className={styles.cardSub}>{location}</h3>
      <p className={styles.cardInfo}>
        {formatMinText(description)}
      </p>
    
  </div>
  );
};