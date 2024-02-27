import { Bar } from 'react-chartjs-2';
import revenueData from '../../data/revenueData.json';

const BarChart = () => {
  return (
    <div className="dataCard revenueCard">
      <Bar
        data={{
          labels: revenueData.map((data) => data.label),
          datasets: [
            {
              label: 'Revenue',
              data: revenueData.map((data) => data.revenue),
              backgroundColor: [
                'rgba(43, 63, 229, 0.8)',
                'rgba(250, 192, 19, 0.8)',
                'rgba(253, 135, 135, 0.8)',
              ],
              borderRadius: 5,
            },
            {
              label: 'Cost',
              data: revenueData.map((data) => data.cost),
              backgroundColor: [
                'rgba(43, 63, 229, 0.8)',
                'rgba(250, 192, 19, 0.8)',
                'rgba(253, 135, 135, 0.8)',
              ],
              borderRadius: 5,
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              text: 'Revenue Source',
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
