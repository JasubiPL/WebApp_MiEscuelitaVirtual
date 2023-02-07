import '../styles/FunctionButton.css'

export default function FunctionButton(props){
    
    return(
        <button className="function-button" onClick={() => props.click()}>
            {props.children}
        </button>
    );
}