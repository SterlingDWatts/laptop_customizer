import React, { Component } from 'react';
import './MainSummary.css';
import SummaryOption from '../SummaryOption/SummaryOption';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default class MainSummary extends Component {
    render() {
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            return (
                <SummaryOption
                    feature={feature}
                    idx={idx}
                    selected={this.props.selected}
                />
            );
        });
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <div className="summary__total">
                    <div className="summary__total__label">
                        Total
                    </div>
                    <div className="summary__total__value">
                        {USCurrencyFormat.format(total)}
                    </div>
                </div>
            </section>
        )
    }
}