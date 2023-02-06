import '../styles/FunctionButton.css'
import url from '../Pages/vowels-level'

export default function FunctionButton(props){
    
    return(
        <button className="function-button" onClick={() => props.click()}>
            {props.children}
        </button>
    );
}