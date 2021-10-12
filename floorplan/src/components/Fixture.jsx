function Fixture(props) {
    return (
        <div className={`${props.name}`}>
          <h2>{props.name}</h2>
        </div>
    );
}

export default Fixture