import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BarChart from './pages/BarChart';
import Leaderboard from './pages/Leaderboard';
import { GraphProvider } from './Utils/GraphContextProvider';
import Table from './pages/Table';
import NewInitialise from './Utils/NewInitialise';
import Home from './pages/Home';
import SPCCSplashScreen from './pages/components/SPCCSplashScreen';
import WantedPoster from './pages/WantedPoster';

const Content = () => {

  return(
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/splashtest' element={<SPCCSplashScreen/>}/>
        <Route path='/vertical/'>
          <Route path='wanted' element={
            <NewInitialise>
              <WantedPoster/>
            </NewInitialise>}/>
          <Route path="barchart" element={
            <NewInitialise>
            <BarChart/>
          </NewInitialise>}/>
          <Route path='table' element={
            <NewInitialise>
            <Table/>
          </NewInitialise>}/>
          
        </Route>
        <Route path='/horizontal/'>
          <Route path="barchart" element={
            <NewInitialise>
              <BarChart/>
            </NewInitialise>}/>
          <Route path='leaderboard' element={
            <NewInitialise>
              <Leaderboard/>
            </NewInitialise>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <GraphProvider>
      <Content/>
    </GraphProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
