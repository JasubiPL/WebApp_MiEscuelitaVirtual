import '../styles/FunctionButtonNav.css'

export default function FunctionButtonNav(props){
    return(
        <button className="function-button-nav" onClick={() => audioPop.play()}>
            {props.children}
        </button>
    );
}