import styles from './styles.module.scss'
import DefaultLayout from '../../components/DefaultLayout'

export default function Home() {

  return (
    <DefaultLayout>
      <h1 className={styles.title}>Contacts</h1>
      <div className={styles.contacts}>

        <a className={styles.phone} href="tel:3896455063"><span className={styles.label}>Phone </span>+39 3896455063</a>
        
        <a className={styles.email} href="mailto:andrealogiudice26@gmail.com"><span className={styles.label}>E-mail </span>andrealogiudice26@gmail.com</a>
       
        <a className={styles.linkedin} href="https://www.linkedin.com/in/andreamarialogiudice/"><span className={styles.label}>Linkedin </span>www.linkedin.com/in/andreamarialogiudice/</a>
        
        <a className={styles.github} href="https://github.com/andrea2601"><span className={styles.label}>Github </span>github.com/andrea2601</a>
      </div>
    </DefaultLayout>
  )
}
