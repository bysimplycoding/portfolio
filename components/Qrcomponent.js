import { QRCodeSVG } from "qrcode.react"
import { useState } from "react"
import styles from '../styles/qrcode.module.css'

const Qrcomponent = () => {
  const [text, setText] = useState('') 
  
  const changeUp = e => {
    setText(e.target.value)
  }

  return (
    <div className={styles.outside}>
      <h1>Create QR Code</h1>
      <div className={styles.container}>
        <input
        type="text"
        placeholder='insert link, get qr code'
        value={ text }
        onChange={ changeUp }
        className={styles.input}
        />
        <div className={styles.qr}>
          <QRCodeSVG
          value={ text }
          />
        </div>
      </div>
    </div>
   );
}
 
export default Qrcomponent;