import styles from "./styles.module.scss";
import Image from "next/image";
import { useEffect} from "react";

export default function Progress(props) {

  const animation = () => {
    const circle = document.getElementById(props.name);
    circle.animate([
      // keyframes
      { strokeDashoffset: 472 },
      { strokeDashoffset: props.value }
    ], {
      // timing options
      duration: 1000,
      iterations: 1
    });
    circle.style.strokeDashoffset = props.value
  };

  useEffect(() => {
    animation()
  }, []);

  return (
    <div className={styles.progress} onMouseEnter={()=>{animation()}}>
      <div className={styles.skill}>
        <div className={styles.outer}>
          <div className={styles.inner}>
            <div className={styles.icon}>
              <Image src={props.path || "/react.svg"} alt="react" layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
        <p className={styles.skillName}>{props.name}</p>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
          <defs>
          </defs>
          <circle cx="80" cy="80" r="70" strokeLinecap="round" id={props.name} />
        </svg>
      </div>
    </div>
  );
};