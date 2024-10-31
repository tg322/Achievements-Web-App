import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BarChart from './pages/BarChart';
import Leaderboard from './pages/Leaderboard';
import Initialise from './Utils/Initialise';
import { GraphProvider } from './Utils/GraphContextProvider';

const Content = () => {

  // const queryParameters = new URLSearchParams(window.location.search);
  // const year = queryParameters.get("year");

  // console.log(year);

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/vertical/'>
          <Route path="barchart" element={<Initialise>
            <BarChart/>
          </Initialise>}/>
        </Route>
        <Route path='/horizontal/'>
          <Route path="barchart" element={<Initialise>
            <BarChart/>
          </Initialise>}/>
          <Route path='leaderboard' element={<Initialise>
            <Leaderboard/>
          </Initialise>}/>
        </Route>
        {/* <Route path="/vertical/barchart" element={<BarChart/>}/>
        <Route path="/horizontal/barchart" element={<BarChart/>}/>
        <Route path='/leaderboard/houses'/> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GraphProvider>
      <Content/>
    </GraphProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
