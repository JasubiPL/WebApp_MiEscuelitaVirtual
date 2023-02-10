import '../styles/FunctionButtonNav.css'

export default function FunctionButtonNav(props){
    return(
        <button className="function-button-nav" onClick={() => props.click()}>
            {props.children}
            {props.icon}
        </button>
    );
}