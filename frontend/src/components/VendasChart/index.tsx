import { ApexOptions } from "apexcharts";

import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import axios from "axios";
import { SuccessSalesByDay } from "types/SuccessSalesByDay";

type ChartData = {
  labels: string[];
  series: number[];
};

const VendasChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    series: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/dashboard/admin/success-by-day")
      .then((response) => {
        const data = response.data as SuccessSalesByDay[];
        console.log(data);

        // Converter o Map para array de labels e series
        const myLabels = data.map((x) => x.dia);
        const mySeries = data.map((x) => x.quantidadeVendas);

        setChartData({ labels: myLabels, series: mySeries });
      })
      .catch((error) =>
        console.log("Erro ao buscar dados do gráfico: " + error)
      );
  }, []);

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
    },
    legend: {
      position: "top" as "top", // Certifique-se de que este valor é um dos valores esperados
      horizontalAlign: "right" as "right", // Ajuste conforme necessário
      floating: true,
      offsetY: -25,
      offsetX: -5,
      show: true,
    },
    labels: chartData.labels,
    xaxis: {
      categories: chartData.labels,
    },
  };

  return (
    <div>
      <Chart
        options={options}
        series={[{ name: "Vendidos", data: chartData.series }]}
        type="line"
        height={350}
      />
    </div>
  );
};

export default VendasChart;
