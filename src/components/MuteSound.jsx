import {MdMusicOff} from 'react-icons/md'

const MuteSound =({ handleEvent }) =>{

    const muteSound = e =>{
        handleEvent(true);
        audioPop.play();
        backgroundMusic.play()
    } 

    return (
        <button className="music-icon" onClick={() => muteSound()}>
            <MdMusicOff />
        </button>
    )
}

export default MuteSound;