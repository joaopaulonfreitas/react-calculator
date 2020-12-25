import React from 'react'
import './Copyright.css'
import logo from '../images/joaopaulonfreitas.jpg'

export default props => {
    return (
        <div className="copy">
            <img src={logo}
            title={props.author}
            alt={props.author} />
            <div className="copy_text">
                <p><b>{props.author}</b></p>
                <p>{props.site}</p>
            </div>
        </div>
    )
}