import * as React from 'react';
import './wanted.css'
import woodBG from '../img/jail-cell-bg-new.jpg'
import { useGraphContext } from '../Utils/GraphContextProvider';
import { IStudentProps } from '../IStudentInterfaces';
import WantedPoster from './components/WantedPoster';
import { useEffect, useState } from 'react';
import { Helper } from '../Helpers';

function Wanted(){

    const[pages, setPages] = useState<string[]>([])
    const[zoomAnimationClass, setZoomAnimationClass] = useState<string>('');
    const[leftDoorAnimationClass, setLeftDoorAnimationClass] = useState<string>('');
    const[rightDoorAnimationClass, setRightDoorAnimationClass] = useState<string>('');
    const[wantedHeadingAnimationClass, setWantedHeadingAnimationClass] = useState<string>('');

    const{graphState} = useGraphContext();

    const rotate = [354, 0,6, 12, 354, 354];

    useEffect(()=>{
        if(graphState.GraphSettings.type === 'wanted' && graphState.GraphSettings.rippedPosters){
            setPages(graphState.GraphSettings.rippedPosters);
        }
    },[graphState])

    useEffect(() => {
        console.log(graphState.GraphSettings.interval)
            setTimeout(() => {
                setZoomAnimationClass(' wanted-zoom-in');
                setLeftDoorAnimationClass(' left-door-animate');
                setRightDoorAnimationClass(' right-door-animate');
                setWantedHeadingAnimationClass(' wanted-heading-show');
                }, graphState.GraphSettings.interval);
        }, []);

    if(graphState.GraphSettings.type === 'wanted'){
        return(
            <div className="wanted-wrapper">
                <div className="door-container">
                    <div className={'left-door' + leftDoorAnimationClass}></div>
                    <div className={'right-door' + rightDoorAnimationClass}></div>
                </div>
                <div className={'wanted-background-container' + zoomAnimationClass} style={{backgroundImage:`url(${woodBG})`}}></div>
                <div className="wanted-container">
                    <div className="wanted-heading-wrapper">

                        <div className={"wanted-heading-container" + wantedHeadingAnimationClass}>
                            <h1 className="wanted-today-heading">Today's</h1>
                            <h1 className="wanted-bounty-heading">BRILLIANCE BOUNTY</h1>
                        </div>

                    </div>
                    {graphState.GraphSettings.data.students && graphState.GraphSettings.data.students.length > 0 &&
                    <div className='wanted-poster-container'>
                        {pages && graphState.GraphSettings.rippedPosters && graphState.GraphSettings.data.students.map((student:IStudentProps,key) => {
                            if(key <= 5){
                                
                                return(
                                    <WantedPoster keyPos={key} key={key} student={student} rotate={rotate[key]} page={pages[key]}/>
                                )
                            }
                        })}
                    </div>
                    }
                        {graphState.GraphSettings.data.students && graphState.GraphSettings.data.students.length === 0 && 
                        <div className='wanted-no-data-container'>
                            <h1 className='wanted-no-data-heading'>Stay Tuned for</h1>
                            <h1 className='wanted-no-data-heading'>Today's Most Wanted!</h1>
                        </div>
                        }
                    
                </div>
            </div>
        );
    }else{
        return(<></>)
    }
}

export default Wanted