import Image from 'next/image'
import styles from './homepage.module.css'

export default function Homepage() {
  return ( 
    <>
      <div className={ styles.container }>
        <div className={ styles.image }>
          <Image 
            src='/profile.jpg'
            height='200px'
            width='200px'
            alt='me'
          />
        </div>
        <div className={ styles.text }>
          <h1>Jerkuei Majok</h1>
          <h4>Developer</h4>
          <p>Hello! My name is Jerkuei. I am a relatively new web developer.<br />Below you will find projects I have worked on.</p>
        </div>
      </div>
    </>
   );
}