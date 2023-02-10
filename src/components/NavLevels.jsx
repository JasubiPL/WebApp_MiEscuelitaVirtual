import '../styles/NavLevels.css'
import FunctionButtonNav from '../components/FunctionButtonsNav';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import MusicIcon from '../components/MusicIcon';

export default function NavLevels({tittle, url, sound,icon}){
    return(
        <nav className='nav-levels'>
            <Link to={url} >
                <FunctionButtonNav icon={<AiOutlineArrowLeft /> } click={() => {audioPop.play(); backgroundMusic.play()}}/>
            </Link>
            <h1 className='nav-levels__tittle'>{tittle}</h1>
            <FunctionButtonNav icon={icon} click={() => sound.play()} />
        </nav>
    );
}