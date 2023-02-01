import '../styles/Vowels.css'
import Letters from "./Letters";



function Vowels(){
    return(
        <div className="centerLetters">
            <h1 className='lettersTittle'>Mi Escuelita Virtual</h1>
            <div className='containerLetters'>
                <Letters click={ () => audioVocalA.play()} >Aa</Letters>
                <Letters>Ee</Letters>
                <Letters>Ii</Letters>
                <Letters>Oo</Letters>
                <Letters>Uu</Letters>
            </div>
        </div>
    );
}

export default Vowels;