import '../styles/Letters.css'

const Letters = (props) =>(

        <button className={`lettersStyle ${props.children[1]}`} onClick={() => props.click()}>
            {props.children}
        </button>
    
);

export default Letters;