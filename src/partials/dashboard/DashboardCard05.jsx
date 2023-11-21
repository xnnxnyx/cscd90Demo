import React, { useState, useEffect } from 'react';
import Tooltip from '../../components/Tooltip';
import RealtimeChart from '../../charts/RealtimeChart';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard05() {

  // IMPORTANT:
  // Code below is for demo purpose only, and it's not covered by support.
  // If you need to replace dummy data with real data,
  // refer to Chart.js documentation: https://www.chartjs.org/docs/latest

  // Fake real-time data
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [range, setRange] = useState(35);
  
  // Dummy data to be looped
  const data = [
    57.81, 57.75, 55.48, 54.28, 53.14, 52.25, 51.04, 52.49, 55.49, 56.87,
    53.73, 56.42, 58.06, 55.62, 58.16, 55.22, 58.67, 60.18, 61.31, 63.25,
    65.91, 64.44, 65.97, 62.27, 60.96, 59.34, 55.07, 59.85, 53.79, 51.92,
    50.95, 49.65, 48.09, 49.81, 47.85, 49.52, 50.21, 52.22, 54.42, 53.42,
    50.91, 58.52, 53.37, 57.58, 59.09, 59.36, 58.71, 59.42, 55.93, 57.71,
    50.62, 56.28, 57.37, 53.08, 55.94, 55.82, 53.94, 52.65, 50.25,
  ];

  // Dummy data with values in range [50-200]
const bigRangeData = [
  150.21, 152.22, 154.42, 153.42, 150.91, 158.52, 153.37, 157.58, 159.09, 159.36,
  158.71, 159.42, 155.93, 157.71, 150.62, 156.28, 157.37, 153.08, 155.94, 155.82,
  153.94, 152.65, 150.25, 152.81, 152.75, 150.48, 149.28, 148.14, 147.25, 146.04,
  147.49, 150.49, 151.87, 153.25, 155.91, 154.44, 155.97, 152.27, 150.96, 149.34,
  145.07, 149.85, 143.79, 141.92, 140.95, 139.65, 138.09, 139.81, 137.85, 139.52,
  140.21, 142.22, 144.42, 143.42, 140.91, 148.52, 143.37, 147.58, 149.09, 149.36,
  148.71, 149.42, 145.93, 147.71, 140.62, 146.28, 147.37, 143.08, 145.94, 145.82,
  143.94, 142.65, 140.25, 145.21, 145.75, 143.48, 142.28, 141.14, 140.25, 139.04,
  140.49, 143.49, 144.87, 146.25, 148.91, 147.44, 148.97, 145.27, 143.96, 142.34,
  138.07, 142.85, 136.79, 134.92, 133.95, 132.65, 131.09, 132.81, 130.85, 132.52,
  133.21, 135.22, 137.42, 136.42, 133.91, 141.52, 136.37, 140.58, 142.09, 142.36,
  141.71, 142.42, 138.93, 140.71, 133.62, 139.28, 140.37, 136.08, 138.94, 138.82,
  136.94, 135.65, 133.25, 138.21,
];


  const currentPagePath = window.location.pathname;
  const selectedData = currentPagePath === '/search/telus' ? bigRangeData : data;

  const [slicedData, setSlicedData] = useState(selectedData.slice(0, range));

  // Generate fake dates from now to back in time
  const generateDates = () => {
    const now = new Date();
    const dates = [];
    data.forEach((v, i) => {
      dates.push(new Date(now - 2000 - i * 2000));
    });
    return dates;
  };

  const [slicedLabels, setSlicedLabels] = useState(generateDates().slice(0, range).reverse());

  // Fake update every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 2000);
    return () => clearInterval(interval)
  }, [counter]);

  // Loop through data array and update
  useEffect(() => {
    setIncrement(increment + 1);
    const newData = currentPagePath === '/search/telus' ? bigRangeData : data;

    if (increment + range < newData.length) {
      setSlicedData(([x, ...slicedData]) => [...slicedData, newData[increment + range]]);
    } else {
      setIncrement(0);
      setRange(0);
    }
    setSlicedLabels(([x, ...slicedLabels]) => [...slicedLabels, new Date()]);
    return () => setIncrement(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, currentPagePath]);

  const chartData = {
    labels: slicedLabels,
    datasets: [
      // Indigo line
      {
        data: slicedData,
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
          pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
          pointHoverBackgroundColor: tailwindConfig().theme.colors.indigo[500],
          pointBorderWidth: 0,
          pointHoverBorderWidth: 0,          
          clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Round Trip Time</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <RealtimeChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard05;
