import React, { useState } from 'react';
import TimePicker, { TimePickerValue } from 'react-time-picker';

const TheTimeePicker: React.FC = () => {
  const [selectedTime, onChange] = useState<TimePickerValue>(new Date());
  // const onChanged: (value: string | Date) => void = (value) => {
  // const onChanged: string | Date = onChange;

  return (
    <div>
      <TimePicker
        onChange={(date: TimePickerValue) => onChange(date)}
        value={selectedTime}
      />
    </div>
  );
};

export default TheTimeePicker;
