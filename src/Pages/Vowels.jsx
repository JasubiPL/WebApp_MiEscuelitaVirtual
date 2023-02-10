import '../styles/Vowels.css'
import Letters from '../components/Letters'
import NavLevels from '../components/NavLevels';
import {RiMusicFill} from 'react-icons/ri'



function Vowels(){

    backgroundMusic.pause();

    return(
        <div className="vowels-container">
                <NavLevels 
                tittle='Las Vocales'
                url='/minigames'
                icon={<RiMusicFill />}
                sound={audioPop}
                />
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