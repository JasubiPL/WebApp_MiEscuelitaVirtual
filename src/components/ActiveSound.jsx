import {RiMusicFill} from 'react-icons/ri'

const ActiveSound =({ handleEvent ,sound }) =>{

    const activeSound = e =>{
        alert(sound)
        handleEvent(false);
        audioPop.play();
        sound.pause();
        
    } 

    return (
        <button className="music-icon" onClick={() => activeSound()}>
            <RiMusicFill />
        </button>
    )
}

export default ActiveSound;