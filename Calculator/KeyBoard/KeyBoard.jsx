import React, { Component } from 'react'

import Number from 'Number/Number'
import Button from 'Button/Button'


export class KeyBoard extends Component {
    render() {
        return (
            <div className="card">
                <Number />
                <Number /> 

                <Button />
                <Button />
                <Button />
                <Button />
                

            </div>
        )
    }
}

export default KeyBoard
