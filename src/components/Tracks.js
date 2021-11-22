import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/TracksPage.css';

const Tracks = () => {
  const trackStored = useSelector((state) => state.tracks);
  const displayRows = () => {
    if (trackStored.payload && trackStored.payload.length > 0) {
      return trackStored.payload.map((track) => {
        const {
          day, electrodomestic, id, watts,
        } = track;
        const timeConnected = track.time_connected;
        return (
          <div className="track-row" key={id}>
            <p>
              Date:
              &nbsp;
              {day}
            </p>
            <p>
              Electrodomestic:
              &nbsp;
              {electrodomestic}
            </p>
            <p>
              Time Connected:
              &nbsp;
              {timeConnected}
            </p>
            <p>
              Watts:
              &nbsp;
              {watts}
            </p>
          </div>
        );
      });
    }
    return (
      <p> </p>
    );
  };

  return (
    <div className="track-rows">
      {displayRows()}
    </div>
  );
};

export default Tracks;
