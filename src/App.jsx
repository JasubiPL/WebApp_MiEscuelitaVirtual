import './App.css'
import { Route, Routes } from 'react-router-dom';
import MenuInicio from './Pages/MenuInicio'
import Vowels from './Pages/Vowels';
import Minigames from './Pages/Minigames'
import Numbers1 from './Pages/Numbers1';

export default function App(){

    return(
        <Routes>
            <Route path='/' element={<MenuInicio />} />
            <Route path='/minigame-vowels' element={<Vowels />} />
            <Route path='/minigames' element={<Minigames />} />
            <Route path='/minigame-numbers1' element={<Numbers1 />} />
        </Routes>
    );
}