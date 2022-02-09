const ContainerDiv = () => {
    return ( 
        <div>
            <FirstComponent />
            <NamedComponent name="Luke" />
        </div>
    )
}

ReactDOM.render(<ContainerDiv />, document.getElementById('root'));