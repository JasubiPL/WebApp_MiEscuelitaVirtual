import '../styles/NavLevels.css'
import FunctionButtonNav from '../components/FunctionButtonsNav';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import MusicIcon from '../components/MusicIcon';

export default function NavLevels({tittle, url, sound,icon}){

  const stopSound = () =>{
    var sonidos = document.getElementsByTagName('audio');

    // Pausar cada elemento de audio
    for(var i = 0; i < sonidos.length; i++) {
      if(sonidos[i].id === "backgroundMusic"){
        console.log("")
      }else{
        sonidos[i].pause();
      }

      audioPop.play()
    }


  }
  return(
    <nav className='nav-levels'>
      <Link to={url} >
        <FunctionButtonNav icon={<AiOutlineArrowLeft /> } click={stopSound}/>
      </Link>
      <h1 className='nav-levels__tittle'>{tittle}</h1>
      <FunctionButtonNav icon={icon} click={() => sound.play()} />
    </nav>
  );
}