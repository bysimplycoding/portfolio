import Link from "next/link";
import styles from './Projects.module.css'

const Projects = () => {
  return ( 
    <div className={styles.center}>
      <Link href='/qrcode'>
        <a>QR Code Generator</a>
        {/* more projects*/}
      </Link>
    </div>
   );
}
 
export default Projects;