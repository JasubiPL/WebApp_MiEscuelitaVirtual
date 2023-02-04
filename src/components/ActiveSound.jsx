import {RiMusicFill} from 'react-icons/ri'

const ActiveSound =({ handleEvent }) =>{
    return (
        <button className="music-icon" onClick={e => handleEvent(false)}>
            <RiMusicFill />
        </button>
    )
}

export default ActiveSound;