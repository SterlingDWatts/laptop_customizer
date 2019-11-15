import React, { Component } from 'react';
import Option from '../Option/Option';
import './Feature.css';

export default class Feature extends Component {
    render() {
        const featureHash = this.props.feature + '-' + this.props.idx;
            const options = this.props.features[this.props.feature].map(item => {
                return (
                    <Option
                        feature={this.props.feature}
                        item={item}
                        selected={this.props.selected}
                        handleUpdateFeature={(feature, newValue) => this.props.handleUpdateFeature(feature, newValue)}
                    />
                )
            });
      
        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{this.props.feature}</h3>
                </legend>
                {options}
            </fieldset>
        );    
    }
}