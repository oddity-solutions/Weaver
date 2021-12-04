import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { PATHS } from '../../constants/paths';

const App: React.FC = () => {
  return (
    <Routes>
      {Object.entries(PATHS).map(([key, Value]) => {
        return <Route path={key} key={key} element={<Value />} />;
      })}
    </Routes>
  );
};

export default App;
