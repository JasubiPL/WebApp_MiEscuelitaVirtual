import '../styles/FunctionButton.css'
import Vowels from './Vowels';

export default function FunctionButton(props){

    return(
        <button className="function-button">
            {props.children}
        </button>
    );
}