import styles from './layout.module.css'
import Backtohome from './backtohome';

export default function Layout({children}) {
  return (
    <div className={styles.container}>
      {children}
      <Backtohome />
    </div>
  );
}