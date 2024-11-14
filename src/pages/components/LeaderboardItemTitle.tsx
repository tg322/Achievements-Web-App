import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useGraphContext } from '../../Utils/GraphContextProvider';

interface ILeaderboardItemTitleProps{
    houseTotal:number;
}

function LeaderboardItemTitle(props:ILeaderboardItemTitleProps){

    const [count, setCount] = useState<number>(0);
    const {graphState} = useGraphContext();

  useEffect(() => {
    const timeOut = setTimeout(()=>{
        if (props.houseTotal <= 0) return;

            const totalTime = 4000; // Total time in milliseconds
            let startTime: number | null = null;
            let previousCount = 0;
            let animationFrameId: number;

            const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / totalTime, 1);

            // Calculate the desired count based on progress
            const desiredCount = Math.floor(props.houseTotal * progress);

            // Calculate the increment (ensuring it's a whole number)
            const increment = desiredCount - previousCount;

            if (increment > 0) {
                // Update the count by the increment
                setCount((prevCount) => prevCount + increment);
                previousCount = desiredCount;
            }

            if (progress < 1) {
                // Continue the animation
                animationFrameId = requestAnimationFrame(animate);
            } else {
                // Ensure the final count is set
                setCount(props.houseTotal);
            }
            };

            animationFrameId = requestAnimationFrame(animate);

            // Cleanup function
            return () => {
            cancelAnimationFrame(animationFrameId);
            };
    }, graphState.GraphSettings.interval)
    
  }, [props.houseTotal]);

    return(
        <h1 style={{fontSize:'85px', margin:'0px', textShadow:'-1px 2px #0000003b', textAlign:'center'}}>{count.toLocaleString()}</h1>
    );
}

export default LeaderboardItemTitle