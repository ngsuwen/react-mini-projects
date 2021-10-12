function Bedroom(props) {
    return (
        <div className={`Bedroom-${props.num}`}>
            <h1>Bedroom {props.num}</h1>
        </div>
    );
}

export default Bedroom