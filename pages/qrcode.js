import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react"
import Layout from '../components/layout'
import styles from '../components/layout.module.css'


export default function Qrcode() {
  const [text, setText] = useState('') ;
  const changeUp = e => {
    setText(e.target.value)
  };
  
  return (
    <Layout>
      <div className={ styles.qr }>
        <div className={ styles.container }>
          <h1>Create QR Code</h1>
          <input
            type="text"
            placeholder='ex: https://www.google.com/'
            value={ text }
            onChange={ changeUp }
            className= { styles.input }
          />
          <QRCodeCanvas
            value={ text }
          />
        </div>
      </div>
    </Layout>
   );
}
