import React, { Fragment } from 'react';
import TheDatePicker from '../components/datepicker/DatePicker';

import TheTimeePicker from '../components/timepicker/TimePicker';

const Dashboard: React.FC = () => {
  return (
    <Fragment>
      <div>DashBoard</div>
      <TheDatePicker />
      <TheTimeePicker />
    </Fragment>
  );
};

export default Dashboard;
