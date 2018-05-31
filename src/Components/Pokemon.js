import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../ducks/reducer'


class Pokemon extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getPokemon(this.props.match.params.id)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {
                    this.props.pokemon.name ?
                        <div>
                            <h1> Pokemon #{this.props.match.params.id}</h1>
                            <h2>is</h2>
                            <br />
                            <h1>{this.props.pokemon.name}</h1>
                            <img src={this.props.pokemon.sprites.front_default}/>
                        </div>
                        :
                        <h1>LOADING</h1>
                }
            </div>
        )
    }
};
function mapStateToProps(state) {
    console.log(state)
    return {
        pokemon: state.pokemon
    }
}
export default connect(mapStateToProps, { getPokemon })(Pokemon)
