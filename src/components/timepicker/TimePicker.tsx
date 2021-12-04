import React, { useState } from 'react';
import TimePicker from 'react-time-picker';

const TheTimeePicker: React.FC = () => {
  const [value, onChange] = useState(new Date());
  const onChanged: (value: string | Date) => void = () => {
    onChange(value);
  };
  return (
    <div>
      <TimePicker onChange={onChanged} value={value} />
    </div>
  );
};

export default TheTimeePicker;
