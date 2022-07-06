import React from 'react';
import './Chartstrip.scss';

interface PreparedData {
  name: string;
  time: number;
  width: number;
}

interface Props {
  data: PreparedData[];
  stripLength: number;
}

export const Chartstrip: React.FC<Props> = ({ data, stripLength }) => {
  return (
    <>
      {data.map((item, i) => (
        <div
          key={item.name}
          className="wrap"
        >
          <div className="wrap__name">
            <p className="wrap__nameitem">
              {`${item.name} : `}
            </p>
          </div>
          <div
            className="wrap__strips"
            style={{
              width: stripLength * item.time,
              marginLeft: (data.slice(0, i).reduce((a, x) => a + x.time, 0)) * stripLength,
            }}
          >
            <p className="wrap__time">{item.time}</p>
          </div>
        </div>

      ))}
    </>
  );
};
