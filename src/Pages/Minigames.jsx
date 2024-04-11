import '../styles/Minigames.css'
import MinigameCard from '../components/MinigameCard';
import NavLevels from '../components/NavLevels';
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
                iconMinigame="/img/minigame-vowels-icon.png"
                />
                <MinigameCard
                urlMinigame='/minigame-numbers1'
                iconMinigame="/img/numbers1/numbers-icon.webp"
                />

            </article>
        </section>
    );
}