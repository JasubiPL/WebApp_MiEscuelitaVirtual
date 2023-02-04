import {MdMusicOff} from 'react-icons/md'

const MuteSound =({ handleEvent }) =>{
    return (
        <button className="music-icon" onClick={e => handleEvent(true)}>
            <MdMusicOff />
        </button>
    )
}

export default MuteSound;