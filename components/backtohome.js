import Link from "next/link";
import { useRouter } from "next/router";
import styles from './backtohome.module.css'

export default function Backtohome() {
  const route = useRouter()
  
  return (
    <div className={styles.bottom}>
      { route.pathname !== '/' &&
        <Link href='/'>
          <a className={styles.blue}>Back to home</a>
        </Link>
      }
    </div>
   );
}