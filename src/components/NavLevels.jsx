import '../styles/NavLevels.css'
import FunctionButtonNav from '../components/FunctionButtonsNav';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import MusicIcon from '../components/MusicIcon';

export default function NavLevels({tittle, url, sound}){
    return(
        <nav className='nav-levels'>
            <Link to={url} >
                <FunctionButtonNav>
                    <AiOutlineArrowLeft />
                </FunctionButtonNav>
            </Link>
            <h1 className='nav-levels__tittle'>{tittle}</h1>
            <MusicIcon sound={sound}/>
        </nav>
    );
}