import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import QrFrame from "./../../assets/images/qr-frame.svg"; // Certifique-se de ter o arquivo qr-frame.svg na pasta assets

import "./styles.css";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { Ingresso } from "types/Ingresso";


// Hook personalizado para inicializar e limpar o scanner
const useQrScanner = (onScanSuccess: (result: QrScanner.ScanResult) => void, onScanFail: (err: string | Error) => void) => {
  const scanner = useRef<QrScanner>();
  const videoEl = useRef<HTMLVideoElement>(null);

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

  return { videoEl, scanner };
};

const ScannerQRCode = () => {
  const [qrOn, setQrOn] = useState<boolean>(true);
  const [ingresso, setIngresso] = useState<Ingresso | null>(null);
  const [scannedResult, setScannedResult] = useState<string | undefined>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Função de sucesso ao escanear
  const handleScanSuccess = (result: QrScanner.ScanResult) => {
    if (isProcessing) return;

    setScannedResult("Código: " + result?.data);
    setIsProcessing(true);

    if (scanner.current) {
      scanner.current.stop();
    }

    axios
      .get(`${BASE_URL}/api/ingresso/code/` + result?.data)
      .then((response) => {
        setIngresso(response.data);
      })
      .catch((error) => {
        setIsProcessing(false);
        scanner.current?.start();

        if (error.response.status === 404) {
          alert("Ingresso não encontrado");
        }

        console.error("Erro ao buscar dados do ingresso:", error);
      });
  };

  // Função de falha ao escanear
  const handleScanFail = (err: string | Error) => {
    console.log(err);
  };

  // Hook personalizado para inicializar e limpar o scanner
  const { videoEl, scanner } = useQrScanner(handleScanSuccess, handleScanFail);
  const qrBoxEl = useRef<HTMLDivElement>(null); // Adicionando de volta a referência qrBoxEl

  // Função para validar a entrada
  const handleValidarEntrada = () => {
    axios
      .post(`${BASE_URL}/api/ingresso/validar/` + ingresso?.codigoConsumivel)
      .then((response) => {
        window.location.href = "/lista";
      })
      .catch((error) => {
        setIsProcessing(false);
        scanner.current?.start();

        switch (error.response.status) {
          case 404:
            alert("Ingresso não encontrado.");
            break;
          default:
            alert("Algum erro ocorreu na validação do ingresso. Por favor, tente novamente.");
        }
      });
  };

  useEffect(() => {
    if (!qrOn) {
      alert("Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload.");
    }
  }, [qrOn]);


  return (
    <div className="card-main">
      <video ref={videoEl} style={{ width: "100%" }} />
      <div ref={qrBoxEl} style={{ position: "relative" }}>
        <img src={QrFrame} alt="QR Frame" style={{ position: "absolute", top: 0, left: 0 }} />
      </div>
      
      {scannedResult && <p>Scanned Result: {scannedResult}</p>}
    </div>
  );
};

export default ScannerQRCode;