import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";


type ChartData = {
    labels: string[];
    series: number[]
}

const VendasChart = () => {

    const [chartData, setChartData] = useState<ChartData>({
        labels: [],
        series: []
    });


};


export default VendasChart;