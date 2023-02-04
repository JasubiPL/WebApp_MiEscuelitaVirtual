import '../styles/MenuInicio.css'
import  FunctionButton from './FunctionButton';
import FunctionButtonNav from './FunctionButtonsNav';
import {FaPlay} from 'react-icons/fa'
import {TiInfoLarge} from 'react-icons/ti'
import {RiMusicFill} from 'react-icons/ri'


export default function MenuInicio(){

    return(
        <section className='intro-container'>
            <nav className='intro-container__nav'>
                <FunctionButtonNav><TiInfoLarge /></FunctionButtonNav>
                <FunctionButtonNav><RiMusicFill /></FunctionButtonNav>
            </nav>
            <article className='intro-container__center'>
            <h1 className='intro-container__tittle'>Mi Escuelita Virtual</h1>
                <FunctionButton><FaPlay /></FunctionButton>
            </article>
        </section>
    );
}