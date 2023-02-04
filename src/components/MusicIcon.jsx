import '../styles/MusicIcon.css';
import urlSoundtrack from '../assets/audios/musica-infantil.mp3';
import pop from '../assets/audios/pop.mp3';
import ActiveSound from './ActiveSound';
import MuteSound from './MuteSound';
import { useState } from 'react';
import ReactHowler from 'react-howler';

export default function MusicIcon(){
    const[music, setMusic] = useState(false);

    if(!music){
        return (
            <>
            <ReactHowler
                src={pop}
                playing={setMusic}
                loop={false}
                volume={1}
            />
            <MuteSound handleEvent={setMusic}/>
            </>
        )
    }else{
        return (
            <>
            <ReactHowler
                src={pop}
                playing={setMusic}
                loop={false}
                volume={1}
            />
            <ReactHowler
                src={urlSoundtrack}
                playing={setMusic}
                loop={true}
                volume={.5}
            />
            <ActiveSound handleEvent={setMusic}/>
            </>
        );
    }

    
}