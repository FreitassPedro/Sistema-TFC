import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import QrFrame from "./../../assets/images/qr-frame.svg"; // Certifique-se de ter o arquivo qr-frame.svg na pasta assets

import "./styles.css";
const ScannerQRCode = () => {
   // QR States
   const scanner = useRef<QrScanner>();
   const videoEl = useRef<HTMLVideoElement>(null);
   const qrBoxEl = useRef<HTMLDivElement>(null);
   const [qrOn, setQrOn] = useState<boolean>(true);
 
   // Result
   const [scannedResult, setScannedResult] = useState<string | undefined>("");
 
   // Success
   const onScanSuccess = (result: QrScanner.ScanResult) => {
     // 🖨 Print the "result" to browser console.
     console.log(result);
     // ✅ Handle success.
     // 😎 You can do whatever you want with the scanned result.
     setScannedResult(result?.data);
   };
 
   // Fail
   const onScanFail = (err: string | Error) => {
     // 🖨 Print the "err" to browser console.
     console.log(err);
   };
 
   useEffect(() => {
     if (videoEl.current && qrBoxEl.current) {
       scanner.current = new QrScanner(
         videoEl.current,
         onScanSuccess,
         {
           onDecodeError: onScanFail,
           highlightScanRegion: true,
           highlightCodeOutline: true,
         }
       );
       scanner.current.start();
     }
 
     return () => {
       if (scanner.current) {
         scanner.current.stop();
       }
     };
   }, [videoEl, qrBoxEl]); // Adicione dependências apropriadas
 
   return (
     <div>
       <video ref={videoEl} style={{ width: '100%' }} />
       <div ref={qrBoxEl} style={{ position: 'relative' }}>
         <img src={QrFrame} alt="QR Frame" style={{ position: 'absolute', top: 0, left: 0 }} />
       </div>
       {scannedResult && <p>Scanned Result: {scannedResult}</p>}
     </div>
   );
 };
export default ScannerQRCode;