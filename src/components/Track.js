import React from 'react';
import { useSelector } from 'react-redux';

const Track = () => {
  const trackStored = useSelector((state) => state.tracks);
  if (trackStored.payload && trackStored.payload.length > 0) {
    return trackStored.payload.map((track) => {
      const {
        day, electrodomestic, id, watts,
      } = track;
      const timeConnected = track.time_connected;
      return (
        <div key={id}>
          <p>
            Date:
            {day}
          </p>
          <p>
            Electrodomestic:
            {electrodomestic}
          </p>
          <p>
            Time Connected:
            {timeConnected}
          </p>
          <p>
            Watts:
            {watts}
          </p>
        </div>
      );
    });
  }

  return (
    <div>
      <p> </p>
    </div>
  );
};

export default Track;
