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
import { useGraphContext } from '../Utils/GraphContextProvider';

function BarChart(){

    const{graphState} = useGraphContext();

    if(graphState.GraphSettings.orientation === 'vertical'){
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