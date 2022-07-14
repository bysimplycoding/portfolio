import Link from "next/link";

export default function Projects() {
  return ( 
    <div>
      <Link href='/qrcode'>
        <a>QR Code Generator</a>
        {/* more projects*/}
      </Link>
    </div>
   );
}