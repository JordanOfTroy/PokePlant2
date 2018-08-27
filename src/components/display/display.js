import React, {Component} from 'react' 
import './display.css'
import Postcard from 
'../postcard/postcard.js'

class display extends Component {
    constructor (props) {
        super(props)

        this.state = {
		
			pokeURL: ''
		}
		
	
	}



  render (props) {
	  console.log(this.state)
		let {pokePlants} = this.props
		if (pokePlants.length > 0) {
			let pokeTemplate = pokePlants.map((pokePlant, index) => {
				let {name, date, pokeImg} = pokePlant
				return (
					<Postcard
					key = {index}
					name = {name}
					date = {date}
					pokePic = {this.state.pokeURL}
					handleWaterClick = {this.handleWaterClick}
					pokeImg = {pokeImg}
					/>
				)
			})
			return pokeTemplate
		}
		else {
			return (<div></div>)
		}

	}
}

export default display