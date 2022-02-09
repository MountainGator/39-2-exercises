const Person = (props) => {
    let reply;
    if(props.age >= 18) {
        reply = 'please go vote!';
    } else reply = 'you must be 18';
    
    let shortName = props.name.length > 8 ? props.name.slice(0,5) : props.name;
    return (
        <div>
            <h2>{shortName}</h2>
            <p>Learn some information about this person</p>
            <h3>{reply}</h3>
            <ul>
                {props.hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    )
}