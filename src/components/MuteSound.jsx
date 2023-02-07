import {MdMusicOff} from 'react-icons/md'

const MuteSound =({ handleEvent, sound }) =>{

    const muteSound = e =>{
        //alert(sound)
        handleEvent(true);
        audioPop.play();
        sound.play();
    } 

    return (
        <button className="music-icon" onClick={() => muteSound()}>
            <MdMusicOff />
        </button>
    )
}

export default MuteSound;