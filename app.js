class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messageIsActive: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({messageIsActive: !this.state.messageIsActive})
    }

    render() {
        console.log(this.state.messageIsActive);
        
        const info = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid culpa ut ducimus atque, ipsum vitae perspiciatis, vero dolore cupiditate tempore sunt repellendus eius explicabo nulla debitis, fuga provident nobis accusantium?"
        return (
            <>
                <button onClick={this.handleClick}>{this.state.messageIsActive ? "Hide" : "Show"}</button>
                <p>{this.state.messageIsActive ? info : ""}</p>
            </>
        )
    }
}




ReactDOM.render(<React.StrictMode><Message /></React.StrictMode>, document.getElementById("root"))