import React, { Component } from 'react';
import './SummaryOption.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default class SummaryOption extends Component {
    render() {
        const featureHash = this.props.feature + '-' + this.props.idx;
        const selectedOption = this.props.selected[this.props.feature];
        return (
            <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">
                    {this.props.feature} 
                </div>
                <div className="summary__option__value">
                    {selectedOption.name}
                </div>
                <div className="summary__option__cost">
                    {USCurrencyFormat.format(selectedOption.cost)}
                </div>
            </div>
        )
    }
}