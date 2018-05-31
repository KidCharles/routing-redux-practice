import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addAnswer } from '../ducks/reducer'
import { Link } from 'react-router-dom'
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            ageInput: ''

        }
        this.handleinput = this.handleinput.bind(this)
    }

    handleinput(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick() {
        this.props.addAnswer(
            [
                this.state.ageInput,
                this.state.nameInput
            ]
        )
    }


    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Register</h1>
                <h3>Name</h3>
                <input name='nameInput' value={this.state.nameInput} onChange={this.handleinput} />
                <br />
                <h3>age</h3>
                <input type='number' name='ageInput' value={this.state.ageInput} onChange={this.handleinput} />
                <br/>
                <Link to='/favorites'><button onClick={() => this.handleClick()}>Next Question</button></Link>
            </div>
        )
    }
};
function mapStateToProps(state) {
    return {
        answers: state.answers
    }
}

export default connect(mapStateToProps, { addAnswer })(Register)