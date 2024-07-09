/* import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [digits, setDigits] = useState([500, 923, 4002, 3357]);
  const [countdowns, setCountdowns] = useState(digits);
  const [isRunning, setIsRunning] = useState([true, true, true, true]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdowns(prev => {
        const newCountdowns = [...prev];
        const newIsRunning = [...isRunning];

        newCountdowns.forEach((count, index) => {
          if (count > 0) {
            newCountdowns[index]--;
          } else {
            newIsRunning[index] = false;
          }
        });

        setIsRunning(newIsRunning);
        return newCountdowns;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [digits]);

  return (
    <div>
      <h1>
        {isRunning[0] ? countdowns[0] : digits[0]}:
        {isRunning[1] ? countdowns[1] : digits[1]}:
        {isRunning[2] ? countdowns[2] : digits[2]}:
        {isRunning[3] ? countdowns[3] : digits[3]}
      </h1>
    </div>
  );
};

export default CountdownTimer; */

import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const CountdownTimer = () => {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={9}
      colors={[
        ['#004777', 0.43],
        ['#F7B801', 0.33],
        ['#A30000', 0.33],
      ]}
      strokeWidth={6}
      size={100}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
};

export default CountdownTimer;