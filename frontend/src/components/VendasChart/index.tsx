import ApexCharts, { ApexOptions} from "apexcharts";


import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";



type ChartData = {
    labels: string[];
    series: number[]
}

const VendasChart = () => {
    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    };

    const options: ApexOptions = {
        chart: {
            height: 350,
            type: 'line',
        },
        legend: {
            position: "top" as "top", // Certifique-se de que este valor é um dos valores esperados
            horizontalAlign: "right" as "right", // Ajuste conforme necessário
            floating: true,
            offsetY: -25,
            offsetX: -5
        },
        labels: mockData.labels,
        xaxis: {
            categories: mockData.labels
        }
    };

    return (
        <div>
            <Chart
                options={options}
                series={[{ name: "Vendas", data: mockData.series }]}
                type="line"
                height={350}
            />
        </div>
    );
};

export default VendasChart;