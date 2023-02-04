import '../styles/FunctionButtonNav.css'

export default function FunctionButtonNav(props){
    return(
        <button className="function-button-nav">
            {props.children}
        </button>
    );
}