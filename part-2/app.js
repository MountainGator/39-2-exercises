const TweetList = () => {
    
    return (
        <div>
        {/* <Tweet username="coolguy1" name="Kyle" message={`this is ${this.username}'s tweet`} />  */}
        <Tweet username="coolguy1" name="Kyle" date={new Date().toDateString()} />
        <Tweet username="coolguy2" name="Brad" date={new Date().toDateString()} /> 
        <Tweet username="coolgirl" name="Mandy" date={new Date().toDateString()} /> 
        </div>
    )
}

ReactDOM.render(<TweetList />, document.getElementById('root'));