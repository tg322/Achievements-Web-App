import * as React from 'react';
import { IHouseProps } from '../../IHouseInterfaces';
import { useEffect, useState } from 'react';
import LeaderboardItemTitle from './LeaderboardItemTitle';
import { useGraphContext } from '../../Utils/GraphContextProvider';

interface ILeaderboardItemProps{
    house:IHouseProps;
}

function LeaderboardItem(props:ILeaderboardItemProps){

const houseColor = `rgb(${props.house.houseColor.r}, ${props.house.houseColor.g}, ${props.house.houseColor.b})`;
const darkerHouseColor = `rgb(${props.house.darkerHouseColor.r}, ${props.house.darkerHouseColor.g}, ${props.house.darkerHouseColor.b}`;

return(
    <div id='item' style={{display:'flex', width:'100%', height:'100%', backgroundColor:houseColor, justifyContent:'space-between', alignItems:'center', boxSizing:'border-box'}}>
        <div style={{display:'flex', height:'100%', width:'150px', backgroundColor:darkerHouseColor, alignItems:'center', padding:'30px 15px 30px 15px', boxSizing:'border-box', color:houseColor, justifyContent:'center', flexShrink:'0'}}>
            <h1 style={{fontSize:'140px', margin:'0px', fontWeight:'900'}}>{props.house.houseDescription.charAt(0)}</h1>
        </div>
        <div style={{display:'flex', width:'100%', height:'100%', boxSizing:'border-box', alignItems:'center', padding:'30px 30px 30px 15px', color:'white', justifyContent:'center'}}>
            <LeaderboardItemTitle houseTotal={props.house.houseTotal}/>
        </div>
    </div>
);
}
export default React.memo(LeaderboardItem)