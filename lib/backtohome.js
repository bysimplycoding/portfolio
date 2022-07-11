import Link from "next/link";
import Router, { useRouter } from "next/router";
import styles from './backtohome.module.css'

const Backtohome = () => {
  const route = useRouter()
  console.log(route)

  return (
    <div className={styles.bottom}>
      { route.pathname !== '/' &&
        <Link href='/'>
          <a className={styles.blue}>Back to home.</a>
        </Link>
      }
    </div>
   );
}
 
export default Backtohome;