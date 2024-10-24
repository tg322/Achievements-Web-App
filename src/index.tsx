import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HousesBarCharts from './pages/HousesBarCharts';
import HousesBarChartsHorizontal from './pages/HousesBarChartsHorizontal';
import BarChart from './pages/BarChart';

const Content = () => {

  return(
    <BrowserRouter>
      <Routes>
        {/* <Route path="/houseTotals" element={<HousesBarCharts/>}/>
        <Route path="/houseTotalsHorizontal" element={<HousesBarChartsHorizontal/>}/> */}
        {/* <Route path="/" element={<HousesBarChartsHorizontal/>}/> */}
        <Route path="/vertical/barchart" element={<BarChart/>}/>
        <Route path="/horizontal/barchart" element={<BarChart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Content/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
