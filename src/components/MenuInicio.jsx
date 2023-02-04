import '../styles/MenuInicio.css'
import  FunctionButton from './FunctionButton';
import {FaPlay} from 'react-icons/fa'

export default function MenuInicio(){
    return(
        <section className='intro-container'>
            <article className='intro-container__center'>
                <h1 className='intro-container__tittle'>Mi Escuelita Virtual</h1>
                <FunctionButton><FaPlay /></FunctionButton>
            </article>
        </section>
    );
}