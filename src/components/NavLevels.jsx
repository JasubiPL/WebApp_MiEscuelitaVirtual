import '../styles/NavLevels.css'
import FunctionButtonNav from '../components/FunctionButtonsNav';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import MusicIcon from '../components/MusicIcon';

export default function NavLevels({tittle}){
    return(
        <nav className='nav-levels'>
                <FunctionButtonNav>
                    <AiOutlineArrowLeft />
                </FunctionButtonNav>
            <h1 className='nav-levels__tittle'>{tittle}</h1>
        </nav>
    );
}