import { Link } from 'react-router-dom';
import '../styles/MinigameCard.css'

export default function MinigameCard({urlMinigame, iconMinigame}){
    return(
        <Link to={urlMinigame}>
            <div className='minigamecard-container' onClick={() => audioPop.play()}>
                <img src={iconMinigame} />
            </div>
        </Link>
    );
}

