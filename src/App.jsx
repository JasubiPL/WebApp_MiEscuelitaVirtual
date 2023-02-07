import './App.css'
import { Route, Routes } from 'react-router-dom';
import MenuInicio from './Pages/MenuInicio'
import Vowels from './Pages/Vowels';
import { useEffect } from 'react';

export default function App(){

    return(
        <Routes>
            <Route path='/' element={<MenuInicio />} />
            <Route path='/level-vowels' element={<Vowels />} />
        </Routes>
    );
}