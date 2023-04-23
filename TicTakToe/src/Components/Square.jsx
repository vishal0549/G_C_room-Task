
const Square = (props) => {
    return (
        <div 
            className="square-container"
            onClick={ props.onClick }
        >
            <h5>{ props.value }</h5>
        </div>
    )
}

export default Square;