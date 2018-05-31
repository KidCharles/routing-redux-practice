import React, { Component } from 'react';
import {addAnswer} from '../ducks/reducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class Favorites extends Component {
    constructor(props) {
        super(props);
        
        this.state ={
            fav1:'',
            fav2:'',
            fav3:'',
        }
        this.handleinput = this.handleinput.bind(this)

    }
    handleinput(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick(){
        const {fav1, fav2, fav3} = this.state
        let answerArr = [fav1, fav2, fav3]
        this.props.answers.map((e)=>answerArr.unshift(e))
        this.props.addAnswer(
            answerArr
        )
    }
    
  render() {
    return (
      <div>
        <h1>Favorites</h1>
        <h2>Enter your three favorite things</h2>
        <h3>Favorite 1</h3>
        <input name='fav1' value={this.state.fav1} onChange={this.handleinput}/>
        <h3>Favorite 2</h3>
        <input name='fav2' value={this.state.fav2} onChange={this.handleinput}/>
        <h3>Favorite 3</h3>
        <input name='fav3' value={this.state.fav3} onChange={this.handleinput}/>
        <br/>
        <Link to='/results'><button onClick={()=>this.handleClick()}>See Results</button></Link>
      </div>
    )
  }
};
function mapStateToProps(state){
    return{
        answers: state.answers
    }
}
export default connect(mapStateToProps, {addAnswer})(Favorites)
