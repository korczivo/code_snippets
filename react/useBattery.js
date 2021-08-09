// React hook tracks device battery state

import { useBattery } from 'react-use';

const UseBatteryComponent = () => {
  const batteryState = useBattery();

  if (!batteryState.isSupported) {
    return (
      <div>
        <strong>Battery sensor</strong>: <span>not supported</span>
      </div>
    );
  }

  return (
    <div>
      <strong>Battery sensor</strong> <span>supported</span> <br/>
      <strong>Battery state</strong>: <span>fetched</span> <br/>
      <strong>Charge level</strong> <span>{(batteryState.level * 100).toFixed(0)}%</span> <br/>
      <strong>Charging</strong> <span>{batteryState.charging ? 'yes' : 'no'}</span> <br/>
      <strong>Charging time</strong>:;
      <span>{batteryState.chargingTime ? batteryState.chargingTime : 'finished'}</span> <br/>
      <strong>Discharging time</strong> <span>{batteryState.dischargingTime}</span>
    </div>
  );
};

// Source: https://github.com/streamich/react-use/blob/master/docs/useBattery.md
