import '../styles/Vowels.css'
import Letters from "./Letters";



function Vowels(){
    return(
        <div className="centerLetters">
            <div className='centerTittle'>
            <h1 className='lettersTittle'>Mi Escuelita Virtual</h1>
            <p>Las Vocales</p>
            </div>
            <div className='containerLetters'>
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