import { Doughnut } from 'react-chartjs-2';
import revenueData from '../../data/revenueData.json';

const DoughnutChart = () => {
  return (
    <div className="chartContainer">
      <div className="chartWrapper">
        <div className="chart">
          <Doughnut
            data={{
              labels: revenueData.map((data) => data.label),
              datasets: [
                {
                  label: 'Count',
                  data: revenueData.map((data) => data.revenue),
                  backgroundColor: [
                    'rgba(43, 63, 229, 0.8)',
                    'rgba(250, 192, 19, 0.8)',
                    'rgba(253, 135, 135, 0.8)',
                  ],
                  borderColor: [
                    'rgba(43, 63, 229, 0.8)',
                    'rgba(250, 192, 19, 0.8)',
                    'rgba(253, 135, 135, 0.8)',
                  ],
                },
                {
                  label: 'Count',
                  data: revenueData.map((data) => data.cost),
                  backgroundColor: [
                    'rgba(43, 63, 229, 0.8)',
                    'rgba(250, 192, 19, 0.8)',
                    'rgba(253, 135, 135, 0.8)',
                  ],
                  borderColor: [
                    'rgba(43, 63, 229, 0.8)',
                    'rgba(250, 192, 19, 0.8)',
                    'rgba(253, 135, 135, 0.8)',
                  ],
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: 'Revenue Sources',
                },
              },
            }}
          />
        </div>
        <div className="description">
          <h1>680.17</h1>
          <p>Dispensings were served in the highest rank</p>
          <h2>TAT</h2>
          <p>on average per machine within the last 55 days</p>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
