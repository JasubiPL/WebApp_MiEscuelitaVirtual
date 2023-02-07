import {RiMusicFill} from 'react-icons/ri'

const ActiveSound =({ handleEvent }) =>{

    const activeSound = e =>{
        handleEvent(false);
        audioPop.play();
        backgroundMusic.pause();
    } 

    return (
        <button className="music-icon" onClick={() => activeSound()}>
            <RiMusicFill />
        </button>
    )
}

export default ActiveSound;