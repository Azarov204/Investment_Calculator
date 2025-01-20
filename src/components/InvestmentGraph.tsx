import {SingleMonth} from "../utilities/InvestmentCalculations.tsx";
import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

interface InvestmentProps {
    monthlyInvestmentData: SingleMonth[];
}

export function InvestmentGraph(props: InvestmentProps) {

    return (
      <>
          <Line
              options={{
                  interaction: {
                      intersect: false,
                      mode: "index",
                      axis: 'x',
                  },
                  scales: {
                      x: {
                          display: true,
                          title: {
                              display: true,
                              text: "Months"
                          }
                      },
                      y: {
                          display: true,
                          title: {
                              display: true,
                              text: "Total Value"
                          }
                      }
                  }
              }}
              data={{
              labels: props.monthlyInvestmentData.map((data) => data.month),
              datasets: [
                  {
                      label: "Total value",
                      data: props.monthlyInvestmentData.map((data) => data.totalValue),
                      cubicInterpolationMode: "monotone",
                      pointRadius: 1,
                      backgroundColor: "#064FF0",
                      borderColor: "#064FF0",
                      fill: 1
                  },
                  {
                      label: "Interest Earned",
                      data: props.monthlyInvestmentData.map((data) => data.totalInterest),
                      pointRadius: 1,
                      backgroundColor: "#06b9f0",
                      borderColor: "#06b9f0",
                      fill: true,
                  }
              ]
          }}
          />
      </>
    );


}