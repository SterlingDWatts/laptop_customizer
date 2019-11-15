import React, { Component } from 'react';
import Feature from '../Feature/Feature';
import './MainForm.css';

export default class MainForm extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            return (
                <Feature 
                    features={this.props.features}
                    feature={feature}
                    idx={idx}
                    selected={this.props.selected}
                    handleUpdateFeature={(feature, newValue) => this.props.handleUpdateFeature(feature, newValue)}
                />
            );
          });
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}