// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import LineChart from './components/LineChart/LineChart.jsx';
import BarChart from './components/BarChart/BarChart.jsx';
import Content from './components/Content/Content.jsx';
import DoughnutChart from './components/DoughnutChart/DoughnutChart.jsx';
import TableComponent from './components/TableComponent/TableComponent.jsx';
import jsonData from './data/data.json';
import './App.css';

export const App = () => {
  const [activeTab, setActiveTab] = useState('charts');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <Header activeTab={activeTab} />
      <div className="charts-container">
        {activeTab === 'charts' && (
          <>
            <LineChart />
            <Content />
            <BarChart />
            <DoughnutChart />
          </>
        )}
        {activeTab === 'table' && <TableComponent data={jsonData} />}
      </div>
      <div className="tabs">
        <button
          className={activeTab === 'charts' ? 'active' : ''}
          onClick={() => handleTabChange('charts')}
        >
          Overview
        </button>
        <button
          className={activeTab === 'table' ? 'active' : ''}
          onClick={() => handleTabChange('table')}
        >
          Sales Export
        </button>
      </div>
    </div>
  );
};

export default App;
