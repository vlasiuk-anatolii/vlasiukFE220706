import React, { useEffect, useState } from 'react';
import './App.scss';
import { Chartstrip } from './components';

const initialData = [
  { name: 'Landing Page', time: 7.4 },
  { name: 'Configurator', time: 0.2 },
  { name: 'Check-out', time: 7.0 },
  { name: 'Deal', time: 3.8 },
];

interface PreparedData {
  name: string;
  time: number;
  width: number;
}

export const App: React.FC = () => {
  const [currentData, setCurrentData] = useState<PreparedData[]>([]);
  const scale = 7;
  const preparedData: PreparedData[] = [];

  const transformData = () => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < initialData.length; i++) {
      preparedData.push({
        ...initialData[i],
        width: scale * initialData[i].time,
      });
    }

    // eslint-disable-next-line no-console
    console.log(preparedData);

    return preparedData;
  };

  const setrandomTime = () => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < currentData.length; i++) {
      preparedData.push({
        ...currentData[i],
        time: Math.floor(Math.random() * 100) / 10,
      });
    }

    // eslint-disable-next-line no-console
    console.log(preparedData);
    setCurrentData(preparedData);
  };

  useEffect(() => {
    setCurrentData(transformData());
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setrandomTime(), 30000);

    return () => clearTimeout(timer);
  }, [currentData]);

  return (
    <div className="box">
      <p className="title">SPENT TIME (SECONDS)</p>
      <Chartstrip
        data={currentData}
        stripLength={scale}
      />
      <button
        type="button"
        onClick={() => {
          setrandomTime();
        }}
      >
        Click
      </button>
    </div>
  );
};
