import React from 'react';
import { connect } from 'react-redux';

const Ticker = ({ ticker }) => {
  function renderTicker() {
    if (ticker && !ticker.isLoading) {
      return (
        <div>
          <h3>BTCUSD</h3>
          <ul>
            <li>Price {ticker.price}</li>
            <li>
              24 Hour Percent Change {`${ticker.percentChange.toFixed(2)}%`}
            </li>
            <li>High {ticker.high}</li>
            <li>Low {ticker.low}</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <span>Loading Ticker</span>
        </div>
      );
    }
  }

  return <div>{renderTicker()}</div>;
};

const mapStateToProps = state => ({
  ticker: state.ticker
});

export default connect(mapStateToProps)(Ticker);
