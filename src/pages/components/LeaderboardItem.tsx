import * as React from 'react';
import { IHouseProps } from '../../IHouseInterfaces';
import { useEffect, useState } from 'react';
import LeaderboardItemTitle from './LeaderboardItemTitle';

interface ILeaderboardItemProps{
    house:IHouseProps;
    interval?:number;
}

function LeaderboardItem(props:ILeaderboardItemProps){

return(
    <div id='item' style={{display:'flex', width:'100%', height:'100%', backgroundColor:`${props.house.houseColor}`, justifyContent:'space-between', alignItems:'center', boxSizing:'border-box'}}>
        <div style={{display:'flex', height:'100%', width:'150px', backgroundColor:`rgb(${props.house.darkerHouseColor.r}, ${props.house.darkerHouseColor.g}, ${props.house.darkerHouseColor.b}`, alignItems:'center', padding:'30px 15px 30px 15px', boxSizing:'border-box', color:`${props.house.houseColor}`, justifyContent:'center', flexShrink:'0'}}>
            <h1 style={{fontSize:'140px', margin:'0px', fontWeight:'900'}}>{props.house.houseDescription.charAt(0)}</h1>
        </div>
        <div style={{display:'flex', height:'100%', boxSizing:'border-box', alignItems:'center', padding:'30px 30px 30px 15px', color:'white'}}>
            <LeaderboardItemTitle houseTotal={props.house.houseTotal} interval={props.interval? props.interval : undefined}/>
        </div>
    </div>
);
}
export default React.memo(LeaderboardItem)