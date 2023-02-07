import '../styles/Minigames.css'
import MinigameCard from '../components/MinigameCard';
import NavLevels from '../components/NavLevels';
import minigameVowelsIcon from '../img/minigame-vowels-icon.png'


export default function Minigames(){
    return(
        <section className='minigames-container' >
                <NavLevels 
                tittle='Selecciona el Mini Juego'
                url='/'
                sound={backgroundMusic}
                />
            <article className='minigames-container__center' >
                <MinigameCard
                urlMinigame='/minigame-vowels'
                iconMinigame={minigameVowelsIcon}
                />

            </article>
        </section>
    );
}