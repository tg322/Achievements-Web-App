import * as React from 'react';
import './BarCharts.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Bar from './components/Bar';
import axios from 'axios';
import { Direction, IHouseProps } from '../IHouseInterfaces';
import { Helper } from '../Helpers';
import bg from '../img/graph_background_image.png';
import corinth from '../img/john_bosco.png'
import BarChartContainerVertical from './components/BarChartContainerVertical';
import BarChartContainerHorizontal from './components/BarChartContainerHorizontal';

function BarChart(){

    const[orientation, setOrientation] = useState<string>('');

    const urlLocation = useLocation();
    const queryParameters = new URLSearchParams(window.location.search);

    function determineOrientation(){
        if(urlLocation.pathname.includes('vertical')){
            setOrientation('vertical');
        }else if(urlLocation.pathname.includes('horizontal')){
            setOrientation('horizontal');
        }
    }

    useEffect(() => {
        determineOrientation();

    }, [])

    if(orientation === 'vertical'){
        return(
                <BarChartContainerVertical/>
        );
    }else{
        return(
                <BarChartContainerHorizontal/>
        );
    }
}

export default BarChart