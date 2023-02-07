import { Link } from 'react-router-dom';
import NavLevels from '../components/NavLevels';
import '../styles/Minigames.css'

export default function Minigames(){
    return(
        <section className='minigames-container' >
            <Link to='/'>
                <NavLevels tittle='Selecciona el Mini Juego'/>
            </Link>
            <article className='minigames-container__center' >

            </article>
        </section>
    );
}