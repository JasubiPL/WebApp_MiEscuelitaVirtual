import '../styles/Minigames.css'
import MinigameCard from '../components/MinigameCard';
import NavLevels from '../components/NavLevels';
import minigameVowelsIcon from '../img/minigame-vowels-icon.png'
import minigameNumbersIcon from '../img/numbers1/numbers-icon.jpg'
import {AiFillStar} from 'react-icons/ai'


export default function Minigames(){
    return(
        <section className='minigames-container' >
                <NavLevels 
                tittle='Selecciona el Mini Juego'
                url='/'
                sound={audioPop}
                icon={<AiFillStar />}
                />
            <article className='minigames-container__center' >
                <MinigameCard
                urlMinigame='/minigame-vowels'
                iconMinigame={minigameVowelsIcon}
                />
                <MinigameCard
                urlMinigame='/minigame-numbers1'
                iconMinigame={minigameNumbersIcon}
                />

            </article>
        </section>
    );
}