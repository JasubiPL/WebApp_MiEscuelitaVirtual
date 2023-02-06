import '../../styles/Vowels.css'
import Letters from "../Letters";



function Vowels(){
    return(
        <div className="vowels-container">
            <div className='vowels-container__tittle-container'>
                <h1 className='vowels-container__tittle'>Las Vocales</h1>
            </div>
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