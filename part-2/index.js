const Tweet = (props) => {
    return (
        <p><b>{props.name}</b> <span style={{color: "#777777"}}> @{props.username} | {props.date}</span> <br /> 
        this is {props.username}'s tweet</p>
    )
}