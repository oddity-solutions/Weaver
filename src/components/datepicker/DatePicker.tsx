import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TheDatePicker: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (dates: Date) => {
    setDate(dates);
  };
  return <DatePicker selected={date} onChange={onChange} />;
};

export default TheDatePicker;
