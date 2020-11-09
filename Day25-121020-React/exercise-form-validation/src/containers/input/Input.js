import React, { Component } from 'react'

export default class Input extends Component {

    getClassCSS = () => {
        let cssClass = "Input InputElement";
        if(this.props.error && this.props.error.isTouched) {
            cssClass += " Invalid";
        }

        return cssClass;
    };

    render() {
        const { value, onChangeInput, name, placeholder} = this.props;

        return (
            <div>
                <input
                    value={value}
                    onChange={onChangeInput}
                    className={this.getClassCSS()}
                    name={name}
                    placeholder={placeholder}
                />
                 <p className="ErrorMessage">{this.props.error.message}</p>
            </div>
        )
    }
}
