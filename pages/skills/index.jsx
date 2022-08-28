import styles from './styles.module.scss'
import {DefaultLayout} from '../../components/DefaultLayout'
import Card from '../../components/Card'
import Progress from '../../components/Progress'

export default function Skills() {
  
  return (
    <DefaultLayout>
   
      {/* <h1 className={styles.title}>Experiences</h1> */}
      <h1 className={styles.title}>Competenze</h1>
      <div className={styles.experiences}>
        {/* <Card/> */}
        <Progress name={"React"} value={236} path={"/react.svg"}/>
        <Progress name={"NextJS"} value={270} path={"/next.png"}/>
        <Progress name={"Vue"} value={270} path={"/vue.svg"}/>
        <Progress name={"JavaScript"} value={236} path={"/Javascript.png"}/>
        <Progress name={"Git"} value={300} path={"/github.png"}/>
        <Progress name={"Photoshop"} value={100} path={"/Photoshop.png"}/>
        <Progress name={"Scss"} value={270} path={"/scss.svg"}/>
        <Progress name={"HTML"} value={270} path={"/html.png"}/>
        {/* <div className={styles.experience}>
        </div> */}
      </div>
    </DefaultLayout>
  )
}