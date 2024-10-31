import * as React from 'react';
import { useEffect, useState } from 'react';

interface ILeaderboardItemTitleProps{
    houseTotal:number;
    interval?:number;
}

function LeaderboardItemTitle(props:ILeaderboardItemTitleProps){

    const[total, setTotal] = useState<number>(0);

    useEffect(() => {
        let intervalId:NodeJS.Timeout;
        const timeoutId = setTimeout(() => {
          intervalId = setInterval(() => {
            setTotal(prevTotal => {
              if (prevTotal < props.houseTotal) {
                //for medium sized numbers
                if(props.houseTotal > 500){
                    //make sure not to + 5 over the houseTotal e.g houseTotal = 1991, prevTotal = 1990, + 5 == 1995 (added too much)
                    //if +5 is greater than houseTotal, only incrememnt by 1, else increment by 5
                    if(prevTotal + 5 > props.houseTotal){
                        return prevTotal + 1;
                    }else{
                        return prevTotal + 5;
                    }
                }else if(props.houseTotal < 500){
                    return prevTotal + 1;
                }else{
                    if(prevTotal + 10 > props.houseTotal){
                        return prevTotal + 1;
                    }else{
                        return prevTotal + 10;
                    }
                }
              } else {
                clearInterval(intervalId);
                return prevTotal;
              }
            });
          }, 1);
        }, props.interval? props.interval : 30000);
    
        return () => {
          clearTimeout(timeoutId);
          clearInterval(intervalId);
        };
      }, [props.houseTotal]);

    return(
        <h1 style={{fontSize:'85px', margin:'0px', textShadow:'-1px 2px #0000003b'}}>{total.toLocaleString()}</h1>
    );
}

export default LeaderboardItemTitle