import '../styles/MusicIcon.css'
import ActiveSound from './ActiveSound';
import MuteSound from './MuteSound';
import { useState } from 'react';

export default function MusicIcon(){
    const[music, setMusic] = useState(true);

    if(!music){
        return (
            <MuteSound handleEvent={setMusic}/>
        )
    }else{
        return (
            <ActiveSound handleEvent={setMusic}/>
        );
    }

    
}