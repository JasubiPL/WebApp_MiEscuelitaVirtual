import '../../styles/MenuInicio.css'
import  FunctionButton from '../FunctionButton';
import FunctionButtonNav from '../FunctionButtonsNav';
import MusicIcon from '../MusicIcon';
import {FaPlay} from 'react-icons/fa'
import {TiInfoLarge} from 'react-icons/ti'
import jasubipLogo from '../../img/Imagotipo-Blanco.png'


export default function MenuInicio(){

    return(
        <section className='intro-container'>
            <nav className='intro-container__nav'>
                <FunctionButtonNav><TiInfoLarge /></FunctionButtonNav>
                <MusicIcon />
            </nav>
            <article className='intro-container__center'>
            <h1 className='intro-container__tittle'>Mi Escuelita Virtual</h1>
                <FunctionButton click={()=> audioPop.play()}>
                    <FaPlay />
                </FunctionButton>
            </article>
            <div className="credits">
                <small>Create by</small>
                <img src={jasubipLogo}/>
            </div>
        </section>
    );
}