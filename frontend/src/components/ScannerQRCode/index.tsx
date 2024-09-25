import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import QrFrame from "./../../assets/images/qr-frame.svg"; // Certifique-se de ter o arquivo qr-frame.svg na pasta assets

import "./styles.css";
import axios from "axios";
import { BASE_URL } from "utils/requests";


const ScannerQRCode = () => {
  // QR States
  const scanner = useRef<QrScanner>();
  const videoEl = useRef<HTMLVideoElement>(null);
  const qrBoxEl = useRef<HTMLDivElement>(null);
  const [qrOn, setQrOn] = useState<boolean>(true);

  // Result
  const [scannedResult, setScannedResult] = useState<string | undefined>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false); // Novo estado para controlar o processamento

  // Success
  const onScanSuccess = (result: QrScanner.ScanResult) => {
    if (isProcessing) return; // Retorna se tiver processado

    // Handle success.
    setScannedResult("Código: " + result?.data);

    axios.post(`${BASE_URL}/api/ingresso/validar/` + result?.data )
      .then(response => {
        // Voltar para a página de ingressos
        window.location.href = "/lista";
      })
      .catch(error => {
        alert("Erro na validação do ingresso. Por favor, tente novamente.");
      });
  };

  // Fail
  const onScanFail = (err: string | Error) => {
    console.log(err);
  };

  useEffect(() => {
    if (!qrOn) {
      alert(
        "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload."
      );
    }
  }, [qrOn]);

  useEffect(() => {
    if (videoEl.current) {
      scanner.current = new QrScanner(videoEl.current, onScanSuccess, {
        onDecodeError: onScanFail,
        highlightScanRegion: true,
        highlightCodeOutline: true,
      });
      scanner.current.start();
    }

    return () => {
      if (scanner.current) {
        scanner.current.stop();
      }
    };
  }, [videoEl]);

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
