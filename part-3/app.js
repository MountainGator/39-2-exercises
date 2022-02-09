const People = () => {
    return (
        <div>
            <Person key="1" name="Louie" age="30" hobbies={ ['disc golf', 'gaming', 'coding'] }/>
            <Person key="2" name="Jakob" age="20" hobbies={ ['piano', 'rock climbing', 'swing dancing'] }/>
            <Person key="3" name="Drew" age="17" hobbies={ ['gaming', 'working out', 'soccer'] }/>
        </div>
    )
}

ReactDOM.render(<People />, document.getElementById('root'));