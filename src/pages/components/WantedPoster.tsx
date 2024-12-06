import * as React from 'react';
import { IStudentProps } from '../../IStudentInterfaces';
import handLeft from '../../img/hand-point-left-regular.svg';
import handRight from '../../img/hand-point-right-regular.svg';
import user from '../../img/user-solid.svg';

import '../wanted.css'
import { useEffect, useState } from 'react';
import { useGraphContext } from '../../Utils/GraphContextProvider';

interface IWantedPoserProps{
    student:IStudentProps;
    keyPos:number;
    rotate:number;
    page:string;
}

function WantedPoster(props: IWantedPoserProps){
    const[animationClass, setAnimationClass] = useState<string>('');

    const{graphState} = useGraphContext();

    const{
        student,
        keyPos,
        rotate,
        page
    } = props

    const delay = keyPos === 0? 200 : keyPos === 1? 600 : keyPos === 2? 400 : keyPos === 3? 1200 : keyPos === 4? 800 : 1000;

    useEffect(() => {
        setTimeout(() => {
            setAnimationClass(' wantedPosterWrapperShow')
            }, graphState.GraphSettings.interval + delay);
    }, []);
    
    return(
        <div className={'wantedPosterWrapper' + animationClass}>
            <div className='wantedPoster' style={{rotate:`${rotate}deg`, backgroundImage:`url(${page})`}}>
                <div className='wantedPosterContentContainer' style={{padding:`${keyPos === 0? '20px 40px' : keyPos === 5? '20px 40px' : '40px'}`, justifyContent:`${keyPos === 0? 'start' : keyPos === 5? 'start' : 'center'}`}}>
                    <div className='wantedTitleContainer'><img className='wantedTitleHandIcon' src={handRight}/><h1 className='wantedTitle'>WANTED</h1><img className='wantedTitleHandIcon' src={handLeft}/></div>
                    <div className='wantedStudentImageContainer'>
                        <img className='wantedStudentImage' src={student.blob? student.blob : user}/>
                        <div className='wantedStudentHousePointsContainer'>
                            <span className='wantedStudentHousePoints'>{student.points}</span>
                        </div>
                    </div>
                    <div className='wantedStudentNameContainer'>
                        <span className='wantedHousePointsTitle'>HOUSE POINTS</span>
                        <h1 className='wantedStudentName'>{student.studentForename + ' ' + student.studentSurname + ' ' + '(' + student.studentReg + ')' }</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WantedPoster