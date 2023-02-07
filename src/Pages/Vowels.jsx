import '../styles/Vowels.css'
import Letters from '../components/Letters'
import FunctionButtonNav from '../components/FunctionButtonsNav';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import MusicIcon from '../components/MusicIcon';



function Vowels(){
    return(
        <div className="vowels-container">
            <nav className='vowels-container__nav'>
                <Link to="/">
                    <FunctionButtonNav>
                        <AiOutlineArrowLeft />
                    </FunctionButtonNav>
                </Link>
                <MusicIcon />
            </nav>
            <div className='vowels-container__tittle-container'>
                <h1 className='vowels-container__tittle'>Las Vocales</h1>
            </div>
            <div className='vowels-container__vowels-center'>
                <Letters click={ () => audioVocalA.play()} >Aa</Letters>
                <Letters click={ () => audioVocalE.play()} >Ee</Letters>
                <Letters click={ () => audioVocalI.play()} >Ii</Letters>
                <Letters click={ () => audioVocalO.play()} >Oo</Letters>
                <Letters click={ () => audioVocalU.play()} >Uu</Letters>
            </div>
        </div>
    );
}

export default Vowels;