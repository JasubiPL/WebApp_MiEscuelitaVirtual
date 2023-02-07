import '../styles/MenuInicio.css'
import  FunctionButton from '../components/FunctionButton';
import FunctionButtonNav from '../components/FunctionButtonsNav';
import MusicIcon from '../components/MusicIcon';
import {FaPlay} from 'react-icons/fa'
import {TiInfoLarge} from 'react-icons/ti'
import jasubipLogo from '../img/Imagotipo-Blanco.png'
import { Link } from 'react-router-dom';


export default function MenuInicio(){

    return(
        <section className='intro-container'>
            <nav className='intro-container__nav'>
                <FunctionButtonNav><TiInfoLarge /></FunctionButtonNav>
                <MusicIcon />
            </nav>
            <article className='intro-container__center'>
            <h1 className='intro-container__tittle'>Mi Escuelita Virtual</h1>
                <Link to='/level-vowels' >
                <FunctionButton click={()=> audioPop.play()}>
                    <FaPlay />
                </FunctionButton>
                </Link>
            </article>
            <div className="credits">
                <small>Create by</small>
                <img src={jasubipLogo}/>
            </div>
        </section>
    );
}