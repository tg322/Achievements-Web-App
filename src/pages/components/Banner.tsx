import * as React from 'react';
import '../Table.css';
import { useEffect, useState } from 'react';
import { useGraphContext } from '../../Utils/GraphContextProvider';

export type BannerType = 'Parent' | 'Inset' | 'Inset Two';
export type BannerSize = 'Large' | 'Medium' | 'Small';

interface IParentBannerProps {
    backgroundColor: string;
    type: 'Parent';
    children: React.ReactNode;
    size: BannerSize;
    keyPos:number;
}

interface IOtherBannerProps {
    backgroundColor: string;
    type: 'Inset' | 'Inset Two';
    keyPos:number;
}

type IBannerProps = IParentBannerProps | IOtherBannerProps;

function Banner(props:IBannerProps){

    const[animationClass, setAnimationClass] = useState<string>('');

    const{graphState} = useGraphContext();

    useEffect(() => {
        if(props.type === 'Parent'){
        
            setTimeout(() => {
                switch (props.size) {
                    case 'Large':
                        setAnimationClass(' bannerLongDrop')
                        break;
                    case 'Medium':
                        setAnimationClass(' bannerMediumDrop')
                        break;
                    case 'Small':
                        setAnimationClass(' bannerShortDrop')
                        break;
                
                    default:
                        break;
                }
              }, graphState.GraphSettings.interval + props.keyPos * 700);
        }
    }, []);
    
    if(props.type === 'Parent'){
        return(
                <div className={ props.type === 'Parent' && props.size === 'Large'? 'banner' + animationClass : props.type === 'Parent' && props.size === 'Medium'? 'banner bannerMedium' + animationClass : 'banner bannerShort' + animationClass} style={{backgroundColor:`${props.backgroundColor}`}}>
                    {props.children}
                    <div className='bannerTriangle' style={{backgroundColor:`${props.backgroundColor}`}}></div>
                </div>
        );
    }else{
        return(
            <div className={props.type === 'Inset'? 'bannerInsetContainer' : 'bannerInsetTwoContainer'}>
                <div className={props.type === 'Inset'? 'bannerInset' : 'bannerInsetTwo'} style={{backgroundColor:`${props.backgroundColor}`}}></div>
                <div className={props.type === 'Inset'? 'bannerInsetTriangle' : 'bannerInsetTwoTriangle'} style={{backgroundColor:`${props.backgroundColor}`}}></div>
            </div>
        );
    }
   
}
export default Banner