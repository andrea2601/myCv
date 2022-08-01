import styles from './styles.module.scss'
import {DefaultLayout} from '../../components/DefaultLayout'
import Card from '../../components/Card'
import Progress from '../../components/Progress'

export default function Experiences() {
  
  return (
    <DefaultLayout>
   
      {/* <h1 className={styles.title}>Experiences</h1> */}
      <div className={styles.experiences}>
        {/* <Card/> */}
        <Progress name={"React"} value={100} path={"/react.svg"}/>
        <Progress name={"Vue"} value={300} path={"/vue.svg"}/>
        <Progress name={"JavaScript"} value={123} path={"/Javascript.png"}/>
        <Progress name={"Git"} value={74} path={"/github.png"}/>
        <Progress name={"Photoshop"} value={255} path={"/Photoshop.png"}/>
        <Progress name={"Scss"} value={300} path={"/scss.svg"}/>
        {/* <div className={styles.experience}>
        </div> */}
      </div>
    </DefaultLayout>
  )
}