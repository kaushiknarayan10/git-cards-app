import React from 'react'

class Form extends React.Component {
    state = {userName : ''};

    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await fetch(`https://api.github.com/users/${this.state.userName}`, {
            method:'GET'
        });
        if(resp.ok){
            const jsondata = await resp.json();
            this.props.onSubmit(jsondata);
            this.setState({userName : ''});
        }
        else{
            this.setState({userName : ''});
            alert("User Not Found")
        }

    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                value = {this.state.userName}
                onChange = {event => this.setState({userName : event.target.value })}
                placeholder="GitHub Username" 
                required ></input>
                <button>Add Card</button>
            </form>
        );
    }
}
export default Form;