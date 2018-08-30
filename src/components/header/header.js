import React from 'react'
import './header.css'
import SideImage from './side_image/side_image.js'

function header (props) {
    return (
        <div id = 'header_body'>
            <div>
                <SideImage
                img1 = {'http://static.pokemonpets.com/images/monsters-images-300-300/44-Gloom.png'}/>
            </div>
            <div>
                <h1 id = 'headet_text'>POKE-PLANT</h1>
            </div>
            <div>
                <SideImage
                img1 = {'data:image/png;base64,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'}/>
            </div>
        </div>
    )
}

export default header