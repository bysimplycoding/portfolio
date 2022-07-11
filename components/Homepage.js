import Image from 'next/image'
import styles from './Homepage.module.css'

const Homepage = () => {
  return ( 
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image 
        src='/profile.jpg'
        height='200px'
        width='200px'
        alt='me'
        />
      </div>
      <span className={styles.containDesc}>
        <h1 className={styles.name}>Jerkuei Majok</h1>
        <h4 className={styles.title}>Developer</h4>
        <p className={styles.description}>Hello! My name is Jerkuei. I am a relatively new web developer.<br />Below you will find projects I have worked on.</p>
      </span>
    </div>
   );
}
 
export default Homepage;