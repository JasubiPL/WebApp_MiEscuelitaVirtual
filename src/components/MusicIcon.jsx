import '../styles/MusicIcon.css';
import ActiveSound from './ActiveSound';
import MuteSound from './MuteSound';
import { useState } from 'react';

export default function MusicIcon({sound}){
    const[music, setMusic] = useState(false);

    if(!music){
        return (
            <MuteSound handleEvent={setMusic} sound={sound}/>
        )
    }else{
        return (
            <ActiveSound handleEvent={setMusic} sound={sound}/>
        );
    }

    
}