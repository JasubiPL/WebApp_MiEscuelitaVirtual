import '../styles/NavLevels.css'
import FunctionButtonNav from '../components/FunctionButtonsNav';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import MusicIcon from '../components/MusicIcon';

export default function NavLevels(){
    return(
        <nav className='nav-levels'>
            <Link to="/">
                <FunctionButtonNav>
                    <AiOutlineArrowLeft />
                </FunctionButtonNav>
            </Link>
        </nav>
    );
}